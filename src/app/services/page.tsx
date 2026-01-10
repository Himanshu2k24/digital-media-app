"use client";

import Navbar from "@/components/Navbar";
import ServicesList from "@/components/Services";
import Contact from "@/components/Contact";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black pt-20">
            <Navbar />
            <ServicesList />
            <Contact />
        </main>
    );
}
