"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
    // Using placeholders since actual uploaded images are not available yet.
    // In a real app, these would come from an API or storage bucket.
    // Placeholder images from Unsplash to represent the type of work
    // You can replace these with your actual Google Business photos by adding them to public/images
    const images = [
        {
            type: "Recent Installation",
            loc: "Patna, Bihar",
            src: "/images/project_1.webp"
        },
        {
            type: "Site Inspection",
            loc: "Danapur, Bihar",
            src: "/images/project_2.webp"
        },
        {
            type: "System Setup",
            loc: "Commercial Site",
            src: "/images/project_3.webp"
        },
        {
            type: "Team at Work",
            loc: "On-site",
            src: "/images/project_4.webp"
        },
        {
            type: "Warehouse Security",
            loc: "Industrial Area",
            src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2935&auto=format&fit=crop"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Recent Work</h2>
                    <p className="text-gray-400">Glimpses of security installations across Patna & Danapur</p>
                </div>

                <div className="relative max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {/* Real Image */}
                            <img
                                src={images[currentIndex].src}
                                alt={images[currentIndex].type}
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-10">
                                <h3 className="text-3xl font-bold text-white mb-2">{images[currentIndex].type}</h3>
                                <p className="text-blue-400 text-lg">{images[currentIndex].loc}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slider Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all z-10 border border-white/10"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all z-10 border border-white/10"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`transition-all duration-300 rounded-full h-3 ${idx === currentIndex ? "w-8 bg-blue-500" : "w-3 bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
