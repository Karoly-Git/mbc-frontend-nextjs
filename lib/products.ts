export type ProductType =
    | "crochet-toy"
    | "kitchen-towel"
    | "accessory-set";

export type ProductCategory =
    | "toys"
    | "home"
    | "clothing"
    | "accessories";

/**
 * ✅ Variant = one purchasable combination of options.
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

    // Optional price override (if this variant costs more/less)
    price?: number;

    // Stripe price id (recommended per variant later)
    stripePriceId?: string;

    // Physical size measurements per variant (optional)
    widthCm?: number;
    heightCm?: number;
};

export type Product = {
    id: string;
    slug: string;
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

    // Controls what selectors show in UI
    variantDimensions?: string[];
    variants?: ProductVariant[];

    /**
     * ✅ Optional: if this product can be upgraded with add-ons,
     * list product IDs here (like an "accessory set" product).
     */
    addOnProductIds?: string[];
};

export const products: Product[] = [
    /**
     * ✅ Penguin
     * Variants: Body color only
     * Add-on: Hat + scarf set (separate product)
     */
    {
        id: "prod_penguin",
        slug: "snowy-the-penguin",
        name: "Snowy the Penguin",
        price: 2500,
        image: "/products/toys/penguin/cyan.jpg",
        description: "A soft handmade penguin plush, stitched with care.",
        category: "toys",
        type: "crochet-toy",
        madeToOrder: true,
        customisable: true,
        material: "Premium yarn",

        variantDimensions: ["bodyColor"],

        variants: [
            {
                id: "var_penguin_cyan",
                image: "/products/toys/penguin/cyan.jpg",
                options: { bodyColor: "Cyan" },
                inStock: true,
                stock: 1,
                heightCm: 14,
            },
            {
                id: "var_penguin_black",
                image: "/products/toys/penguin/black.jpg",
                options: { bodyColor: "Black" },
                inStock: true,
                stock: 1,
                heightCm: 14,
            },
        ],

        // ✅ This links the penguin to the accessory set product
        addOnProductIds: ["prod_penguin_accessory_set"],
    },

    /**
     * ✅ Accessory Set (Hat + Scarf) as a separate product
     * Variants: color
     *
     * You can set price = 0 if it's free/included,
     * or charge extra (example: +£5.00 => 500).
     */
    {
        id: "prod_penguin_accessory_set",
        slug: "penguin-accessory-set",
        name: "Hat + Scarf Accessory Set",
        price: 500, // £5.00 extra (change to 0 if included)
        image: "/products/accessories/penguin-set/yellow.jpg",
        description:
            "A matching hat + scarf set for your penguin (sold as one set).",
        category: "accessories",
        type: "accessory-set",
        madeToOrder: true,
        customisable: false,
        material: "Premium yarn",

        variantDimensions: ["color"],

        variants: [
            {
                id: "var_penguin_set_yellow",
                image: "/products/accessories/penguin-set/yellow.jpg",
                options: { color: "Yellow" },
                inStock: true,
                stock: 5,
            },
            {
                id: "var_penguin_set_pink",
                image: "/products/accessories/penguin-set/pink.jpg",
                options: { color: "Pink" },
                inStock: false,
                stock: 0,
            },
            {
                id: "var_penguin_set_blue",
                image: "/products/accessories/penguin-set/blue.jpg",
                options: { color: "Blue" },
                inStock: true,
                stock: 2,
            },
        ],
    },

    /**
     * ✅ Kitchen Towels
     * Variants: color + size
     */
    {
        id: "prod_kitchen_towel",
        slug: "care-kitchen-towel",
        name: "Care Kitchen Towel",
        price: 900,
        image: "/products/home/kitchen-towels/green-small.jpg",
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
                image: "/products/home/kitchen-towels/green-small.jpg",
                options: { color: "Green", size: "Small" },
                inStock: true,
                stock: 10,
                widthCm: 30,
                heightCm: 40,
            },
            {
                id: "var_kitchen_towel_green_large",
                image: "/products/home/kitchen-towels/green-large.jpg",
                options: { color: "Green", size: "Large" },
                inStock: true,
                stock: 6,
                widthCm: 50,
                heightCm: 80,
                price: 1200,
            },
            {
                id: "var_kitchen_towel_white_small",
                image: "/products/home/kitchen-towels/white-small.jpg",
                options: { color: "White", size: "Small" },
                inStock: true,
                stock: 10,
                widthCm: 30,
                heightCm: 40,
            },
            {
                id: "var_kitchen_towel_white_large",
                image: "/products/home/kitchen-towels/white-large.jpg",
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
