import "./style.scss";

export default function PrivacyPage() {
    return (
        <main className="privacyPage">
            {/* Hero */}
            <header className="privacyHero">
                <p className="eyebrow">Privacy Policy</p>
                <h1>Your privacy matters to us</h1>
                <p className="intro">
                    This page explains how we collect, use, and protect your
                    personal information when you visit or shop with Made by Care.
                </p>
            </header>

            {/* Content */}
            <section className="privacySection">
                <h2>Who we are</h2>
                <p>
                    Made by Care is a small family-run business based in the United
                    Kingdom. We are responsible for how your personal data is
                    collected and used.
                </p>
            </section>

            <section className="privacySection">
                <h2>What information we collect</h2>
                <p>We may collect the following information:</p>
                <ul>
                    <li>Your name and contact details</li>
                    <li>Shipping and billing addresses</li>
                    <li>Email address</li>
                    <li>Order and purchase history</li>
                </ul>
            </section>

            <section className="privacySection">
                <h2>How we use your information</h2>
                <p>Your information is used only to:</p>
                <ul>
                    <li>Process and deliver your orders</li>
                    <li>Communicate with you about your purchase</li>
                    <li>Respond to enquiries or messages</li>
                    <li>Meet legal or accounting requirements</li>
                </ul>
                <p>
                    We do not sell or trade your personal information.
                </p>
            </section>

            <section className="privacySection">
                <h2>Sharing your data</h2>
                <p>
                    Your information is shared only when necessary — for example
                    with payment providers or delivery services — and only for
                    the purpose of completing your order.
                </p>
            </section>

            <section className="privacySection">
                <h2>Cookies</h2>
                <p>
                    Our website may use cookies to help it function properly and
                    improve your experience. You can choose to disable cookies
                    in your browser settings at any time.
                </p>
            </section>

            <section className="privacySection">
                <h2>Your rights</h2>
                <p>
                    You have the right to access, update, or request deletion of
                    your personal data. To do so, please contact us via our{" "}
                    <a href="/contact">Reach Us</a> page.
                </p>
            </section>

            <section className="privacySection">
                <h2>Updates to this policy</h2>
                <p>
                    This Privacy Policy may be updated occasionally to reflect
                    changes in our practices or legal requirements.
                </p>
            </section>

            {/* Closing */}
            <section className="privacyClosing">
                <p>
                    If you have any questions about this policy or how your data
                    is handled, please don't hesitate to get in touch.
                </p>
            </section>
        </main>
    );
}
