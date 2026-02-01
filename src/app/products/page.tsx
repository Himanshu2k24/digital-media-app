"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Check, Phone, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Products() {
    const products = [
        {
            title: "DVR 4 Channel Setup",
            description: "Complete 4-Camera HD Surveillance Kit",
            image: "/products/dvr_setup.png",
            discount: "5% OFF",
            features: ["HD Recoding", "Night Vision", "Remote View"],
        },
        {
            title: "DVR 8 Channel Setup",
            description: "Advanced 8-Camera Security System",
            image: "/products/dvr_8ch.png",
            discount: "8% OFF",
            features: ["Massive Storage", "Motion Detection", "App Support"],
        },
        {
            title: "NVR 4 Channel IP Setup",
            description: "Digital IP Camera System (Crystal Clear)",
            image: "/products/nvr_setup.png",
            discount: "5% OFF",
            features: ["4K Support", "PoE Power", "Smart Analytics"],
        },
        {
            title: "NVR 8 Channel IP Setup",
            description: "Professional Grade 8-IP Camera Network",
            image: "/products/nvr_8ch.png",
            discount: "10% OFF",
            features: ["Face Detection", "Cloud Backup", "Enterprise Grade"],
        },
    ];

    const singleCameras = [
        // 2MP Models (4 total)
        {
            title: "CP Plus 2MP IR Bullet",
            model: "CP-UNC-DA21L2-V2",
            desc: "Full HD 1080p, 20Mtr Night Vision",
            image: "/products/cpplus_2mp_bullet.png",
        },
        {
            title: "CP Plus 2MP IR Dome",
            model: "CP-UNC-TA21L2-V2",
            desc: "Full HD Indoor Dome, 20Mtr Range",
            image: "/products/cpplus_2mp_dome.png",
        },
        {
            title: "CP Plus 2MP Pro Bullet",
            model: "CP-UNC-DA21PL3",
            desc: "Enhanced 2MP, 30Mtr Night Vision, IP67",
            image: "/products/cpplus_2mp_bullet.png",
        },
        {
            title: "CP Plus 2MP Pro Dome",
            model: "CP-UNC-TA21PL3",
            desc: "Enhanced Dome, 30Mtr IR, Metal Body",
            image: "/products/cpplus_2mp_dome.png",
        },
        // 4MP Models (2 total)
        {
            title: "CP Plus 4MP IP Bullet",
            model: "CP-UNC-DA41L3",
            desc: "4MP QHD Resolution, 30Mtr IR, PoC",
            image: "/products/cpplus_4mp_bullet.png",
        },
        {
            title: "CP Plus 4MP IP Dome",
            model: "CP-UNC-TA41L3",
            desc: "4MP Crypto Dome, Wide Angle, Smart IR",
            image: "/products/cpplus_2mp_dome.png", // Reusing dome image
        },
        // 6MP Models (2 total)
        {
            title: "CP Plus 6MP WDR Bullet",
            model: "CP-UNC-DA61PL3",
            desc: "Ultra HD 6MP, True WDR, Audio Support",
            image: "/products/cpplus_4mp_bullet.png", // Reusing pro bullet look
        },
        {
            title: "CP Plus 6MP WDR Dome",
            model: "CP-UNC-TA61PL3",
            desc: "6MP Vandal Proof Dome, Motorized Vari-focal",
            image: "/products/cpplus_2mp_dome.png",
        },
    ];

    const services = [
        { item: "Service Charge", price: "Just ₹800 (Fix Rate)" },
        { item: "Visiting Charges", price: "Just ₹350" },
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Premium Security Products
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Danapur & Patna's #1 CCTV Supplier. <br />
                            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                                Authorized Dealer • Genuine Products • Full Warranty
                            </span>
                        </p>
                    </motion.div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
                            >
                                {/* Image Area */}
                                <div className="relative h-56 w-full bg-black/50 overflow-hidden">
                                    <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-black font-extrabold px-3 py-1 rounded shadow-lg transform rotate-3 flex items-center gap-1">
                                        <Zap size={14} fill="currentColor" /> {product.discount}
                                    </div>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Best Deal Banner Below Image */}
                                <div className="bg-gradient-to-r from-blue-900 to-purple-900 px-4 py-2 text-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-30"></div>
                                    <p className="font-bold text-sm text-white relative z-10 flex items-center justify-center gap-2">
                                        <span className="text-yellow-300">★</span> Best Deal in Market
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.features.map((f, i) => (
                                            <span key={i} className="text-[10px] uppercase font-bold bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/5">
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={`https://wa.me/919288661426?text=I%20want%20to%20buy%20${encodeURIComponent(product.title)}%20with%20${encodeURIComponent(product.discount)}%20offer.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
                                    >
                                        <MessageCircle size={20} fill="white" />
                                        Order on WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Service Charges Section */}
                    <div className="max-w-3xl mx-auto bg-neutral-900/50 p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden mb-20">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                        <h2 className="text-2xl font-bold mb-8">Installation & Service Charges</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center hover:border-yellow-500/30 transition-colors">
                                    <span className="text-gray-400 mb-2 font-medium">{service.item}</span>
                                    <span className="text-3xl font-bold text-yellow-400">{service.price}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-green-500" /> Certified Technicians</span>
                            <span className="hidden md:inline">•</span>
                            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-green-500" /> On-Site Support</span>
                        </div>
                    </div>

                    {/* CP Plus Single Cameras Section */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/50 text-red-500 font-bold text-sm mb-4">
                                OFFICIAL CP PLUS PARTNER
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Top Selling Cameras</h2>
                            <p className="text-gray-400">Upgrade your security with individual high-performance units.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {singleCameras.map((cam, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group bg-neutral-900/50 border border-white/5 rounded-xl p-4 hover:bg-neutral-800 transition-colors"
                                >
                                    <div className="relative h-40 w-full bg-white/5 rounded-lg overflow-hidden mb-4 p-2 flex items-center justify-center">
                                        <Image
                                            src={cam.image}
                                            alt={cam.title}
                                            width={200}
                                            height={200}
                                            className="object-contain group-hover:scale-105 transition-transform"
                                        />
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-1">{cam.title}</h3>
                                    <p className="text-xs text-blue-400 font-mono mb-2">{cam.model}</p>
                                    <p className="text-xs text-gray-400 h-8 mb-4">{cam.desc}</p>

                                    <a
                                        href={`https://wa.me/919288661426?text=Price%20for%20${encodeURIComponent(cam.title)}%20(${encodeURIComponent(cam.model)})`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-white/5 hover:bg-green-600 hover:text-white text-gray-300 text-sm font-bold py-2 rounded-lg text-center transition-all flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle size={16} /> Get Best Price
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Contact />
        </main>
    );
}
