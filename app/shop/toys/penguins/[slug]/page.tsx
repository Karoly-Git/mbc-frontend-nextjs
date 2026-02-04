import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { getProductsByCollection } from "@/lib/productHelpers";

export default function PenguinsPage() {
    const penguins = getProductsByCollection({
        section: "toys",
        collection: "penguins",
    });

    return (
        <main className="penguinsPage">
            {/* Hero */}
            <header className="hero">
                <div className="breadcrumb">
                    <Link href="/shop">Shop</Link>
                    <span>/</span>
                    <Link href="/shop/toys">Toys</Link>
                    <span>/</span>
                    <span>Penguins</span>
                </div>

                <h1>Penguins</h1>

                <p>
                    Meet our penguin collection — handmade crochet friends with different
                    body colours and optional accessories.
                </p>
            </header>

            {/* Product grid */}
            <section className="grid">
                {penguins.map((p) => (
                    <div key={p.id} className="card">
                        <Link href={`/shop/${p.section}/${p.collection}/${p.slug}`}>
                            <div className="imageWrap">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div className="content">
                                <h3 className="name">{p.name}</h3>
                                <p className="price">£{(p.price / 100).toFixed(2)}</p>

                                {p.description && <p className="desc">{p.description}</p>}

                                <p className="action">View product →</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>

            <div className="note">
                Each penguin is handmade with care and made-to-order. More designs will
                be added soon ✨
            </div>
        </main>
    );
}
