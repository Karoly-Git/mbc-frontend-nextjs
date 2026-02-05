"use client";

import Link from "next/link";
import Image from "next/image";
import "./Header.scss";

import { usePathname } from "next/navigation";
import { TiShoppingCart as CartIcon } from "react-icons/ti";
import { FaUser as UserIcon } from "react-icons/fa6";
import { IoIosSearch as SearchIcon } from "react-icons/io";

export default function Header() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        // exact match
        if (pathname === href) return true;

        // highlight /shop and all child routes like /shop/toys/...
        if (href === "/shop" && pathname.startsWith("/shop")) return true;

        return false;
    };

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
                                fill
                                priority
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </Link>

                    <div className="searchBox">
                        <span className="searchIcon">
                            <SearchIcon />
                        </span>
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                {/* Center */}
                <nav className="headerNav">
                    <Link
                        href="/"
                        className={`navItem ${isActive("/") ? "active" : ""}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/shop"
                        className={`navItem ${isActive("/shop") ? "active" : ""}`}
                    >
                        Shop
                    </Link>

                    <Link
                        href="/about"
                        className={`navItem ${isActive("/about") ? "active" : ""}`}
                    >
                        About Us
                    </Link>

                    <Link
                        href="/contact"
                        className={`navItem ${isActive("/contact") ? "active" : ""}`}
                    >
                        Reach Us
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
                        <span className="icon">
                            <CartIcon />
                        </span>
                        <span className="cartCount">0</span>
                    </Link>

                    <Link href="/login" className="loginBtn">
                        <span className="icon">
                            <UserIcon />
                        </span>
                        <span>Log In</span>
                    </Link>
                </div>
            </div>

            <div className="headerAccent" />
        </header>
    );
}
