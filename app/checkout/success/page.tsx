"use client";

import { useEffect } from "react";
import { clearCart } from "@/lib/cart";
import Link from "next/link";

export default function SuccessPage() {
    useEffect(() => {
        clearCart();
    }, []);

    return (
        <main style={{ padding: 24 }}>
            <h1>Payment successful ✅</h1>
            <p>Thank you for your order!</p>

            <Link href="/shop">Continue shopping</Link>
        </main>
    );
}
