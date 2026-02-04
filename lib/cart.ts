import { Product } from "./products";

export type CartItem = Product & { quantity: number };

const CART_KEY = "madebycare_cart";

export function getCart(): CartItem[] {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
}

export function saveCart(cart: CartItem[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: Product) {
    const cart = getCart();
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    return cart;
}

export function removeFromCart(productId: string) {
    const cart = getCart().filter((item) => item.id !== productId);
    saveCart(cart);
    return cart;
}

export function updateQuantity(productId: string, quantity: number) {
    const cart = getCart()
        .map((item) => (item.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);

    saveCart(cart);
    return cart;
}

export function clearCart() {
    saveCart([]);
}
