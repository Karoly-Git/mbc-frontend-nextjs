export type ShopSection = "toys" | "home";
export type ShopCollection = "penguins" | "kitchen-towels" | "aprons";

export type ProductType = "crochet-toy" | "kitchen-towel" | "accessory-set";

export type ProductCategory =
    | "toys"
    | "home"
    | "clothing"
    | "accessories";

/**
 * Variant = one purchasable combination of options.
 * Examples:
 * { bodyColor: "Cyan" }
 * { color: "Green", size: "Large" }
 * { color: "Pink" }
 */
export type ProductVariant = {
    id: string;

    image: string;
    images?: string[];

    options: Record<string, string>;

    // Inventory / pricing
    inStock?: boolean;
    stock?: number;

    // Optional price override
    price?: number;

    // Stripe price id (recommended per variant later)
    stripePriceId?: string;

    // Physical size measurements (optional)
    widthCm?: number;
    heightCm?: number;
};

export type Product = {
    id: string;

    /**
     * ✅ URL structure:
     * /shop/:section/:collection/:slug
     */
    section: ShopSection;
    collection: ShopCollection;
    slug: string; // e.g. "sunny", "milo", "care-kitchen-towel"

    name: string;

    price: number; // pennies (GBP)

    image: string; // fallback default image
    images?: string[];

    description?: string;

    category: ProductCategory;
    type: ProductType;

    madeToOrder?: boolean;
    customisable?: boolean;

    material?: string;

    variantDimensions?: string[];
    variants?: ProductVariant[];

    addOnProductIds?: string[];
};

