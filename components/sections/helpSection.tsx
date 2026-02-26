import NavButton from "../ui/navButton";

export default function HelpSection() {
    return (
        <section className="section help">
            <div className="helpInner">
                <div className="helpText">
                    <h3>Have more questions?</h3>
                    <p>
                        At Made by Care, we're always happy to help. If you're unsure
                        about a product, materials, or ordering, you'll find answers in
                        our FAQs — or feel free to get in touch directly.
                    </p>
                </div>

                <div className="helpActions">
                    <NavButton href="/faq" className="faqBtn">
                        FAQs
                    </NavButton>

                    <NavButton href="/contact" className="helpBtn">
                        Contact Us
                    </NavButton>
                </div>
            </div>
        </section>
    );
}
