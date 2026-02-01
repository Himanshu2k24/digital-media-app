"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Zap } from "lucide-react";

const products = [
    {
        title: "DVR 4 Channel Setup",
        image: "/products/dvr_setup.png",
        discount: "5% OFF",
    },
    {
        title: "DVR 8 Channel Setup",
        image: "/products/dvr_8ch.png",
        discount: "8% OFF",
    },
    {
        title: "NVR 4 Channel IP Setup",
        image: "/products/nvr_setup.png",
        discount: "5% OFF",
    },
    {
        title: "NVR 8 Channel IP Setup",
        image: "/products/nvr_8ch.png",
        discount: "10% OFF",
    },
    {
        title: "CP Plus 2MP IR Bullet",
        image: "/products/cpplus_2mp_bullet.png",
        discount: "HOT",
    },
    {
        title: "CP Plus 2MP IR Dome",
        image: "/products/cpplus_2mp_dome.png",
        discount: "DEAL",
    },
    {
        title: "CP Plus 4MP IP Bullet",
        image: "/products/cpplus_4mp_bullet.png",
        discount: "NEW",
    },
];

export default function ProductSlider() {
    return (
        <section className="py-10 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-300">Top Selling Products</h2>
            </div>

            <div className="flex relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Double the products array to create seamless loop */}
                    {[...products, ...products].map((product, idx) => (
                        <div
                            key={idx}
                            className="relative flex-shrink-0 w-64 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden group hover:border-blue-500/50 transition-colors"
                        >
                            <div className="relative h-40 w-full bg-white/5 p-4 flex items-center justify-center">
                                <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                                    {product.discount}
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={150}
                                    height={150}
                                    className="object-contain group-hover:scale-110 transition-transform"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-sm font-bold text-white mb-3 truncate">{product.title}</h3>
                                <a
                                    href={`https://wa.me/919288661426?text=I%20am%20interested%20in%20${encodeURIComponent(product.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-white/10 hover:bg-green-600 hover:text-white text-gray-300 text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={14} /> Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
