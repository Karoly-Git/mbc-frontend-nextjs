import Link from "next/link";

export default function HomeShopPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Home</h1>

            <ul style={{ marginTop: 16 }}>
                <li>
                    <Link href="/shop/home/kitchen-towels">Kitchen Towels</Link>
                </li>
                <li>
                    <Link href="/shop/home/aprons">Aprons</Link>
                </li>
            </ul>
        </main>
    );
}
