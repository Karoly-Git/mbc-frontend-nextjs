import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCollection } from "@/lib/productHelpers";
import "./penguins.scss";

export default function Penguins() {
    const products = getProductsByCollection({
        section: "toys",
        collection: "penguins",
    });

    return (
        <main className="collectionPage">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link href="/shop">Shop</Link>
                <span>/</span>
                <Link href="/shop/toys">Toys</Link>
                <span>/</span>
                <span>Penguins</span>
            </nav>

            {/* Header */}
            <header className="collectionHeader">
                <h1>Penguins</h1>

                <Link href="/shop/toys" className="backLink">
                    ← Back to Toys
                </Link>
            </header>

            {/* Products grid */}
            <section className="productGrid">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </section>
        </main>
    );
}