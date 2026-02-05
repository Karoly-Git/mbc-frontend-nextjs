import "./style.scss";

export default function SustainabilityPage() {
    return (
        <main className="sustainabilityPage">
            {/* Hero */}
            <header className="sustainabilityHero">
                <p className="eyebrow">Sustainability</p>
                <h1>Making thoughtfully, with care for people and planet</h1>
                <p className="intro">
                    Sustainability for us isn’t about perfection. It’s about
                    making considered choices, working in small batches, and
                    creating items meant to be loved for a long time.
                </p>
            </header>

            {/* Principles */}
            <section className="sustainabilitySection">
                <h2>Our approach</h2>

                <div className="principles">
                    <div className="principle">
                        <h3>Small-batch production</h3>
                        <p>
                            We create in limited quantities to avoid overproduction,
                            waste, and unnecessary stock.
                        </p>
                    </div>

                    <div className="principle">
                        <h3>Thoughtful materials</h3>
                        <p>
                            We choose materials that are durable, responsibly sourced
                            where possible, and suitable for long-term use.
                        </p>
                    </div>

                    <div className="principle">
                        <h3>Designed to last</h3>
                        <p>
                            Our products are made with longevity in mind — to be used,
                            repaired, and enjoyed rather than replaced.
                        </p>
                    </div>

                    <div className="principle">
                        <h3>Minimal waste</h3>
                        <p>
                            Leftover materials are reused wherever possible, and waste
                            is kept to a minimum in our workshop.
                        </p>
                    </div>
                </div>
            </section>

            {/* Packaging */}
            <section className="sustainabilitySection">
                <h2>Packaging & delivery</h2>

                <p>
                    We aim to keep packaging simple and responsible. Orders are packed
                    securely using recyclable or reusable materials wherever possible,
                    avoiding unnecessary extras.
                </p>

                <p>
                    As a small business, we continually review our processes and make
                    improvements when we can — always with care and intention.
                </p>
            </section>

            {/* Closing */}
            <section className="sustainabilityClosing">
                <p>
                    Sustainability is a journey, not a destination. We’re committed to
                    learning, improving, and doing our best — one piece at a time.
                </p>
            </section>
        </main>
    );
}
