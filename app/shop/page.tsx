import Link from "next/link";
import "./style.scss";
import ShopHero from "@/components/shop/ShopHero";
import ShopIntro from "@/components/shop/ShopIntro";

export default function ShopPage() {
    return (
        <main className="shopPage">
            <ShopHero />
            <ShopIntro />


            {/* NEW ARRIVALS */}
            <section className="newArrivals">
                <h2>New arrivals</h2>

                <div className="productRow">
                    <div className="productCard">
                        <div className="productImage placeholder" />
                        <div className="productMeta">
                            <p className="name">Bernard</p>
                            <p className="price">£66.00</p>
                        </div>
                    </div>

                    <div className="productCard">
                        <div className="productImage placeholder" />
                        <div className="productMeta">
                            <p className="name">Blue</p>
                            <p className="price">£17.00</p>
                        </div>
                    </div>

                    <div className="productCard">
                        <div className="productImage placeholder" />
                        <div className="productMeta">
                            <p className="name">Dot</p>
                            <p className="price">£30.00</p>
                        </div>
                    </div>

                    <div className="productCard">
                        <div className="productImage placeholder" />
                        <div className="productMeta">
                            <p className="name">Pax</p>
                            <p className="price">£18.00</p>
                        </div>
                    </div>

                    <div className="productCard">
                        <div className="productImage placeholder" />
                        <div className="productMeta">
                            <p className="name">Finn</p>
                            <p className="price">£14.00</p>
                        </div>
                    </div>
                </div>

                <Link href="/shop/all" className="secondaryBtn">
                    See more
                </Link>
            </section>


            {/* WHY BUY */}
            <section className="whyMadeByCare">
                <h2>Why buy a handmade piece from Made by Care?</h2>

                <div className="introText">
                    <p>
                        Choosing a handmade item from Made by Care is more than a purchase —
                        it’s a conscious decision to support slow making, thoughtful design,
                        and small-batch craftsmanship.
                    </p>

                    <p>
                        Each piece is created by hand, with care and intention, using
                        considered materials and time-honoured techniques. No two items are
                        exactly the same, and that uniqueness is part of their story.
                    </p>

                    <p>
                        At Made by Care, we believe in creating fewer things, but making them
                        well. By working in small batches, we’re able to focus on quality,
                        reduce waste, and ensure every piece receives the attention it
                        deserves.
                    </p>
                </div>

                <div className="reasons">
                    <div className="reason">
                        <span className="number">01</span>
                        <p>
                            Before it ever reaches you, each piece is carefully made by hand,
                            stitched slowly and thoughtfully from start to finish.
                        </p>
                    </div>

                    <div className="reason">
                        <span className="number">02</span>
                        <p>
                            Every purchase supports a small, family-run business that values
                            craftsmanship, patience, and meaningful work.
                        </p>
                    </div>

                    <div className="reason">
                        <span className="number">03</span>
                        <p>
                            By choosing handmade, you’re supporting a more considered way of
                            making — one that prioritises longevity and care.
                        </p>
                    </div>
                </div>

                <div className="closingText">
                    <p>
                        We take pride in keeping our materials and packaging as simple and
                        responsible as possible, focusing on durability and reuse.
                    </p>

                    <p>
                        Made by Care is built on the belief that beautiful things don’t need
                        to be rushed. When you choose one of our handmade pieces, you’re
                        choosing something made with intention.
                    </p>
                </div>

                <a href="/shop/all" className="ctaBtn">
                    Shop all handmade pieces
                </a>
            </section>


            {/* COLLECTIONS */}
            <section className="collections">
                <div className="collectionCard">
                    <div className="img placeholder" />
                    <h3>Classic toys</h3>
                    <Link href="#">Shop now</Link>
                </div>

                <div className="collectionCard">
                    <div className="img placeholder" />
                    <h3>Mini friends</h3>
                    <Link href="#">Shop now</Link>
                </div>

                <div className="collectionCard">
                    <div className="img placeholder" />
                    <h3>Large keepsakes</h3>
                    <Link href="#">Shop now</Link>
                </div>
            </section>

            {/* SUSTAINABILITY */}
            <section className="sustainabilityExplain">
                <h2>What makes our handmade pieces sustainable?</h2>

                <div className="content">
                    <p>
                        At Made by Care, sustainability starts with how we make. Every item
                        is created by hand, in small batches, using considered materials and
                        a slow, thoughtful process.
                    </p>

                    <p>
                        By choosing handmade over mass-produced, we reduce waste, avoid
                        overproduction, and focus on quality rather than quantity. Each
                        piece is made to last — designed to be used, kept, and loved for a
                        long time.
                    </p>

                    <p>
                        Our approach allows us to work carefully, use only what we need, and
                        make choices that respect both the materials we use and the people
                        who receive our work.
                    </p>

                    <a href="/sustainability" className="readMoreBtn">
                        Read more
                    </a>
                </div>

                <p className="note">
                    We believe sustainability doesn’t have to mean compromise — it means
                    making fewer things, and making them well.
                </p>

                {/* Decorative placeholders */}
                <div className="illustration left placeholder" />
                <div className="illustration right placeholder" />
            </section>


            {/* TESTIMONIALS */}
            <section className="testimonials">
                <h2>What our customers say</h2>

                <div className="testimonialRow">
                    <button className="navArrow left" aria-label="Previous">
                        ←
                    </button>

                    <div className="testimonial">
                        <p className="name">Melody Clark</p>
                        <div className="stars">★★★★★</div>
                        <p className="text">
                            Nothing makes me smile like Made by Care! I’m yet to find myself
                            a new friend, but their posts and online presence brighten dull
                            days and bring such joy to my timeline. It’s so lovely to see
                            people love and appreciate handmade work.
                        </p>
                        <span className="readMore">Read more</span>
                    </div>

                    <div className="testimonial">
                        <p className="name">Paula Lockyer</p>
                        <div className="stars">★★★★★</div>
                        <p className="text">
                            Love this place! I’m a huge fan of handmade gifts and love seeing
                            the care that goes into each piece. Take a look at their work —
                            well worth a visit!
                        </p>
                    </div>

                    <button className="navArrow right" aria-label="Next">
                        →
                    </button>
                </div>

                <div className="dots">
                    <span />
                    <span className="active" />
                    <span />
                    <span />
                </div>
            </section>


            {/* PROCESS */}
            <section className="processSection">
                <h2>What happens when I order from Made by Care?</h2>

                <div className="processGrid">
                    <div className="processCard">
                        <span className="step">01.</span>
                        <p>
                            When you <a href="/shop">place an order</a>, your piece is carefully
                            prepared in our workshop, with attention given to every detail.
                        </p>
                    </div>

                    <div className="processCard">
                        <span className="step">02.</span>
                        <p>
                            Each item is finished by hand, checked for quality, and gently
                            packaged to ensure it arrives safely.
                        </p>
                    </div>

                    <div className="processCard">
                        <span className="step">03.</span>
                        <p>
                            Your order is packed using simple, considered materials and sent
                            on its way to you with care.
                        </p>
                    </div>

                    <div className="processCard">
                        <span className="step">04.</span>
                        <p>
                            Once it arrives, your handmade piece is ready to be enjoyed —
                            gifted, displayed, or loved every day.
                        </p>
                    </div>
                </div>
            </section>


            {/* HELP */}
            <section className="helpSection">
                <div className="helpInner">
                    <div className="helpText">
                        <h3>Have more questions?</h3>
                        <p>
                            At Made by Care, we’re always happy to help. If you’re unsure
                            about a product, materials, or ordering, you’ll find answers in
                            our FAQs — or feel free to get in touch directly.
                        </p>
                    </div>

                    <div className="helpActions">
                        <a href="/faq" className="helpBtn secondary">
                            FAQs
                        </a>
                        <a href="/contact" className="helpBtn primary">
                            Contact us
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}
