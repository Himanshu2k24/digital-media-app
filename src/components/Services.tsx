"use client";

import { motion } from "framer-motion";
import {
    Camera, ShieldCheck, Key, Wifi,
    Server, Wrench, Bell, Users
} from "lucide-react";

const allServices = [
    {
        icon: Camera,
        title: "CCTV Installation",
        description: "HD/IP Cameras, Dome & Bullet setups for home and office.",
        category: "Surveillance"
    },
    {
        icon: Wifi,
        title: "Wireless Systems",
        description: "Cable-free security solutions for modern setups.",
        category: "Connectivity"
    },
    {
        icon: Server,
        title: "DVR/NVR Setup",
        description: "Professional recording and storage configuration.",
        category: "Storage"
    },
    {
        icon: Wrench,
        title: "Repair & Maintenance",
        description: "Fixing night vision, wiring, and power supply issues.",
        category: "Service"
    },
    {
        icon: Key,
        title: "Access Control",
        description: "Biometric attendance machines and smart door locks.",
        category: "Security"
    },
    {
        icon: Bell,
        title: "Security Alarms",
        description: "Fire alarms, burglar alarms, and motion sensors.",
        category: "Safety"
    },
    {
        icon: ShieldCheck,
        title: "Commercial Security",
        description: "Comprehensive factory and warehouse security systems.",
        category: "Business"
    },
    {
        icon: Users,
        title: "Video Door Phones",
        description: "See who is at the door before you answer.",
        category: "Home"
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
