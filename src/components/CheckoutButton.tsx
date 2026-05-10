"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

interface CheckoutButtonProps {
  courseId: string;
  price: number;
}

export default function CheckoutButton({ courseId, price }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    setLoading(true);
    try {
      // 1. Create Order on Backend
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      // 2. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder", 
        amount: data.order.amount,
        currency: "INR",
        name: "AI Training",
        description: "Course Enrollment",
        order_id: data.order.id,
        handler: async function (response: any) {
          // 3. Verify Payment on Backend
          const verifyRes = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              courseId,
            }),
          });
          const verifyData = await verifyRes.json();
          if (verifyRes.ok) {
            alert("Payment successful!");
            router.refresh();
          } else {
            alert("Payment verification failed: " + verifyData.message);
          }
        },
        prefill: {
          name: "User",
          email: "user@example.com",
        },
        theme: {
          color: "#6366f1",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any){
        alert("Payment Failed. Reason: " + response.error.description);
      });
      rzp.open();

    } catch (error: any) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button 
        onClick={handlePayment} 
        disabled={loading} 
        className="btn btn-primary"
      >
        {loading ? "Processing..." : `Pay ₹${price}`}
      </button>
    </>
  );
}
