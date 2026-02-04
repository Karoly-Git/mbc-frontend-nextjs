import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
    const body = await req.json();

    const cart = body.cart as {
        name: string;
        price: number;
        quantity: number;
    }[];

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: cart.map((item) => ({
            price_data: {
                currency: "gbp",
                product_data: { name: item.name },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        })),
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
}
