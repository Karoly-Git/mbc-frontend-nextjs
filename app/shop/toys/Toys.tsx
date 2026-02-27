"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import "../../shop/category.scss";

type ToyCollection = {
    key: string;
    title: string;
    href: string;
    image: string;
    description: string;
    countText: string; // "2 products" / "Coming soon"
    isComingSoon: boolean;
    tags: Array<"Available" | "Coming soon" | "Gift-ready" | "New">;
};

const COLLECTIONS: ToyCollection[] = [
    {
        key: "penguins",
        title: "Penguins",
        href: "/shop/toys/penguins",
        image: "/images/shop/toys/penguins.jpg",
        description:
            "Meet Sunny & Milo — adorable handmade penguins in different body colours.",
        countText: "2 products",
        isComingSoon: false,
        tags: ["Available", "Gift-ready"],
    },
    {
        key: "teddy-bears",
        title: "Teddy Bears",
        href: "/shop/toys/teddy-bears",
        image: "/images/shop/toys/teddy-bears.jpg",
        description:
            "Classic crochet teddy bears, soft and cuddly companions for little ones.",
        countText: "Coming soon",
        isComingSoon: true,
        tags: ["Coming soon"],
    },
    {
        key: "bunny-friends",
        title: "Bunny Friends",
        href: "/shop/toys/bunny-friends",
        image: "/images/shop/toys/bunny-friends.jpg",
        description:
            "Sweet handmade bunnies with floppy ears — perfect for gifting and play.",
        countText: "Coming soon",
        isComingSoon: true,
        tags: ["Coming soon", "Gift-ready"],
    },
];

type FilterKey = "all" | "available" | "comingSoon" | "giftReady";

