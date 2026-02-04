"use client";

import { useEffect, useState } from "react";
import { getCart, CartItem, clearCart } from "@/lib/cart";

export default function CheckoutPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setCart(getCart());
    }, []);

    async function handleCheckout() {
        setLoading(true);

        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart }),
        });

        const data = await res.json();

        if (data.url) {
            window.location.href = data.url;
        } else {
            alert("Something went wrong creating Stripe session.");
            setLoading(false);
        }
    }

    return (
        <main style={{ padding: 24 }}>
            <h1>Checkout</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <p>Ready to pay for {cart.length} item(s).</p>

                    <button
                        onClick={handleCheckout}
                        disabled={loading}
                        style={{
                            padding: "12px 16px",
                            borderRadius: 10,
                            cursor: "pointer",
                            border: "1px solid #000",
                        }}
                    >
                        {loading ? "Redirecting..." : "Pay with Stripe"}
                    </button>
                </>
            )}
        </main>
    );
}
