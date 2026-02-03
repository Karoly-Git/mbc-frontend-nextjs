export type ProductType = "crochet-toy" | "kitchen-towel";
export type ProductCategory = "toys" | "home" | "clothing" | "accessories";

export type Product = {
    id: string;
    slug: string;
    name: string;
    price: number; // pennies (GBP)

    image: string;
    images?: string[];

    description?: string;

    category: ProductCategory;
    type: ProductType;

    inStock?: boolean;
    stock?: number;

    madeToOrder?: boolean;
    customisable?: boolean;

    // physical product info (optional)
    heightCm?: number; // good for crochet toys
    widthCm?: number;  // good for towels
    material?: string;

    stripePriceId?: string;
};

export const products: Product[] = [
    {
        id: "prod_001",
        slug: "sunny-the-penguin",
        name: "Sunny the Penguin",
        price: 2500,
        image: "/products/sunny-penguin.jpg",
        description: "A soft handmade penguin plush, stitched with care using premium yarn.",
        category: "toys",
        type: "crochet-toy",
        inStock: true,
        stock: 1,
        madeToOrder: true,
        customisable: true,
        heightCm: 20,
        material: "Premium yarn",
        stripePriceId: "",
    },
    {
        id: "prod_002",
        slug: "snowy-the-penguin",
        name: "Snowy the Penguin",
        price: 2500,
        image: "/products/snowy-penguin.jpg",
        description: "A cuddly handmade penguin friend, made stitch by stitch for a cosy finish.",
        category: "toys",
        type: "crochet-toy",
        inStock: true,
        stock: 1,
        madeToOrder: true,
        customisable: true,
        heightCm: 20,
        material: "Premium yarn",
        stripePriceId: "",
    },
    {
        id: "prod_003",
        slug: "care-kitchen-towel",
        name: "Care Kitchen Towel",
        price: 900,
        image: "/products/kitchen-towel.jpg",
        description: "Soft and practical kitchen towel, perfect for everyday use.",
        category: "home",
        type: "kitchen-towel",
        inStock: true,
        stock: 10,
        madeToOrder: false,
        customisable: false,
        widthCm: 40,
        material: "Cotton",
        stripePriceId: "",
    },
];
