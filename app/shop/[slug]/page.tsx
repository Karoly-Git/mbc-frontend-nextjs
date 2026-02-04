import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) return notFound();

    return (
        <main style={{ padding: 24 }}>
            <h1>{product.name}</h1>

            <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: 400, width: "100%", borderRadius: 12 }}
            />

            <p style={{ marginTop: 12, fontSize: 18 }}>
                Price: £{(product.price / 100).toFixed(2)}
            </p>

            <AddToCartButton product={product} />
        </main>
    );
}
