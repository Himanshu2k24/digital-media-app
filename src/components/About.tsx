"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    "10+ Years of Experience in Digital Marketing",
    "Certified CCTV Installation Experts",
    "Dedicated Support Team 24/7",
    "Proven Track Record of SEO Success",
    "Affordable & Transparent Pricing",
    "Custom Solutions for Every Business",
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-neutral-900/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20" />
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
                                alt="Team working"
                                className="relative rounded-3xl border border-white/10 shadow-2xl z-10"
                            />
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-black rounded-xl border border-white/10 p-6 z-20 hidden md:block">
                                <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                                <div className="text-gray-400 text-sm">Projects Completed Successfully</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Why Choose <span className="text-blue-500">Digital Media 21?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We are not just a service provider; we are your growth partners. From securing your physical premises with high-tech CCTV systems to securing your top spot on Google Search, we handle it all with precision and passion.
                        </p>

                        <div className="grid grid-cols-1 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <p className="text-blue-200 italic">
                                "Our mission is to empower businesses in Noida and Patna with world-class digital tools and security solutions."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
