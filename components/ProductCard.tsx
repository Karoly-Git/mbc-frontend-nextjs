import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
    const href = `/shop/${product.section}/${product.collection}/${product.slug}`;

    return (
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
            <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={320}
                style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />

            <h3 style={{ marginTop: 12 }}>{product.name}</h3>
            <p>£{(product.price / 100).toFixed(2)}</p>

            <Link href={href}>View</Link>
        </div>
    );
}
