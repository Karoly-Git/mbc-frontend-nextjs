import Link from "next/link";
import "./style.scss";

export default function ToysPage() {
    return (
        <main className="toysPage">
            {/* Hero */}
            <header className="hero">
                <div className="breadcrumb">
                    <Link href="/shop">Shop</Link>
                    <span>/</span>
                    <span>Toys</span>
                </div>

                <h1>Toys</h1>

                <p>
                    Discover crochet toys handcrafted with care. Each one is made in small
                    batches, with personality in every stitch.
                </p>
            </header>

            {/* Collections */}
            <section className="grid">
                <Link href="/shop/toys/penguins" className="collectionCard">
                    <p className="meta">Collection</p>
                    <h2 className="title">Penguins</h2>
                    <p className="text">
                        Meet Sunny & Milo — adorable handmade penguins in different body
                        colours.
                    </p>

                    <div className="actionRow">
                        <span className="action">Explore penguins →</span>
                        <span className="count">2 products</span>
                    </div>
                </Link>
            </section>

            {/* Note */}
            <div className="note">
                More crochet toys are coming soon! This page will grow as new collections
                are added.
            </div>
        </main>
    );
}
