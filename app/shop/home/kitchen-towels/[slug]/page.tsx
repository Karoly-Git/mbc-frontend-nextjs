import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductByPath } from "@/lib/productHelpers";
import { VariantList } from "@/app/components/VariantList";

export default async function KitchenTowelProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = getProductByPath({
        section: "home",
        collection: "kitchen-towels",
        slug,
    });

    if (!product) return notFound();

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
                        From £{(product.price / 100).toFixed(2)}
                    </p>

                    {product.description && (
                        <p style={{ color: "#555", lineHeight: 1.5 }}>
                            {product.description}
                        </p>
                    )}

                    <div style={{ marginTop: 16 }}>
                        <p>
                            <strong>Material:</strong> {product.material ?? "—"}
                        </p>
                    </div>
                </div>
            </div>

            {product.variants && product.variants.length > 0 && (
                <VariantList variants={product.variants} />
            )}
        </main>
    );
}
