"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { env } from "@/env";

export const CheckoutButton = ({
    amount,
    size,
    className,
}: {
    amount: number;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    className?: string;
}) => {
    const [orderId, setOrderId] = useState("");
    async function createOrder() {
        const response = await fetch("/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount }),
        });

        const data = await response.json();
        setOrderId(data.orderId);
        if (!data.orderId) {
            alert("Server error. Are you online?");
            return;
        }

        const options = {
            key: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: "INR",
            name: "2xDevs",
            description: "Test Transaction",
            image: "https://res.cloudinary.com/dckbkdfyi/image/upload/f_auto,q_auto/v1/2xDevs/ly6wbb5528kwfuu3ebjp",
            order_id: data.orderId,
            handler: async function (response: {
                razorpay_payment_id: any;
                razorpay_order_id: any;
                razorpay_signature: any;
            }) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
                const verificationRes = await fetch("/api/verify", {
                    cache: "no-cache",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                    }),
                });

                const verificationData = await verificationRes.json();

                if (verificationData.success) {
                    alert("done");
                } else {
                    alert(
                        "Payment verification failed: " +
                            verificationData.error,
                    );
                }
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#000000",
            },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
        rzp.on(
            "payment.failed",
            function (response: {
                error: {
                    code: any;
                    description: any;
                    source: any;
                    step: any;
                    reason: any;
                    metadata: { order_id: any; payment_id: any };
                };
            }) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            },
        );
    }

    return (
        <>
            <Button
                onClick={createOrder}
                size={size || "default"}
                className={className}
            >
                Proceed to Checkout
            </Button>
        </>
    );
};
