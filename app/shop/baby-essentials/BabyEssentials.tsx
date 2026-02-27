import Image from "next/image";
import Link from "next/link";
import "../../shop/category.scss";

export default function BabyEssentials() {
    return (
        <main className="category">
            {/* Hero */}
            <header className="hero">
                <div className="breadcrumb">
                    <Link href="/shop">Shop</Link>
                    <span>/</span>
                    <span>Baby Essentials</span>
                </div>

                <h1>Baby Essentials</h1>

                <p>
                    Gentle, practical crochet essentials designed for babies. Handmade in
                    small batches using soft, baby-friendly materials.
                </p>
            </header>

            {/* Products */}
            <section className="grid">
                {/* Product 1 */}
                <Link
                    href="/shop/baby-essentials/crochet-booties"
                    className="collectionCard"
                >
                    {/* Image / Index thumbnail */}
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/baby-essentials/crochet-booties.jpg"
                            alt=""
                            width={240}
                            height={240}
                            priority={false}
                            className="thumbImg"
                        />
                    </div>

                    {/* Content */}
                    <div className="cardBody">
                        <p className="meta">Product</p>
                        <h2 className="title">Crochet Booties</h2>
                        <p className="text">
                            Soft handmade booties to keep tiny feet warm and comfortable.
                        </p>

                        <div className="actionRow">
                            <span className="action">View product →</span>
                        </div>
                    </div>
                </Link>

                {/* Product 2 */}
                <Link
                    href="/shop/baby-essentials/baby-blanket"
                    className="collectionCard"
                >
                    {/* Image / Index thumbnail */}
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/baby-essentials/baby-blanket.jpg"
                            alt=""
                            width={240}
                            height={240}
                            priority={false}
                            className="thumbImg"
                        />
                    </div>

                    {/* Content */}
                    <div className="cardBody">
                        <p className="meta">Product</p>
                        <h2 className="title">Baby Blanket</h2>
                        <p className="text">
                            A cosy crochet blanket, perfect for naps, prams, or cuddles.
                        </p>

                        <div className="actionRow">
                            <span className="action">View product →</span>
                        </div>
                    </div>
                </Link>

                {/* Product 3 */}
                <Link
                    href="/shop/baby-essentials/teether-ring"
                    className="collectionCard"
                >
                    {/* Image / Index thumbnail */}
                    <div className="cardMedia" aria-hidden="true">
                        <Image
                            src="/images/shop/baby-essentials/teether-ring.jpg"
                            alt=""
                            width={240}
                            height={240}
                            priority={false}
                            className="thumbImg"
                        />
                    </div>

                    {/* Content */}
                    <div className="cardBody">
                        <p className="meta">Product</p>
                        <h2 className="title">Crochet Teether Ring</h2>
                        <p className="text">
                            A natural wooden teether with a soft crochet cover for little hands.
                        </p>

                        <div className="actionRow">
                            <span className="action">View product →</span>
                        </div>
                    </div>
                </Link>            </section>

            {/* Note */}
            <div className="note">
                All baby essentials are handmade with care and designed for everyday use.
            </div>
        </main>
    );
}