export const products: Product[] = [
    /**
     * ✅ Penguin: Sunny
     * /shop/toys/penguins/sunny
     */
    {
        id: "prod_penguin_sunny",
        section: "toys",
        collection: "penguins",
        slug: "sunny",
        name: "Sunny the Penguin",
        price: 2500,
        image: "/products/toys/penguins/sunny/cyan.png",
        description: "A soft handmade penguin plush, stitched with care.",
        category: "toys",
        type: "crochet-toy",
        madeToOrder: true,
        customisable: true,
        material: "Premium yarn",

        variantDimensions: ["bodyColor"],

        variants: [
            {
                id: "var_penguin_sunny_cyan",
                image: "/products/toys/penguins/sunny/cyan.png",
                options: { bodyColor: "Cyan" },
                inStock: true,
                stock: 1,
                heightCm: 14,
            },
            {
                id: "var_penguin_sunny_black",
                image: "/products/toys/penguins/sunny/black.png",
                options: { bodyColor: "Black" },
                inStock: true,
                stock: 1,
                heightCm: 14,
            },
        ],

        addOnProductIds: ["prod_penguin_sunny_accessory_set"],
    },

    /**
     * ✅ Penguin: Milo
     * /shop/toys/penguins/milo
     */
    {
        id: "prod_penguin_milo",
        section: "toys",
        collection: "penguins",
        slug: "milo",
        name: "Milo the Penguin",
        price: 2500,
        image: "/products/toys/penguins/milo/cyan.png",
        description: "A handmade penguin plush, perfect as a gift.",
        category: "toys",
        type: "crochet-toy",
        madeToOrder: true,
        customisable: true,
        material: "Premium yarn",

        variantDimensions: ["bodyColor"],

        variants: [
            {
                id: "var_penguin_milo_cyan",
                image: "/products/toys/penguins/milo/cyan.png",
                options: { bodyColor: "Cyan" },
                inStock: true,
                stock: 1,
                heightCm: 14,
            },
            {
                id: "var_penguin_milo_black",
                image: "/products/toys/penguins/milo/black.png",
                options: { bodyColor: "Black" },
                inStock: true,
                stock: 1,
                heightCm: 14,
            },
        ],

        addOnProductIds: ["prod_penguin_milo_accessory_set"],
    },

    /**
     * ✅ Accessory Set for SUNNY
     * Not shown in /shop listing by default (we will filter it out)
     */
    {
        id: "prod_penguin_sunny_accessory_set",
        section: "toys",
        collection: "penguins",
        slug: "sunny-accessory-set",
        name: "Hat + Scarf Accessory Set (Sunny)",
        price: 500,
        image: "/products/toys/penguins/sunny/accessories/yellow.png",
        description:
            "A matching hat + scarf set for Sunny (sold as one set).",
        category: "accessories",
        type: "accessory-set",
        madeToOrder: true,
        customisable: false,
        material: "Premium yarn",

        variantDimensions: ["color"],

        variants: [
            {
                id: "var_penguin_sunny_accessory_set_yellow",
                image: "/products/toys/penguins/sunny/accessories/yellow.png",
                options: { color: "Yellow" },
                inStock: true,
                stock: 5,
            },
            {
                id: "var_penguin_sunny_accessory_set_pink",
                image: "/products/toys/penguins/sunny/accessories/pink.png",
                options: { color: "Pink" },
                inStock: false,
                stock: 0,
            },
            {
                id: "var_penguin_sunny_accessory_set_blue",
                image: "/products/toys/penguins/sunny/accessories/blue.png",
                options: { color: "Blue" },
                inStock: true,
                stock: 2,
            },
        ],
    },

    /**
     * ✅ Accessory Set for MILO
     */
    {
        id: "prod_penguin_milo_accessory_set",
        section: "toys",
        collection: "penguins",
        slug: "milo-accessory-set",
        name: "Hat + Scarf Accessory Set (Milo)",
        price: 500,
        image: "/products/toys/penguins/milo/accessories/yellow.png",
        description: "A matching hat + scarf set for Milo (sold as one set).",
        category: "accessories",
        type: "accessory-set",
        madeToOrder: true,
        customisable: false,
        material: "Premium yarn",

        variantDimensions: ["color"],

        variants: [
            {
                id: "var_penguin_milo_accessory_set_yellow",
                image: "/products/toys/penguins/milo/accessories/yellow.png",
                options: { color: "Yellow" },
                inStock: true,
                stock: 5,
            },
            {
                id: "var_penguin_milo_accessory_set_pink",
                image: "/products/toys/penguins/milo/accessories/pink.png",
                options: { color: "Pink" },
                inStock: true,
                stock: 2,
            },
            {
                id: "var_penguin_milo_accessory_set_blue",
                image: "/products/toys/penguins/milo/accessories/blue.png",
                options: { color: "Blue" },
                inStock: true,
                stock: 1,
            },
        ],
    },

    /**
     * ✅ Kitchen towel
     * /shop/home/kitchen-towels/care-kitchen-towel
     */
    {
        id: "prod_kitchen_towel",
        section: "home",
        collection: "kitchen-towels",
        slug: "care-kitchen-towel",
        name: "Care Kitchen Towel",
        price: 900,
        image: "/products/home/kitchen-towels/green-small.png",
        description: "Soft and practical kitchen towel, perfect for everyday use.",
        category: "home",
        type: "kitchen-towel",
        madeToOrder: false,
        customisable: false,
        material: "Cotton",

        variantDimensions: ["color", "size"],

        variants: [
            {
                id: "var_kitchen_towel_green_small",
                image: "/products/home/kitchen-towels/green-small.png",
                options: { color: "Green", size: "Small" },
                inStock: true,
                stock: 10,
                widthCm: 30,
                heightCm: 40,
            },
            {
                id: "var_kitchen_towel_green_large",
                image: "/products/home/kitchen-towels/green-large.png",
                options: { color: "Green", size: "Large" },
                inStock: true,
                stock: 6,
                widthCm: 50,
                heightCm: 80,
                price: 1200,
            },
            {
                id: "var_kitchen_towel_white_small",
                image: "/products/home/kitchen-towels/white-small.png",
                options: { color: "White", size: "Small" },
                inStock: true,
                stock: 10,
                widthCm: 30,
                heightCm: 40,
            },
            {
                id: "var_kitchen_towel_white_large",
                image: "/products/home/kitchen-towels/white-large.png",
                options: { color: "White", size: "Large" },
                inStock: true,
                stock: 6,
                widthCm: 50,
                heightCm: 80,
                price: 1200,
            },
        ],
    },
];
