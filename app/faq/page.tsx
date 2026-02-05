import "./style.scss";

export default function FaqPage() {
    return (
        <main className="faqPage">
            {/* Hero */}
            <header className="faqHero">
                <p className="eyebrow">FAQs</p>
                <h1>Questions we’re often asked</h1>
                <p className="intro">
                    If you’re wondering about our products, orders, or process,
                    you’ll likely find the answer here. If not, feel free to
                    reach out — we’re always happy to help.
                </p>
            </header>

            {/* FAQ */}
            <section className="faqSection">
                <div className="faqItem">
                    <h2>Are your products really handmade?</h2>
                    <p>
                        Yes — every item is made by hand in our workshop. We do
                        not use mass production or machines, which means each
                        piece is slightly unique.
                    </p>
                </div>

                <div className="faqItem">
                    <h2>How long does it take to make an order?</h2>
                    <p>
                        Most items are made in small batches. If an item is in
                        stock, it will ship quickly. Made-to-order pieces may
                        take a little longer, and we’ll always keep you informed.
                    </p>
                </div>

                <div className="faqItem">
                    <h2>Do you ship internationally?</h2>
                    <p>
                        We currently ship within the UK, with plans to expand in
                        the future. If you’re outside the UK, feel free to get
                        in touch and we’ll do our best to help.
                    </p>
                </div>

                <div className="faqItem">
                    <h2>Can I return or exchange an item?</h2>
                    <p>
                        If there’s an issue with your order, please contact us
                        as soon as possible. As handmade items are personal, we
                        review returns on a case-by-case basis.
                    </p>
                </div>

                <div className="faqItem">
                    <h2>Are your toys suitable for children?</h2>
                    <p>
                        Our toys are designed as decorative or gift items. If
                        you have specific safety questions, please reach out
                        before purchasing.
                    </p>
                </div>

                <div className="faqItem">
                    <h2>How can I contact you?</h2>
                    <p>
                        You can reach us via our{" "}
                        <a href="/contact">Reach Us</a> page or by email. We
                        usually reply within 1–2 working days.
                    </p>
                </div>
            </section>
        </main>
    );
}
