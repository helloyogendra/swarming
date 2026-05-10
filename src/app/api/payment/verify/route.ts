import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return Response.json({ message: "Invalid Signature" }, { status: 400 });
    }

    // Add subscription
    await prisma.subscription.create({
      data: {
        userId: session.user.id,
        courseId,
        status: "PAID",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
      },
    });

    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    const course = await prisma.course.findUnique({ where: { id: courseId } });

    // Send Payment Confirmation Email
    if (user && course) {
      const emailHtml = `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Payment Successful!</h2>
          <p>Hi ${user.name},</p>
          <p>Your payment for <strong>${course.title}</strong> was successful.</p>
          <p>You can now access your course from your dashboard.</p>
          <br />
          <p>Best Regards,</p>
          <p>AI Training Team</p>
        </div>
      `;
      await sendEmail(user.email, "Payment Confirmation - AI Training", emailHtml);
    }

    return Response.json({ message: "Payment verified successfully" }, { status: 200 });
  } catch (error) {
    console.error("Verify payment error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
