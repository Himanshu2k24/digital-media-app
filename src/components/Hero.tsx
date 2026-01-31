"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Search } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        #1 Security System Supplier in Patna
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Secure Your Assets With <br />
                        <span className="text-blue-500">Z Plus Smart Vision</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Trusted CCTV Installation & Smart Security Solutions in Danapur, Patna. Home, Office, Shop, & Factory Protection.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all flex items-center gap-2"
                        >
                            Abhi Rate Pata Karein
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm"
                        >
                            View Services
                        </Link>
                        <a
                            href="https://wa.me/919288661426?text=Hmko%20aapse%20Camera%20lagawana%20hai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg transition-all flex items-center gap-2"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                                className="w-6 h-6 filter brightness-0 invert"
                            />
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>

                {/* Feature Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { icon: Shield, title: "HD/IP CCTV", desc: "Crystal Clear Surveillance" },
                        { icon: Globe, title: "Smart Access", desc: "Biometric & Door Locks" },
                        { icon: Search, title: "24/7 Support", desc: "Maintenance & Repair" },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
