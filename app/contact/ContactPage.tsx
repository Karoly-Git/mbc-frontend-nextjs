import NavButton from "@/components/ui/NavButton";
import "./contact.scss";

export default function ContactPage() {
    return (
        <main className="page contactPage">
            {/* Hero */}
            <header className="contactHero">
                <p className="eyebrow">Reach Us</p>
                <h1>We're always happy to hear from you</h1>
                <p className="intro">
                    Whether you have a question about our products, an order,
                    or just want to say hello — feel free to reach out. We'll
                    get back to you as soon as we can.
                </p>
            </header>

            <section className="contactContent">
                <div className="contactInfo">
                    <h2>Get in touch</h2>

                    <p>
                        We're a small family business, so every message is read
                        personally. Please allow a little time for us to reply,
                        especially during busy periods. Response time is sually less than 1
                        working day.
                    </p>
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

                    <NavButton href="#">
                        Get in touch
                    </NavButton>
                </form>
            </section>
        </main>
    );
}
