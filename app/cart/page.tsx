"use client";

import { useEffect, useState } from "react";
import { CartItem, getCart, removeFromCart, updateQuantity } from "@/lib/cart";
import Link from "next/link";

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <main style={{ padding: 24 }}>
            <h1>Your Cart</h1>

            {cart.length === 0 ? (
                <>
                    <p>Your cart is empty.</p>
                    <Link href="/shop">Go to Shop</Link>
                </>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: "flex",
                                gap: 16,
                                alignItems: "center",
                                borderBottom: "1px solid #eee",
                                padding: "12px 0",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: 80, borderRadius: 10 }}
                            />

                            <div style={{ flex: 1 }}>
                                <strong>{item.name}</strong>
                                <p>£{(item.price / 100).toFixed(2)}</p>

                                <label>
                                    Qty:{" "}
                                    <input
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const updated = updateQuantity(
                                                item.id,
                                                Number(e.target.value)
                                            );
                                            setCart(updated);
                                        }}
                                        style={{ width: 60 }}
                                    />
                                </label>
                            </div>

                            <button
                                onClick={() => {
                                    const updated = removeFromCart(item.id);
                                    setCart(updated);
                                }}
                                style={{
                                    border: "1px solid red",
                                    padding: "8px 10px",
                                    borderRadius: 10,
                                    cursor: "pointer",
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <h2 style={{ marginTop: 20 }}>
                        Total: £{(total / 100).toFixed(2)}
                    </h2>

                    <Link href="/checkout">Go to Checkout →</Link>
                </>
            )}
        </main>
    );
}
