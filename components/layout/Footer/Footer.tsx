"use client";

import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="siteFooter">
            <div className="footerInner">
                {/* ABOUT */}
                <div className="footerCol">
                    <h4>About</h4>
                    <Link href="/about">About Us</Link>
                    <Link href="/our-values">Our Values</Link>
                    <Link href="/blog">From the Workshop</Link>
                    <Link href="/sustainability">Sustainability</Link>
                </div>

                {/* SHOP */}
                <div className="footerCol">
                    <h4>Shop</h4>
                    <Link href="/shop">All Products</Link>
                    <Link href="/shop/collections">Collections</Link>
                    <Link href="/shop/gifts">Gift Ideas</Link>
                    <Link href="/shop/adopted">Previously Loved</Link>
                </div>

                {/* COMMUNITY */}
                <div className="footerCol">
                    <h4>Community</h4>
                    <Link href="/newsletter">Newsletter</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/partners">Our Partners</Link>
                    <Link href="/stockists">Find Us in Store</Link>
                </div>

                {/* SUPPORT */}
                <div className="footerCol">
                    <h4>Support</h4>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/faq">FAQs</Link>
                    <Link href="/shipping">Shipping & Returns</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footerBottom">
                <span>
                    © {new Date().getFullYear()} Made by Care — a small family
                    business
                </span>
                <span>All rights reserved</span>
            </div>
        </footer>
    );
}
