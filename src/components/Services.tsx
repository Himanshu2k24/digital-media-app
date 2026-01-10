"use client";

import { motion } from "framer-motion";
import { Monitor, Camera, LineChart, PenTool, ShoppingCart, Share2 } from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "Website Designing",
        description: "Professional, responsive websites that convert visitors into customers. We build your digital identity.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        icon: Camera,
        title: "CCTV Surveillance",
        description: "Secure your home and business with top-tier CCTV installation (Hikvision, CP Plus, Dahua).",
        color: "text-red-400",
        bg: "bg-red-500/10",
    },
    {
        icon: LineChart,
        title: "SEO Services",
        description: "Dominate search results with our data-driven SEO strategies in Noida and Patna.",
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
    {
        icon: PenTool,
        title: "Graphic Design",
        description: "Creative logo design and branding materials that make your business stand out.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce",
        description: "Robust online stores with secure payment gateways and easy inventory management.",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
    },
    {
        icon: Share2,
        title: "Social Media",
        description: "Engaging social media marketing campaigns to grow your audience and brand loyalty.",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                        Our Premium Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything you need to succeed in the digital age, under one roof.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
