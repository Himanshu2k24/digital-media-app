"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
                        <p className="text-gray-400 mb-10 text-lg">
                            Ready to upgrade your business security or digital presence? Contact us today for a free consultation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Call Us</h3>
                                    <p className="text-gray-400">+91 9905179259</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Mail className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                                    <p className="text-gray-400">info@digitalmedia21.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <MapPin className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Visit Us</h3>
                                    <p className="text-gray-400">Noida & Patna Offices</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-[1.02]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="text-center pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Digital Media 21. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
