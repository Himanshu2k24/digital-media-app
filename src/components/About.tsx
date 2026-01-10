"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

export default function AboutContent() {
    return (
        <section className="py-24 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-800">
                            {/* Using a tech/security related placeholder since we don't have the original image assets */}
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
                            <div className="flex items-center justify-center h-full text-gray-600">
                                [Security Team Image Placeholder]
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-blue-500">Z Plus Smart Vision</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            We are a premier security system supplier based in <strong>Kaliket Nagar, Danapur, Patna</strong>.
                            Specializing in advanced surveillance solutions, we protect what matters most to you—homes, offices, factories, and shops.
                        </p>
                        <p className="text-gray-400 mb-8">
                            Our team consists of certified technicians skilled in the installation and maintenance of HD/IP Cameras, Biometric systems, and Wireless setups.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3">
                                <Star className="text-yellow-500 fill-yellow-500" />
                                <span className="text-white font-bold text-lg">5/5 Customer Rating</span>
                            </div>
                            <p className="text-sm text-gray-500 italic">"14+ Users rated us 5 out of 5 for our quick service and reliability."</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Wireless CCTV Setup", "DVR/NVR Installation", "CCTV Repair & Maintenance", "Smart Home Solutions"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="text-blue-500 w-5 h-5" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
