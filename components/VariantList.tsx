import Image from "next/image";
import { ProductVariant } from "@/lib/products";

export function VariantList({ variants }: { variants: ProductVariant[] }) {
    return (
        <section style={{ marginTop: 20 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600 }}>Available options</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: 16,
                    marginTop: 12,
                }}
            >
                {variants.map((v) => (
                    <div
                        key={v.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: 12,
                            padding: 12,
                        }}
                    >
                        <Image
                            src={v.image}
                            alt="Variant image"
                            width={320}
                            height={240}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 12,
                            }}
                        />

                        <div style={{ marginTop: 10 }}>
                            {Object.entries(v.options).map(([key, value]) => (
                                <p key={key} style={{ margin: "4px 0" }}>
                                    <strong>{key}:</strong> {value}
                                </p>
                            ))}

                            <p style={{ margin: "6px 0", color: v.inStock ? "green" : "red" }}>
                                {v.inStock ? "In stock ✅" : "Out of stock ❌"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
