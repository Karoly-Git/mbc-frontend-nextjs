import NavButton from "../ui/NavButton";

export default function ShopIntro() {
    return (
        <section className="shopIntro">
            <div className="introGrid">
                <div className="introCard">
                    <h3>Crocheted Toys</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/all">
                        Shop toys
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Kitchen & Home</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/all">
                        Shop home essentials
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Baby Essentials</h3>
                    <div className="image placeholder" />
                    <NavButton href="/shop/all">
                        Shop for Babies
                    </NavButton>

                </div>
            </div>
        </section>
    )
}
