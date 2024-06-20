import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        await request.json();
    console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature);

    const shasum = crypto.createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
    );
    shasum.update(razorpay_order_id + "|" + razorpay_payment_id);
    const expectedSignature = shasum.digest("hex");

    if (expectedSignature === razorpay_signature) {
        const paymentDetails = {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
        };

        try {
            await savePaymentDetailsToDB(paymentDetails);
            return NextResponse.json({ success: true });
        } catch (error) {
            return NextResponse.json(
                { error: "Failed to save payment details" },
                { status: 500 }
            );
        }
    } else {
        return NextResponse.json(
            { error: "Invalid signature" },
            { status: 400 }
        );
    }
}

async function savePaymentDetailsToDB(paymentDetails: {
    razorpay_payment_id: any;
    razorpay_order_id: any;
    razorpay_signature: any;
}) {
    console.log("Saved details on server: ", paymentDetails);
}

export function GET() {
    return NextResponse.json({ success: "true" });
}
