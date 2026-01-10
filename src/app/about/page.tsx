"use client";

import Navbar from "@/components/Navbar";
import AboutContent from "@/components/About";
import Contact from "@/components/Contact";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black pt-20">
            <Navbar />
            <AboutContent />
            <Contact />
        </main>
    );
}
