export default function TestimonialsSection() {
    return (
        <section className="testimonials">
            <h2>What our customers say</h2>

            <div className="testimonialRow">
                <button className="navArrow left" aria-label="Previous">
                    ←
                </button>

                <div className="testimonial">
                    <p className="name">Melody Clark</p>
                    <div className="stars">★★★★★</div>
                    <p className="text">
                        Nothing makes me smile like Made by Care! I'm yet to find myself
                        a new friend, but their posts and online presence brighten dull
                        days and bring such joy to my timeline. It's so lovely to see
                        people love and appreciate handmade work.
                    </p>
                    <span className="readMore">Read more</span>
                </div>

                <div className="testimonial">
                    <p className="name">Paula Lockyer</p>
                    <div className="stars">★★★★★</div>
                    <p className="text">
                        Love this place! I'm a huge fan of handmade gifts and love seeing
                        the care that goes into each piece. Take a look at their work —
                        well worth a visit!
                    </p>
                </div>

                <button className="navArrow right" aria-label="Next">
                    →
                </button>
            </div>

            <div className="dots">
                <span />
                <span className="active" />
                <span />
                <span />
            </div>
        </section>
    );
}