export default function Toys() {
    const [filter, setFilter] = useState<FilterKey>("all");
    const [compareOpen, setCompareOpen] = useState(false);
    const [compare, setCompare] = useState<string[]>([]); // store collection keys

    const filtered = useMemo(() => {
        switch (filter) {
            case "available":
                return COLLECTIONS.filter((c) => !c.isComingSoon);
            case "comingSoon":
                return COLLECTIONS.filter((c) => c.isComingSoon);
            case "giftReady":
                return COLLECTIONS.filter((c) => c.tags.includes("Gift-ready"));
            default:
                return COLLECTIONS;
        }
    }, [filter]);

    const visibleCountText = `${filtered.length} ${filtered.length === 1 ? "collection" : "collections"
        }`;

    function toggleCompare(key: string) {
        setCompare((prev) => {
            const exists = prev.includes(key);
            if (exists) return prev.filter((k) => k !== key);
            // keep it “light” (max 3 items)
            if (prev.length >= 3) return prev;
            return [...prev, key];
        });
    }

    const compareItems = useMemo(
        () => COLLECTIONS.filter((c) => compare.includes(c.key)),
        [compare]
    );

    return (
        <main className="category">
            {/* Hero */}
            <header className="hero">
                <div className="breadcrumb">
                    <Link href="/shop">Shop</Link>
                    <span>/</span>
                    <span>Toys</span>
                </div>

                <h1>Toys</h1>

                <p>
                    Discover crochet toys handcrafted with care. Each one is made in small
                    batches, with personality in every stitch.
                </p>
            </header>

            {/* Filter bar (count + quick filters + compare) */}
            <section className="filterBar" aria-label="Filters and actions">
                <div className="filterLeft">
                    <p className="resultsCount">{visibleCountText}</p>

                    <div className="chips" role="tablist" aria-label="Quick filters">
                        <button
                            type="button"
                            className={`chip ${filter === "all" ? "isActive" : ""}`}
                            onClick={() => setFilter("all")}
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className={`chip ${filter === "available" ? "isActive" : ""}`}
                            onClick={() => setFilter("available")}
                        >
                            Available
                        </button>
                        <button
                            type="button"
                            className={`chip ${filter === "giftReady" ? "isActive" : ""}`}
                            onClick={() => setFilter("giftReady")}
                        >
                            Gift-ready
                        </button>
                        <button
                            type="button"
                            className={`chip ${filter === "comingSoon" ? "isActive" : ""}`}
                            onClick={() => setFilter("comingSoon")}
                        >
                            Coming soon
                        </button>
                    </div>
                </div>

                <div className="filterRight">
                    <button
                        type="button"
                        className="compareBtn"
                        onClick={() => setCompareOpen(true)}
                        disabled={compare.length === 0}
                    >
                        Compare{compare.length ? ` (${compare.length})` : ""}
                    </button>
                </div>
            </section>

            {/* Collections */}
            <section className="grid">
                {filtered.map((c) => (
                    <div key={c.key} className="cardWrap">
                        {/* Compare checkbox */}
                        <label className="compareToggle">
                            <input
                                type="checkbox"
                                checked={compare.includes(c.key)}
                                onChange={() => toggleCompare(c.key)}
                            />
                            <span>Compare</span>
                        </label>

                        <Link href={c.href} className="collectionCard">
                            <div className="cardMedia" aria-hidden="true">
                                <Image
                                    src={c.image}
                                    alt=""
                                    width={240}
                                    height={240}
                                    className="thumbImg"
                                />
                            </div>

                            <div className="cardBody">
                                <p className="meta">Collection</p>
                                <h2 className="title">{c.title}</h2>
                                <p className="text">{c.description}</p>

                                <div className="actionRow">
                                    <span className="action">
                                        Explore {c.key.replace("-", " ")} →
                                    </span>
                                    <span className="count">{c.countText}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>

            {/* Social proof */}
            <section className="socialProof" aria-label="Customer feedback">
                <h2 className="socialTitle">Loved as gifts</h2>
                <div className="quotes">
                    <figure className="quoteCard">
                        <blockquote>
                            “So neatly made — it feels really special. Perfect little gift.”
                        </blockquote>
                        <figcaption>— Emma, London</figcaption>
                    </figure>

                    <figure className="quoteCard">
                        <blockquote>
                            “The stitching is beautiful and the toy is super soft.”
                        </blockquote>
                        <figcaption>— Sarah, Manchester</figcaption>
                    </figure>

                    <figure className="quoteCard">
                        <blockquote>
                            “Arrived quickly and packaged nicely — would buy again.”
                        </blockquote>
                        <figcaption>— Priya, Birmingham</figcaption>
                    </figure>
                </div>
            </section>

            {/* Note */}
            <div className="note">
                More crochet toys are coming soon! This page will grow as new collections
                are added.
            </div>

            {/* Mobile sticky Filter button */}
            <button
                type="button"
                className="mobileFilterBtn"
                onClick={() => setCompareOpen(true)}
            >
                Filter / Compare{compare.length ? ` (${compare.length})` : ""}
            </button>

            {/* Compare “light” modal */}
            {compareOpen && (
                <div className="modalOverlay" role="dialog" aria-modal="true">
                    <div className="modal">
                        <div className="modalHeader">
                            <h3>Compare</h3>
                            <button
                                type="button"
                                className="closeBtn"
                                onClick={() => setCompareOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="modalBody">
                            <p className="modalHint">
                                Select up to 3 collections to compare.
                            </p>

                            <div className="compareGrid">
                                {compareItems.length === 0 ? (
                                    <p className="emptyState">Nothing selected yet.</p>
                                ) : (
                                    compareItems.map((c) => (
                                        <div key={c.key} className="compareItem">
                                            <div className="compareThumb">
                                                <Image
                                                    src={c.image}
                                                    alt=""
                                                    width={200}
                                                    height={160}
                                                />
                                            </div>

                                            <div className="compareInfo">
                                                <strong>{c.title}</strong>
                                                <p className="muted">{c.countText}</p>
                                                <p className="muted">
                                                    {c.tags.join(" • ")}
                                                </p>

                                                <div className="compareActions">
                                                    <Link href={c.href} className="miniLink">
                                                        View →
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        className="miniBtn"
                                                        onClick={() => toggleCompare(c.key)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="modalFooter">
                            <button
                                type="button"
                                className="secondaryBtn"
                                onClick={() => setCompare([])}
                                disabled={compare.length === 0}
                            >
                                Clear
                            </button>
                            <button
                                type="button"
                                className="primaryBtn"
                                onClick={() => setCompareOpen(false)}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}