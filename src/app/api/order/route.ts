import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const instance = new Razorpay({
  key_id: env.RAZORPAY_KEY_ID,
  key_secret: env.RAZORPAY_KEY_SECRET,
});

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
  let options = {
    amount: amount,
    currency: "INR",
    receipt: `receipt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
  };
  try {
    const orderDetails = await instance.orders.create(options);
    console.log(orderDetails);
    return NextResponse.json({ orderId: orderDetails.id });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 },
    );
  }
}
