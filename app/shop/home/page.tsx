import Link from "next/link";
import "./style.scss";

export default function HomeShopPage() {
    return (
        <main className="homeShopPage">
            {/* Hero */}
            <header className="hero">
                <div className="breadcrumb">
                    <Link href="/shop">Shop</Link>
                    <span>/</span>
                    <span>Home</span>
                </div>

                <h1>Home</h1>

                <p>
                    Practical, cosy, and handcrafted essentials for your space — starting
                    with kitchen towels and soon expanding with more home items.
                </p>
            </header>

            {/* Collections */}
            <section className="grid">
                <Link href="/shop/home/kitchen-towels" className="collectionCard">
                    <p className="meta">Collection</p>
                    <h2 className="title">Kitchen Towels</h2>
                    <p className="text">
                        Soft cotton towels available in different sizes and colours.
                    </p>

                    <div className="actionRow">
                        <span className="action">Explore towels →</span>
                        <span className="note">1 product</span>
                    </div>
                </Link>

                <Link href="/shop/home/aprons" className="collectionCard">
                    <p className="meta">Collection</p>
                    <h2 className="title">Aprons</h2>
                    <p className="text">
                        Handmade aprons coming soon — practical and stylish for everyday
                        cooking.
                    </p>

                    <div className="actionRow">
                        <span className="action">View aprons →</span>
                        <span className="note">Coming soon</span>
                    </div>
                </Link>
            </section>

            {/* Info */}
            <div className="infoBox">
                Tip: As you add more products later, this page will automatically feel
                like a full category hub.
            </div>
        </main>
    );
}
