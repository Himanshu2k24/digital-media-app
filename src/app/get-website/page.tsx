"use client";

import Navbar from "@/components/Navbar";
import { Check, Rocket, Globe, Smartphone, Code, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GetWebsite() {
    const features = [
        {
            icon: <Smartphone size={32} className="text-blue-400" />,
            title: "Mobile Responsive",
            desc: "Looks perfect on all devices - Phones, Tablets, and Laptops.",
        },
        {
            icon: <Rocket size={32} className="text-purple-400" />,
            title: "Blazing Fast",
            desc: "Optimized for speed to keep your visitors engaged.",
        },
        {
            icon: <Globe size={32} className="text-green-400" />,
            title: "SEO Friendly",
            desc: "Rank higher on Google and get more customers organically.",
        },
        {
            icon: <Code size={32} className="text-yellow-400" />,
            title: "Modern Design",
            desc: "Premium, futuristic designs that build trust instantly.",
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 text-center md:text-left"
                        >
                            <div className="inline-block bg-purple-500/10 border border-purple-500/30 px-4 py-1 rounded-full text-purple-400 font-bold text-sm mb-6 animate-pulse">
                                🚀 Grow Your Business Online
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Want a Professional <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                    Website Like This?
                                </span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                Take your business to the next level with a stunning, high-performance website.
                                Whether you need a shop, portfolio, or business site, we build it to perfection.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="https://wa.me/919288661426?text=Hi%2C%20I%20saw%20your%20website%20and%20I%20want%20to%20build%20one%20for%20my%20business."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-green-600/20"
                                >
                                    <MessageCircle size={24} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <Image
                                    src="/website/hero.png"
                                    alt="Web Development"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-neutral-900 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-gray-400">We don't just write code; we build digital experiences.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-black p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group"
                            >
                                <div className="mb-4 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-12 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="mb-6 inline-block bg-yellow-500/20 border border-yellow-500 text-yellow-300 px-6 py-2 rounded-full font-bold text-lg animate-pulse">
                                😲 इतना सस्ता? हाँ, ये सच है! (Unbelievable Price)
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Digitalize Your Idea?</h2>
                            <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
                                "Jo Dikhta Hai, Woh Bikta Hai" (जो दीखता है, वो बिकता है) <br />
                                Don't let your business stay offline. Get a website that works as hard as you do.
                            </p>
                            <p className="text-gray-300 text-sm mb-8 font-mono">
                                * Limited Time Offer for Patna & Danapur Businesses *
                            </p>
                            <a
                                href="https://wa.me/919288661426?text=I%20am%20interested%20in%20web%20development%20services.%20Please%20tell%20me%20your%20offers."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-xl"
                            >
                                Start Project Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
