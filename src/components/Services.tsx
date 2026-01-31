"use client";

import { motion } from "framer-motion";
import {
    Camera, ShieldCheck, Key, Wifi,
    Server, Wrench, Bell, Users
} from "lucide-react";

const allServices = [
    {
        icon: Camera,
        title: "CCTV Camera Supply & Dealership",
        description: "Official dealer for genuine HD, IP, and Analog cameras. Authorized CP PLUS partner.",
        category: "Sales"
    },
    {
        icon: Wrench,
        title: "Professional Installation",
        description: "Expert installation services for residential, commercial, and industrial properties.",
        category: "Service"
    },
    {
        icon: ShieldCheck,
        title: "End-to-End Surveillance",
        description: "Complete security solutions tailored to your specific safety requirements.",
        category: "Solutions"
    },
    {
        icon: Users,
        title: "Expert Consultation",
        description: "Professional advice to help you choose the right security system for your needs.",
        category: "Consulting"
    },
    {
        icon: Server,
        title: "After-Sales Support",
        description: "Dependable maintenance and support services to keep your system running 24/7.",
        category: "Support"
    },
    {
        icon: Wifi,
        title: "Wireless Systems",
        description: "Advanced cable-free security configurations for modern homes and offices.",
        category: "Connectivity"
    },
    {
        icon: Key,
        title: "Biometric & Access Control",
        description: "Smart attendance machines and secure door lock systems.",
        category: "Security"
    },
    {
        icon: Bell,
        title: "Cost-Effective Systems",
        description: "High-performance security solutions designed to fit your budget.",
        category: "Value"
    }
];

export default function ServicesList() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive Security Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From residential installations to complex industrial security networks, Z Plus Smart Vision covers it all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 transition-all"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
