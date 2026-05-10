import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { name, email, mobile, password } = await req.json();

    if (!name || !email || !password) {
      return Response.json({ message: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        mobile,
        password: hashedPassword,
      },
    });

    // Send Welcome Email
    const emailHtml = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Welcome to AI Training, ${name}!</h2>
        <p>Your registration was successful. We are excited to have you on board.</p>
        <p>Explore our courses and start learning AI today!</p>
        <br />
        <p>Best Regards,</p>
        <p>AI Training Team</p>
      </div>
    `;
    await sendEmail(email, "Welcome to AI Training!", emailHtml);

    return Response.json(
      { message: "User registered successfully", user: { id: user.id, email: user.email } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
