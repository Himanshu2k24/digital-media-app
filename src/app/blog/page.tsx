import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { blogPosts } from "./posts";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security Tips & News | Zplus Smart Vision Blog",
    description: "Read the latest updates on CCTV Camera Installation in Patna, Security Tips, and Product Reviews from Zplus Smart Vision.",
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Security Blog & Tips
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Expert advice on keeping your home and office safe in Patna.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                                    <div className="relative h-48 w-full bg-gray-800">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-xs text-blue-400 font-bold mb-2">{post.date}</p>
                                        <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-blue-500 font-bold text-sm">Read Article &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
