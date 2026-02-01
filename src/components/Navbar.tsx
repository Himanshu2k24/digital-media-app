"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Get Website", href: "/get-website" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                    Z Plus<span className="text-blue-500">SmartVision</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.href === "/" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919288661426?text=Hmko%20aapse%20Camera%20lagawana%20hai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp"
                            className="w-5 h-5 filter brightness-0 invert"
                        />
                        <span>WhatsApp</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <a
                        href="https://wa.me/919288661426?text=Hmko%20aapse%20Camera%20lagawana%20hai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 p-2 rounded-full text-white"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp"
                            className="w-5 h-5 filter brightness-0 invert"
                        />
                    </a>
                    <button
                        className="text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/5"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target={item.href === "/" ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg font-medium"
                            >
                                <span>Best Rate Janen</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
