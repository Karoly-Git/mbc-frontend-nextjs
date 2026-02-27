import Image from "next/image";
import NavButton from "../ui/NavButton";

export default function HeroSection() {
    return (
        <section className="section hero">
            <div className="heroMedia">
                <div className="heroImage left">
                    <Image
                        src="/images/home/hero-left.webp"
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />
                </div>

                <div className="heroImage right">
                    <Image
                        src="/images/home/hero-right.webp"
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />
                </div>
            </div>

            <div className="heroCard">
                <div className="logoWrap">
                    <Image
                        src="/logo.svg"
                        alt="Made by Care logo"
                        width={200}
                        height={200}
                        priority
                    />
                </div>

                <h1>Made by Care</h1>

                <p className="tagline">
                    Thoughtfully handmade. One by one.
                </p>

                <p className="intro">
                    We’re currently preparing our website.
                    <br />
                    Something carefully made is coming soon.
                </p>

                <p className="values">
                    HANDMADE · CUSTOMISABLE · SMALL BATCHES
                </p>

                <NavButton href="/shop">
                    Visit the Shop
                </NavButton>
            </div>
        </section>
    );
}