import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function ShopPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Shop</h1>

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
