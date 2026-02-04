import Link from "next/link";

export default function ToysPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Toys</h1>

            <ul style={{ marginTop: 16 }}>
                <li>
                    <Link href="/shop/toys/penguins">Penguins</Link>
                </li>
            </ul>
        </main>
    );
}
