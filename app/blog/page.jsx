import Link from "next/link";
import "./style.scss";

export default function BlogPage() {
    return (
        <main className="blogPage">
            {/* Hero */}
            <header className="blogHero">
                <p className="eyebrow">From the Workshop</p>
                <h1>Notes, stories, and moments from behind the scenes</h1>
                <p className="intro">
                    A small collection of thoughts from our workshop — sharing
                    the process, the people, and the care that goes into every
                    handmade piece.
                </p>
            </header>

            {/* Posts */}
            <section className="posts">
                <article className="postCard">
                    <p className="meta">Workshop notes</p>
                    <h2>How our penguins are made</h2>
                    <p>
                        From selecting yarn to stitching the final details, a
                        look into the process behind our handmade penguins.
                    </p>
                    <Link href="/blog/how-our-penguins-are-made">
                        Read more →
                    </Link>
                </article>

                <article className="postCard">
                    <p className="meta">Behind the scenes</p>
                    <h2>Why we work in small batches</h2>
                    <p>
                        A closer look at why we choose quality over quantity and
                        how small batches help us keep every piece special.
                    </p>
                    <Link href="/blog/why-small-batches-matter">
                        Read more →
                    </Link>
                </article>

                <article className="postCard">
                    <p className="meta">Materials</p>
                    <h2>Choosing yarn with care</h2>
                    <p>
                        How we select materials that feel good, last well, and
                        respect the handmade process.
                    </p>
                    <Link href="/blog/choosing-yarn-with-care">
                        Read more →
                    </Link>
                </article>
            </section>
        </main>
    );
}
