import "./style.scss";

export default function ContactPage() {
    return (
        <main className="contactPage">
            {/* Hero */}
            <header className="contactHero">
                <p className="eyebrow">Reach Us</p>
                <h1>We’re always happy to hear from you</h1>
                <p className="intro">
                    Whether you have a question about our products, an order,
                    or just want to say hello — feel free to reach out. We’ll
                    get back to you as soon as we can.
                </p>
            </header>

            {/* Content */}
            <section className="contactContent">
                {/* Info */}
                <div className="contactInfo">
                    <h2>Get in touch</h2>

                    <p>
                        We’re a small family business, so every message is read
                        personally. Please allow a little time for us to reply,
                        especially during busy periods.
                    </p>

                    <ul>
                        <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:hello@madebycare.co.uk">
                                hello@madebycare.co.uk
                            </a>
                        </li>
                        <li>
                            <strong>Location:</strong> United Kingdom
                        </li>
                        <li>
                            <strong>Response time:</strong> Usually within 1–2
                            working days
                        </li>
                    </ul>
                </div>

                {/* Form */}
                <form className="contactForm">
                    <h2>Send us a message</h2>

                    <label>
                        Your name
                        <input type="text" placeholder="Jane Doe" />
                    </label>

                    <label>
                        Email address
                        <input type="email" placeholder="jane@email.com" />
                    </label>

                    <label>
                        Message
                        <textarea
                            rows={5}
                            placeholder="How can we help?"
                        />
                    </label>

                    <button type="submit">Send message</button>
                </form>
            </section>
        </main>
    );
}
