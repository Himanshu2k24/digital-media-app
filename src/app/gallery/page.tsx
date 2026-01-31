"use client";

import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import { Camera, MapPin } from "lucide-react";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <Navbar />

            {/* Header */}
            <section className="bg-neutral-900 py-16 border-b border-white/10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our portfolio of successful CCTV installations and security system setups across Bihar.
                    </p>
                </div>
            </section>

            {/* Slider Section */}
            <div className="pt-10">
                <Gallery />
            </div>

            {/* Project Grid Section */}
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Recent Projects Snapshot</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Local Images */}
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-black">
                                <img
                                    src={`/images/project_${num}.webp`}
                                    alt={`Project ${num}`}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-xl font-bold text-white mb-1">Project Site {num}</h3>
                                    <div className="flex items-center gap-2 text-sm text-blue-400">
                                        <MapPin size={14} /> Patna Region
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Supplement with placeholders if needed */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2935&auto=format&fit=crop"
                                alt="Control Room"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold text-white mb-1">Control Room Setup</h3>
                                <div className="flex items-center gap-2 text-sm text-blue-400">
                                    <MapPin size={14} /> Industrial Zone
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=2940&auto=format&fit=crop"
                                alt="Biometric"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold text-white mb-1">Biometric System</h3>
                                <div className="flex items-center gap-2 text-sm text-blue-400">
                                    <MapPin size={14} /> Corporate Office
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SEO: Project Footprint */}
            <section className="bg-black py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8 text-center text-gray-500 uppercase tracking-widest">Our Project Footprint</h2>

                    <div className="text-sm text-gray-500 text-center max-w-4xl mx-auto space-y-6">
                        <p>
                            We have successfully delivered projects across:
                            <span className="text-gray-400"> Danapur Main Road, Saguna More, Gola Road, R.P.S. More, Kaliket Nagar,
                                Priyadarshi Nagar, Abhimanyu Nagar, Sangam Vihar, Ved Nagar, Vivek Vihar,
                                Rupaspur, Bailey Road (Nehru Path), Raja Bazar, Sheikhpura, Ashiana Nagar,
                                Rajeev Nagar, Patliputra Colony, Boring Road, Boring Canal Road, Fraser Road,
                                Exhibition Road, Dak Bungalow Chauraha, Gandhi Maidan.</span>
                        </p>
                        <p>
                            Extended coverage in:
                            <span className="text-gray-400"> Kankarbagh (Old & New), Hanuman Nagar, Rajendra Nagar, Kadamkuan,
                                Machhua Toli, Nala Road, Patna City, Chowk, Gulzarbagh, Didarganj,
                                Fatuha, Bakhtiyarpur.</span>
                        </p>
                        <p>
                            Western Zone:
                            <span className="text-gray-400"> Khagaul, Lakhnibigha, Shivala Par, Bihta, Bihta Air Force Station Area,
                                IIT Bihta Campus Area, Naubatpur, Bikram, Maner, Phulwari Sharif,
                                AIIMS Patna Area, Walmi Complex.</span>
                        </p>

                        <div className="mt-8 p-6 bg-neutral-900 rounded-2xl border border-white/5">
                            <h3 className="text-white font-bold mb-2">Project Types Executed</h3>
                            <p className="text-xs leading-loose">
                                Residential Villa CCTV • Apartment Complex Security • Commercial Shop Surveillance •
                                Mall & Showroom Security • School Bus GPS Trackers • Industrial Factory Fire Alarms •
                                Hospital Monitoring Systems • Government Office Biometrics • Hotel Keycard Locks •
                                Restaurant POS & CCTV • Jewelry Shop High-Security Cameras • Godown Night Vision Systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
