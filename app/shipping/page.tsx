import "./style.scss";

export default function ShippingPage() {
    return (
        <main className="shippingPage">
            {/* Hero */}
            <header className="shippingHero">
                <p className="eyebrow">Shipping & Returns</p>
                <h1>Everything you need to know before ordering</h1>
                <p className="intro">
                    We aim to make the process as simple and transparent as
                    possible. Below you’ll find details about shipping,
                    delivery times, and returns.
                </p>
            </header>

            {/* Shipping */}
            <section className="shippingSection">
                <h2>Shipping</h2>

                <p>
                    All orders are carefully packed in our workshop and shipped
                    from the United Kingdom. As a small family business, we work
                    in small batches and take care to prepare each order by hand.
                </p>

                <ul>
                    <li>
                        <strong>Processing time:</strong> Orders are usually
                        prepared within 1–3 working days.
                    </li>
                    <li>
                        <strong>Delivery area:</strong> Currently shipping
                        within the UK.
                    </li>
                    <li>
                        <strong>Shipping method:</strong> Tracked delivery via
                        trusted postal services.
                    </li>
                </ul>

                <p>
                    You’ll receive a confirmation email once your order has
                    been dispatched.
                </p>
            </section>

            {/* Returns */}
            <section className="shippingSection">
                <h2>Returns & exchanges</h2>

                <p>
                    As our items are handmade, we review returns on a
                    case-by-case basis. If something isn’t quite right, please
                    get in touch and we’ll do our best to help.
                </p>

                <ul>
                    <li>
                        <strong>Return window:</strong> Please contact us within
                        14 days of receiving your order.
                    </li>
                    <li>
                        <strong>Condition:</strong> Items should be unused and
                        in their original condition.
                    </li>
                    <li>
                        <strong>Custom or made-to-order items:</strong> These
                        may not be eligible for return unless faulty.
                    </li>
                </ul>

                <p>
                    To start a return or ask a question, please visit our{" "}
                    <a href="/contact">Reach Us</a> page.
                </p>
            </section>

            {/* Closing */}
            <section className="shippingClosing">
                <p>
                    If you’re unsure about anything before ordering, don’t
                    hesitate to reach out. We’re always happy to help.
                </p>
            </section>
        </main>
    );
}
