import Link from "next/link";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: 12 }}
            />
            <h3 style={{ marginTop: 12 }}>{product.name}</h3>
            <p>£{(product.price / 100).toFixed(2)}</p>

            <Link href={`/shop/${product.slug}`}>View</Link>
        </div>
    );
}
