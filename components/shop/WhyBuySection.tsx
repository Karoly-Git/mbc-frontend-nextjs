import NavButton from "../ui/NavButton";

export default function WhyBuySection() {
    return (
        <section className="whyMadeByCare">
            <h2>Why buy a handmade piece from Made by Care?</h2>

            <div className="introText">
                <p>
                    Choosing a handmade item from Made by Care is more than a purchase —
                    it's a conscious decision to support slow making, thoughtful design,
                    and small-batch craftsmanship.
                </p>

                <p>
                    Each piece is created by hand, with care and intention, using
                    considered materials and time-honoured techniques. No two items are
                    exactly the same, and that uniqueness is part of their story.
                </p>

                <p>
                    At Made by Care, we believe in creating fewer things, but making them
                    well. By working in small batches, we're able to focus on quality,
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
                        By choosing handmade, you're supporting a more considered way of
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
                    Made by Care is built on the belief that beautiful things don't need
                    to be rushed. When you choose one of our handmade pieces, you're
                    choosing something made with intention.
                </p>
            </div>

            <NavButton href="/shop/all">
                Shop all handmade pieces
            </NavButton>
        </section>
    );
}
