import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { blogPosts } from "../posts";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Zplus Smart Vision`,
        description: post.excerpt,
        keywords: post.keywords,
    };
}

// Ensure this matches the Next.js version requirements for params
export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    <Link href="/blog" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
                        &larr; Back to Blog
                    </Link>

                    <header className="mb-10 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>By Zplus Team</span>
                        </div>
                    </header>

                    <div className="relative w-full h-[300px] md:h-[400px] mb-10 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                </div>
            </article>

            <section className="bg-neutral-900 py-16 px-6 border-t border-white/10">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Need CCTV Installation?</h2>
                    <p className="text-gray-400 mb-8">We provide the best camera setup services in Patna & Danapur.</p>
                    <a
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                    >
                        Contact Us Now
                    </a>
                </div>
            </section>

            <div className="hidden">
                {/* Helper for Contact component spacing if needed at bottom */}
                <Contact />
            </div>
        </main>
    );
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
