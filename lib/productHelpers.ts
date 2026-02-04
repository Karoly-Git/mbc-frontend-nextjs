import { products, Product, ShopSection, ShopCollection } from "@/lib/products";

export function getProductByPath(args: {
    section: ShopSection;
    collection: ShopCollection;
    slug: string;
}): Product | undefined {
    const { section, collection, slug } = args;

    return products.find(
        (p) => p.section === section && p.collection === collection && p.slug === slug
    );
}

export function getProductsByCollection(args: {
    section: ShopSection;
    collection: ShopCollection;
}): Product[] {
    const { section, collection } = args;

    // ✅ Hide accessory-set products from collection listings
    return products.filter(
        (p) =>
            p.section === section &&
            p.collection === collection &&
            p.type !== "accessory-set"
    );
}

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id);
}

export function getAddOnProducts(product: Product): Product[] {
    const ids = product.addOnProductIds ?? [];
    return ids
        .map((id) => getProductById(id))
        .filter((p): p is Product => Boolean(p));
}
