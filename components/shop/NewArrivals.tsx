import NavButton from "../ui/NavButton";

export default function NewArrivals() {
    return (
        <section className="newArrivals">
            <h2>New arrivals</h2>

            <div className="productRow">
                <div className="productCard">
                    <div className="productImage placeholder" />
                    <div className="productMeta">
                        <p className="name">Bernard</p>
                        <p className="price">£66.00</p>
                    </div>
                </div>

                <div className="productCard">
                    <div className="productImage placeholder" />
                    <div className="productMeta">
                        <p className="name">Blue</p>
                        <p className="price">£17.00</p>
                    </div>
                </div>

                <div className="productCard">
                    <div className="productImage placeholder" />
                    <div className="productMeta">
                        <p className="name">Dot</p>
                        <p className="price">£30.00</p>
                    </div>
                </div>

                <div className="productCard">
                    <div className="productImage placeholder" />
                    <div className="productMeta">
                        <p className="name">Pax</p>
                        <p className="price">£18.00</p>
                    </div>
                </div>

                <div className="productCard">
                    <div className="productImage placeholder" />
                    <div className="productMeta">
                        <p className="name">Finn</p>
                        <p className="price">£14.00</p>
                    </div>
                </div>
            </div>
            <NavButton href="/shop/all">
                See more
            </NavButton>
        </section>)
}
