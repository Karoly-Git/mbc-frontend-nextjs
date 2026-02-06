import NavButton from "../ui/NavButton";

export default function SustainabilitySection() {
    return (
        <section className="sustainabilityExplain">
            <h2>What makes our handmade pieces sustainable?</h2>

            <div className="content">
                <p>
                    At Made by Care, sustainability starts with how we make. Every item
                    is created by hand, in small batches, using considered materials and
                    a slow, thoughtful process.
                </p>

                <p>
                    By choosing handmade over mass-produced, we reduce waste, avoid
                    overproduction, and focus on quality rather than quantity. Each
                    piece is made to last — designed to be used, kept, and loved for a
                    long time.
                </p>

                <p>
                    Our approach allows us to work carefully, use only what we need, and
                    make choices that respect both the materials we use and the people
                    who receive our work.
                </p>

                <NavButton href="/sustainability">
                    Read more
                </NavButton>
            </div>

            <p className="note">
                We believe sustainability doesn't have to mean compromise — it means
                making fewer things, and making them well.
            </p>

            <div className="illustration left placeholder" />
            <div className="illustration right placeholder" />
        </section>
    );
}
