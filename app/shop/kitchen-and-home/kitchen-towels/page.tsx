import { ProductCard } from "@/app/components/ProductCard";
import { getProductsByCollection } from "@/lib/productHelpers";

export default function KitchenTowelsPage() {
    const products = getProductsByCollection({
        section: "home",
        collection: "kitchen-towels",
    });

    return (
        <main style={{ padding: 24 }}>
            <h1>Kitchen Towels</h1>

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
