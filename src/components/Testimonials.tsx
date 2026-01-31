"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Rajesh Kumar",
        rating: 5,
        text: "Excellent service by Z Plus team. They installed 8 cameras in my factory in Danapur. Very professional and neat wiring. Highly recommended!",
        date: "2 months ago",
        initial: "R"
    },
    {
        id: 2,
        name: "Amit Singh",
        rating: 5,
        text: "Best CCTV shop in Patna. I purchased Hikvision setup for my home. The price was very competitive compared to other sellers in Kaliket Nagar.",
        date: "1 month ago",
        initial: "A"
    },
    {
        id: 3,
        name: "Sneha Gupta",
        rating: 5,
        text: "Quick support. My DVR was not recording, and their technician fixed it within 2 hours of calling. Good after-sales service.",
        date: "3 weeks ago",
        initial: "S"
    },
    {
        id: 4,
        name: "Prakash Verma",
        rating: 4,
        text: "Good installation team. They explained all features of the mobile app clearly. Video clarity is amazing even at night.",
        date: "4 months ago",
        initial: "P"
    },
    {
        id: 5,
        name: "Md. Irfan",
        rating: 5,
        text: "Very reliable security system supplier. I have been using their service for 3 years now for my shop. No issues so far.",
        date: "5 months ago",
        initial: "M"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <section className="py-24 bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Trusted by <span className="text-blue-500">100+ Customers</span>
                    </h2>
                    <p className="text-gray-400">24+ Verified Reviews on Google</p>
                </div>

                <div className="relative max-w-4xl mx-auto h-[300px] md:h-[250px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={reviews[currentIndex].id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full"
                        >
                            <div className="bg-black border border-white/10 rounded-3xl p-8 md:p-12 relative mx-4 md:mx-0">
                                <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/20 rotate-180" />

                                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white shrink-0">
                                        {reviews[currentIndex].initial}
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-gray-300 text-lg md:text-xl italic mb-6 leading-relaxed">
                                            "{reviews[currentIndex].text}"
                                        </p>

                                        <div>
                                            <h4 className="text-white font-bold text-lg">{reviews[currentIndex].name}</h4>
                                            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500 mt-1">
                                                <span>{reviews[currentIndex].date}</span>
                                                <span>•</span>
                                                <span className="text-yellow-500 font-medium">Google Review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-all z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-all z-10"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-blue-500 w-8" : "bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
