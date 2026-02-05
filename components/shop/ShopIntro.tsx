import NavButton from "../ui/NavButton";

export default function ShopIntro() {
    return (
        <section className="shopIntro">
            <div className="introGrid">
                <div className="introCard">
                    <h3>Crocheted Toys</h3>
                    <div className="image placeholder" />
                    <NavButton
                        href="/shop/all"
                        bgColor="var(--color-terracotta)"
                        textColor="var(--color-super-light)"
                    >
                        Shop toys
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Kitchen & Home</h3>
                    <div className="image placeholder" />
                    <NavButton
                        href="/shop/all"
                        bgColor="var(--color-ink-blue)"
                        textColor="var(--color-super-light)"
                    >
                        Shop home essentials
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Baby Essentials</h3>
                    <div className="image placeholder" />
                    <NavButton
                        href="/shop/all"
                        bgColor="var(--color-forest)"
                        textColor="var(--color-super-light)"
                    >
                        Shop for Babies
                    </NavButton>

                </div>
            </div>
        </section>
    )
}
