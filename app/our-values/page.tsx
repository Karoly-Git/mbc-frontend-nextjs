import "./style.scss";

export default function ValuesPage() {
    return (
        <main className="valuesPage">
            {/* Intro */}
            <section className="valuesIntro">
                <p className="eyebrow">Our Values</p>
                <h1>What guides everything we make</h1>
                <p className="intro">
                    Made by Care was created with intention — to slow things
                    down, to make thoughtfully, and to value the stories behind
                    handmade pieces.
                </p>
            </section>

            {/* Value block 1 */}
            <section className="valueBlock">
                <div className="valueImage placeholder" />
                <div className="valueText">
                    <h2>Handmade, not mass-made</h2>
                    <p>
                        Every item is made by hand in our workshop. We don’t use
                        machines or mass production — just time, care, and
                        patience in every stitch.
                    </p>
                    <p>
                        This means each piece carries its own character, shaped
                        by the hands that made it.
                    </p>
                </div>
            </section>

            {/* Value block 2 */}
            <section className="valueBlock reverse">
                <div className="valueImage placeholder" />
                <div className="valueText">
                    <h2>Small batches, always</h2>
                    <p>
                        We work in small batches so nothing feels rushed or
                        overlooked. Quality matters more to us than quantity.
                    </p>
                    <p>
                        This approach allows us to focus on detail, reduce
                        waste, and stay closely connected to what we make.
                    </p>
                </div>
            </section>

            {/* Value block 3 */}
            <section className="valueBlock">
                <div className="valueImage placeholder" />
                <div className="valueText">
                    <h2>Thoughtful materials</h2>
                    <p>
                        We carefully choose materials that feel good, last well,
                        and are suited to handmade work.
                    </p>
                    <p>
                        Wherever possible, we prioritise responsible sourcing
                        and durability over trends.
                    </p>
                </div>
            </section>

            {/* Value block 4 */}
            <section className="valueBlock reverse">
                <div className="valueImage placeholder" />
                <div className="valueText">
                    <h2>Perfectly imperfect</h2>
                    <p>
                        Handmade items are never identical — and that’s part of
                        their beauty. Small variations remind us that a real
                        person made each piece.
                    </p>
                    <p>
                        We believe these differences give handmade work its
                        warmth and authenticity.
                    </p>
                </div>
            </section>

            {/* Closing */}
            <section className="valuesClosing">
                <p>
                    These values shape everything we do — from the first stitch
                    to the moment your order reaches you.
                </p>
            </section>
        </main>
    );
}
