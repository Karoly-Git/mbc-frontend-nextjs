"use client";

import { Product } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { useState } from "react";

export function AddToCartButton({ product }: { product: Product }) {
    const [added, setAdded] = useState(false);

    function handleAdd() {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 800);
    }

    return (
        <button
            onClick={handleAdd}
            style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid #000",
                cursor: "pointer",
                marginTop: 10,
            }}
        >
            {added ? "Added ✅" : "Add to cart"}
        </button>
    );
}
