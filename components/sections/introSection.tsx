import NavButton from "../ui/NavButton";

export default function IntroSection() {
    return (
        <section className="section intro">
            <div className="introGrid">
                <div className="introCard">
                    <h3>Toys</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/toys" >
                        Explore Toys
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Kitchen & Home</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/kitchen-and-home" >
                        Discover Kitchen & Home
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Baby Essentials</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/baby-essentials" >
                        Shop Baby Essentials
                    </NavButton>
                </div>
            </div>
        </section>
    );
}
