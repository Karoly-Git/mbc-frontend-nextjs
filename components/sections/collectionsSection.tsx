import Link from "next/link";
import NavButton from "../ui/navButton";

export default function CollectionsSectio() {
    return (
        <section className="section collections">
            <div className="collectionsGrid">
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
            </div>
        </section>
    );
}
