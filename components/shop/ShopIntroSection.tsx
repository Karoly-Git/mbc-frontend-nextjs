import NavButton from "../ui/NavButton";

export default function ShopIntroSection() {
    return (
        <section className="shopIntro">
            <div className="introGrid">
                <div className="introCard">
                    <h3>Crocheted Toys</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/all" className="pillBtn">
                        Shop crocheted toys
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Kitchen & Home</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/all" className="pillBtn">
                        Shop home textiles
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Baby Essentials</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/all" className="pillBtn">
                        Shop by collection
                    </NavButton>
                </div>
            </div>
        </section>
    );
}
