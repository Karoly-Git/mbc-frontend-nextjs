import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import "./product-card.scss";

export function ProductCard({ product }: { product: Product }) {
    const href = `/shop/${product.section}/${product.collection}/${product.slug}`;

    return (
        <Link href={href} className="product-card">
            {/* Image */}
            <div className="media">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={320}
                    className="image"
                />

                {/* Optional badge */}
                {/* <span className="badge">New</span> */}
            </div>

            {/* Content */}
            <div className="content">
                <h3 className="title">{product.name}</h3>

                <div className="priceRow">
                    <span className="price">
                        £{(product.price / 100).toFixed(2)}
                    </span>
                </div>

                <div className="actionRow">
                    <span className="action">View details →</span>
                </div>
            </div>
        </Link>
    );
}