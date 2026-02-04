import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
    return (
        <header className="siteHeader">
            <div className="headerInner">
                {/* Left */}
                <div className="headerLeft">
                    <Link href="/" className="brand">
                        <div className="brandLogo">
                            <Image
                                src="/logo.png"
                                alt="Made by Care"
                                width={52}
                                height={52}
                                priority
                            />
                        </div>
                    </Link>

                    <div className="searchBox">
                        <span className="searchIcon">⌕</span>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                {/* Center */}
                <nav className="headerNav">
                    <Link href="/shop" className="navItem active">
                        Store
                    </Link>
                    <Link href="/donate" className="navItem">
                        Donate Toys
                    </Link>
                    <Link href="/about" className="navItem">
                        About Us
                    </Link>
                    <Link href="/contact" className="navItem">
                        Reach us
                    </Link>
                    <Link href="/loved-again" className="navItem">
                        Loved Again
                    </Link>
                    <Link href="/learn" className="navItem">
                        Learn
                    </Link>
                </nav>

                {/* Right */}
                <div className="headerRight">
                    <select className="currencySelect" defaultValue="GBP">
                        <option value="GBP">GBP (£)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="USD">USD ($)</option>
                    </select>

                    <Link href="/cart" className="iconBtn" aria-label="Cart">
                        <span className="icon">🛒</span>
                        <span className="cartCount">0</span>
                    </Link>

                    <Link href="/login" className="loginBtn">
                        <span className="icon">👤</span>
                        <span>Log In</span>
                    </Link>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="headerAccent" />
        </header>
    );
}
