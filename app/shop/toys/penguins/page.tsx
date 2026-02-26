import { ProductCard } from "@/components/ProductCard";
import { getProductsByCollection } from "@/lib/productHelpers";

export default function PenguinsPage() {
    const products = getProductsByCollection({
        section: "toys",
        collection: "penguins",
    });

    return (
        <main style={{ padding: 24 }}>
            <h1>Penguins</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: 16,
                    marginTop: 20,
                }}
            >
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </main>
    );
}
