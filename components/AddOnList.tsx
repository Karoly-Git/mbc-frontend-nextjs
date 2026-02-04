import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

export function AddOnList({ addOns }: { addOns: Product[] }) {
    if (addOns.length === 0) return null;

    return (
        <section style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600 }}>Add-ons</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: 16,
                    marginTop: 12,
                }}
            >
                {addOns.map((a) => {
                    const href = `/shop/${a.section}/${a.collection}/${a.slug}`;

                    return (
                        <div
                            key={a.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: 12,
                                padding: 12,
                            }}
                        >
                            <Image
                                src={a.image}
                                alt={a.name}
                                width={320}
                                height={240}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 12,
                                }}
                            />

                            <h3 style={{ marginTop: 12 }}>{a.name}</h3>
                            <p style={{ marginTop: 6, color: "#555" }}>
                                £{(a.price / 100).toFixed(2)}
                            </p>

                            <Link href={href}>View add-on</Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
