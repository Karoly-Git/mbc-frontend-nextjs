import Link from "next/link";
import NavButton from "../ui/NavButton";

export default function CollectionsSection() {
    return (
        <section className="collections">
            <div className="collectionCard">
                <div className="img placeholder" />
                <h3>Classic toys</h3>
                <NavButton href="#">
                    Shop now
                </NavButton>
            </div>

            <div className="collectionCard">
                <div className="img placeholder" />
                <h3>Mini friends</h3>
                <NavButton href="#">
                    Shop now
                </NavButton>
            </div>

            <div className="collectionCard">
                <div className="img placeholder" />
                <h3>Large keepsakes</h3>
                <NavButton href="#">
                    Shop now
                </NavButton>
            </div>
        </section>
    );
}
