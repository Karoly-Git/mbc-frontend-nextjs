import Link from "next/link";
import Image from "next/image";
import "../shop/category.scss";

export default function Shop() {
    return (
        <main className="category">
            {/* Hero */}
            <header className="hero">
                <div className="breadcrumb">
                    <span>Shop</span>
                </div>

                <h1>Shop</h1>

                <p>
                    Browse our handmade collections — toys, baby essentials, and home items,
                    crafted in small batches with care.
                </p>
            </header>

            {/* Categories */}
            <section className="grid">
                {/* Toys */}
                <Link href="/shop/toys" className="collectionCard">
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/toys/index.jpg"
                            alt=""
                            width={240}
                            height={240}
                            className="thumbImg"
                        />
                    </div>

                    <div className="cardBody">
                        <p className="meta">Category</p>
                        <h2 className="title">Toys</h2>
                        <p className="text">
                            Crochet toys handcrafted with personality in every stitch.
                        </p>

                        <div className="actionRow">
                            <span className="action">Explore toys →</span>
                            <span className="count">3 collections</span>
                        </div>
                    </div>
                </Link>

                {/* Baby Essentials */}
                <Link href="/shop/baby-essentials" className="collectionCard">
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/baby-essentials/index.jpg"
                            alt=""
                            width={240}
                            height={240}
                            className="thumbImg"
                        />
                    </div>

                    <div className="cardBody">
                        <p className="meta">Category</p>
                        <h2 className="title">Baby Essentials</h2>
                        <p className="text">
                            Gentle, practical crochet essentials made with baby-friendly materials.
                        </p>

                        <div className="actionRow">
                            <span className="action">Explore baby essentials →</span>
                            <span className="count">3 products</span>
                        </div>
                    </div>
                </Link>

                {/* Home */}
                <Link href="/shop/home" className="collectionCard">
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/home/index.jpg"
                            alt=""
                            width={240}
                            height={240}
                            className="thumbImg"
                        />
                    </div>

                    <div className="cardBody">
                        <p className="meta">Category</p>
                        <h2 className="title">Home</h2>
                        <p className="text">
                            Practical, cosy essentials for your space — starting with kitchen textiles.
                        </p>

                        <div className="actionRow">
                            <span className="action">Explore home →</span>
                            <span className="count">3 collections</span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Note */}
            <div className="note">
                New categories and collections will be added as more handmade items become available.
            </div>
        </main>
    );
}