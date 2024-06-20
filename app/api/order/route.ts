import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req: NextRequest) {
    const { amount } = await req.json();
    let options = {
        amount: amount,
        currency: "INR",
        receipt: "order_rcptid_11",
    };
    try {
        const orderDetails = await instance.orders.create(options);
        console.log("orderId: ", orderDetails.id);
        return NextResponse.json({ orderId: orderDetails.id });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        return NextResponse.json(
            { error: "Error creating order" },
            { status: 500 }
        );
    }
}
