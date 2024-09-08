"use client";
import type { Metadata } from "next";
import { useEffect } from "react";

const metadata: Metadata = {
    title: "ProjectStore",
    description: "Created by 2xdevlopers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return <>{children}</>;
}
