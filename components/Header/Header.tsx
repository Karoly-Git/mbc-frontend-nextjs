"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import { TiShoppingCart as CartIcon } from "react-icons/ti";
import { FaUser as UserIcon } from "react-icons/fa6";
import { IoIosSearch as SearchIcon } from "react-icons/io";

export default function Header() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchIconClick = () => {
        inputRef.current?.focus();
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
                                width={52}
                                height={52}
                                priority
                            />
                        </div>
                    </Link>

                    <div className="searchBox">
                        {/* ✅ click focus */}
                        <button
                            className="searchIconBtn"
                            onClick={handleSearchIconClick}
                            aria-label="Focus search"
                            type="button"
                        >
                            <SearchIcon />
                        </button>

                        <input ref={inputRef} type="text" placeholder="Search..." />
                    </div>
                </div>

                {/* Center */}
                <nav className="headerNav">
                    <Link href="/shop" className="navItem active">
                        Shop
                    </Link>
                    <Link href="/about" className="navItem">
                        About Us
                    </Link>
                    <Link href="/contact" className="navItem">
                        Reach us
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
