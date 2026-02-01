"use client";

import { useState, useEffect } from "react";
import { X, Phone, Tag, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after 1.5 seconds default
        const timer = setTimeout(() => setIsOpen(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-md bg-neutral-900 border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header / "Cross Section" */}
                        <div className="absolute top-0 right-0 p-3 z-20">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-1">
                            {/* Hero Image/Banner Area */}
                            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 text-center rounded-t-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
                                <div className="inline-flex items-center gap-2 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-2 animate-pulse">
                                    <Zap size={12} fill="currentColor" /> Only Today Offer
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-1">Mega Sale</h2>
                                <p className="text-blue-200 text-sm">Limited Time Deals on Security Systems</p>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Offer 1 */}
                                <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-white text-sm">4 Channel DVR + 4 Cameras</h3>
                                        <p className="text-xs text-gray-400">Complete Kit</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-green-400 font-bold text-lg">10% OFF</span>
                                        <Tag size={12} className="inline ml-1 text-gray-500" />
                                    </div>
                                </div>

                                {/* Offer 2 */}
                                <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-white text-sm">16 Channel DVR + 8 Cameras</h3>
                                        <p className="text-xs text-gray-400">Commercial Setup</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-green-400 font-bold text-lg">15% OFF</span>
                                        <Tag size={12} className="inline ml-1 text-gray-500" />
                                    </div>
                                </div>

                                {/* Offer 3 */}
                                <div className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-white text-sm">GPS Tracker for Car</h3>
                                        <p className="text-xs text-gray-400">Live Tracking</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-yellow-400 font-bold text-lg">25% OFF</span>
                                        <Tag size={12} className="inline ml-1 text-gray-500" />
                                    </div>
                                </div>

                                {/* Calling Feature */}
                                <a
                                    href="tel:+919288661426"
                                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-6"
                                >
                                    <Phone size={20} fill="currentColor" />
                                    Call to Claim Offer
                                </a>
                                <p className="text-center text-xs text-gray-500 mt-2">
                                    *Terms & conditions apply. While stocks last.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
