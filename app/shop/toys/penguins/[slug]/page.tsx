import Image from "next/image";
import { notFound } from "next/navigation";
import { getAddOnProducts, getProductByPath } from "@/lib/productHelpers";
import { VariantList } from "@/components/VariantList";
import { AddOnList } from "@/components/AddOnList";

export default async function PenguinProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = getProductByPath({
        section: "toys",
        collection: "penguins",
        slug,
    });

    if (!product) return notFound();

    const addOns = getAddOnProducts(product);

    return (
        <main style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr" }}>
                <div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={500}
                        style={{ width: "100%", height: "auto", borderRadius: 16 }}
                    />
                </div>

                <div>
                    <h1 style={{ fontSize: 32, marginBottom: 10 }}>{product.name}</h1>
                    <p style={{ fontSize: 18, marginBottom: 10 }}>
                        £{(product.price / 100).toFixed(2)}
                    </p>

                    {product.description && (
                        <p style={{ color: "#555", lineHeight: 1.5 }}>
                            {product.description}
                        </p>
                    )}

                    <div style={{ marginTop: 16 }}>
                        <p>
                            <strong>Made to order:</strong>{" "}
                            {product.madeToOrder ? "Yes ✅" : "No"}
                        </p>
                        <p>
                            <strong>Material:</strong> {product.material ?? "—"}
                        </p>
                    </div>
                </div>
            </div>

            {product.variants && product.variants.length > 0 && (
                <VariantList variants={product.variants} />
            )}

            <AddOnList addOns={addOns} />
        </main>
    );
}
