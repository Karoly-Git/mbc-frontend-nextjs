import Image from "next/image";
import Link from "next/link";
import "../../shop/category.scss";

export default function KitchenAndHome() {
    return (
        <main className="category">
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
                <Link href="/shop/home/aprons" className="collectionCard">
                    {/* Image / Index thumbnail */}
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/home/aprons.jpg"
                            alt=""
                            width={240}
                            height={240}
                            priority={false}
                            className="thumbImg"
                        />
                    </div>

                    {/* Content */}
                    <div className="cardBody">
                        <p className="meta">Collection</p>
                        <h2 className="title">Aprons</h2>
                        <p className="text">
                            Handmade aprons designed for everyday cooking — practical, durable, and stylish.
                        </p>

                        <div className="actionRow">
                            <span className="action">View aprons →</span>
                            <span className="note">Coming soon</span>
                        </div>
                    </div>
                </Link>
                <Link href="/shop/home/table-linens" className="collectionCard">
                    {/* Image / Index thumbnail */}
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/home/table-linens.jpg"
                            alt=""
                            width={240}
                            height={240}
                            priority={false}
                            className="thumbImg"
                        />
                    </div>

                    {/* Content */}
                    <div className="cardBody">
                        <p className="meta">Collection</p>
                        <h2 className="title">Table Linens</h2>
                        <p className="text">
                            Elegant handcrafted table runners and placemats to elevate everyday dining.
                        </p>

                        <div className="actionRow">
                            <span className="action">Explore linens →</span>
                            <span className="note">2 products</span>
                        </div>
                    </div>
                </Link>

                <Link href="/shop/home/kitchen-towels" className="collectionCard">
                    {/* Image / Index thumbnail */}
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/home/kitchen-towels.jpg"
                            alt=""
                            width={240}
                            height={240}
                            priority={false}
                            className="thumbImg"
                        />
                    </div>

                    {/* Content */}
                    <div className="cardBody">
                        <p className="meta">Collection</p>
                        <h2 className="title">Kitchen Towels</h2>
                        <p className="text">
                            Soft cotton towels available in different sizes and colours.
                        </p>

                        <div className="actionRow">
                            <span className="action">Explore towels →</span>
                            <span className="note">1 product</span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Note */}
            <div className="note">
                Tip: As you add more products later, this page will automatically feel
                like a full category hub.
            </div>
        </main>
    );
}