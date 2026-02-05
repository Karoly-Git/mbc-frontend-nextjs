import NavButton from "../ui/NavButton";

export default function ShopHero() {
    return (
        <section className="shopHero">
            <div className="heroMedia">
                <div className="heroImage left placeholder" />
                <div className="heroImage right placeholder" />
            </div>

            <div className="heroCard">
                <h1>Thoughtfully Handmade, Made by Care</h1>

                <p className="subtitle">
                    Small-batch handmade toys and home pieces, created slowly and
                    with intention.
                </p>

                <p className="meta">
                    New handmade pieces released regularly
                </p>

                <NavButton
                    href="/shop/all"
                    bgColor="var(--color-forest)"
                    textColor="var(--color-super-light)"
                >
                    Shop all
                </NavButton>
            </div>
        </section>
    );
}
