import Link from "next/link";
import "./style.css";

export default function ShopPage() {
    return (
        <main className="shopPage">
            {/* Hero */}
            <header className="hero">
                <p className="brand">Made by Care</p>

                <h1>Shop handmade with care ✨</h1>

                <p>
                    Browse unique crochet toys and home essentials, crafted in small batches
                    and made to bring comfort and joy.
                </p>
            </header>

            {/* Categories */}
            <section>
                <h2>Categories</h2>

                <div className="grid">
                    <Link href="/shop/toys">
                        <div className="card">
                            <p className="meta">Category</p>
                            <h3 className="title">Toys</h3>
                            <p className="text">
                                Crochet friends, stitched with personality and love.
                            </p>
                            <p className="action">Browse toys →</p>
                        </div>
                    </Link>

                    <Link href="/shop/home">
                        <div className="card">
                            <p className="meta">Category</p>
                            <h3 className="title">Home</h3>
                            <p className="text">
                                Kitchen towels and handmade touches for your space.
                            </p>
                            <p className="action">Browse home →</p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Featured */}
            <section className="featured">
                <h2>Featured collections</h2>

                <div className="grid">
                    <Link href="/shop/toys/penguins">
                        <div className="card">
                            <p className="meta">Collection</p>
                            <h3 className="title">Penguins</h3>
                            <p className="text">
                                Meet Sunny & Milo — handmade penguins in different colours.
                            </p>
                            <p className="action">View collection →</p>
                        </div>
                    </Link>

                    <Link href="/shop/home/kitchen-towels">
                        <div className="card">
                            <p className="meta">Collection</p>
                            <h3 className="title">Kitchen Towels</h3>
                            <p className="text">
                                Soft cotton towels available in different sizes and colours.
                            </p>
                            <p className="action">View collection →</p>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
