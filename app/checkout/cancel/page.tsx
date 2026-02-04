import Link from "next/link";

export default function CancelPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Payment cancelled</h1>
            <p>No worries — you can try again any time.</p>

            <Link href="/cart">Back to cart</Link>
        </main>
    );
}
