import NavButton from "../ui/NavButton";

export default function ShopIntro() {
    return (
        <section className="shopIntro">
            <div className="introGrid">
                <div className="introCard">
                    <h3>Crocheted toys</h3>
                    <div className="image placeholder" />
                    <NavButton
                        href="/shop/all"
                        bgColor="var(--color-terracotta)"
                        textColor="var(--color-super-light)"
                    >
                        Shop crocheted toys
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Home textiles</h3>
                    <div className="image placeholder" />
                    <NavButton
                        href="/shop/all"
                        bgColor="var(--color-ink-blue)"
                        textColor="var(--color-super-light)"
                    >
                        Shop home textiles
                    </NavButton>
                </div>

                <div className="introCard">
                    <h3>Shop by collection</h3>
                    <div className="image placeholder" />
                    <NavButton
                        href="/shop/all"
                        bgColor="var(--color-forest)"
                        textColor="var(--color-super-light)"
                    >
                        Shop by collection
                    </NavButton>

                </div>
            </div>
        </section>
    )
}
