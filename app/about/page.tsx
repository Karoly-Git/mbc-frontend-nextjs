import "./style.scss";

export default function AboutPage() {
    return (
        <main className="aboutPage">
            {/* Hero */}
            <header className="aboutHero">
                <p className="eyebrow">About Us</p>
                <h1>Thoughtfully handmade, one piece at a time</h1>
                <p className="intro">
                    Made by Care is a small family business built around the
                    love of crafting meaningful, handmade pieces that bring
                    comfort, warmth, and a personal touch into everyday life.
                </p>
            </header>

            {/* Story */}
            <section className="aboutSection">
                <h2>Our story</h2>
                <p>
                    What started as a few handmade gifts for friends and family
                    slowly grew into something more. Each piece we make is
                    created by hand, in small batches, with care and attention
                    to detail — never rushed, never mass-produced.
                </p>
                <p>
                    We believe handmade items carry a story. A sense of time,
                    patience, and intention that you can feel the moment you
                    hold them.
                </p>
            </section>

            {/* Values */}
            <section className="aboutSection values">
                <h2>What we stand for</h2>

                <div className="valuesGrid">
                    <div className="valueCard">
                        <h3>Handmade</h3>
                        <p>
                            Every item is made by hand, not machines. Small
                            imperfections are part of what makes each piece
                            unique.
                        </p>
                    </div>

                    <div className="valueCard">
                        <h3>Small batches</h3>
                        <p>
                            We intentionally produce in limited quantities to
                            ensure quality, care, and sustainability.
                        </p>
                    </div>

                    <div className="valueCard">
                        <h3>Made with care</h3>
                        <p>
                            From materials to packaging, we choose thoughtfully
                            and responsibly wherever possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="aboutClosing">
                <p>
                    Thank you for supporting a small family business. Every
                    order truly means the world to us.
                </p>
            </section>
        </main>
    );
}
