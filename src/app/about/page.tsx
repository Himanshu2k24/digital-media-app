"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Shield, Users, Award, Clock } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <Navbar />

            {/* Header */}
            <section className="bg-neutral-900 py-20 border-b border-white/10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-blue-500">Z Plus Smart Vision</span></h1>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        We are Patna's premier security solutions provider, dedicated to making homes and businesses safer through
                        advanced technology and expert service.
                    </p>
                </div>
            </section>

            {/* Our Story / Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-500">Who We Are</h2>
                        <div className="space-y-6 text-gray-300">
                            <p>
                                Established with a vision to provide top-tier security infrastructure in Bihar,
                                Z Plus Smart Vision has grown into a trusted name for CCTV and surveillance systems.
                                We are located in the heart of Danapur, Patna, serving clients across the region.
                            </p>
                            <p>
                                Unlike generic sellers, we are <strong>Authorized Dealers</strong> for global giants like
                                Hikvision and CP Plus. This means every product you buy from us comes with a
                                genuine manufacturer warranty and our personal guarantee of quality.
                            </p>
                            <p>
                                Our team comprises certified technicians who don't just install cameras but design
                                complete security ecosystems tailored to your specific layout and needs.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 text-center">
                            <Users className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">100+</div>
                            <div className="text-sm text-gray-400">Happy Clients</div>
                        </div>
                        <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 text-center">
                            <Award className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">24+</div>
                            <div className="text-sm text-gray-400">5-Star Reviews</div>
                        </div>
                        <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 text-center">
                            <Shield className="w-10 h-10 text-green-500 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-gray-400">Years Exp.</div>
                        </div>
                        <div className="bg-neutral-900 p-6 rounded-2xl border border-white/5 text-center">
                            <Clock className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">24/7</div>
                            <div className="text-sm text-gray-400">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us HTML Block */}
            <section className="bg-neutral-900 py-20 border-y border-white/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Why Local Businesses Trust Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-black rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-blue-400">Genuine Products</h3>
                            <p className="text-gray-400">
                                We never compromise on quality. All our cameras, NVRs, and accessories are sourced directly from authorized channels.
                            </p>
                        </div>
                        <div className="p-8 bg-black rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-blue-400">Transparent Pricing</h3>
                            <p className="text-gray-400">
                                No hidden charges. We provide detailed quotes for supply and installation so you know exactly what you're paying for.
                            </p>
                        </div>
                        <div className="p-8 bg-black rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-blue-400">Expert Wiring</h3>
                            <p className="text-gray-400">
                                Our "Zero-Mess" wiring policy ensures your home or office looks clean and professional after installation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO: Areas We Serve & Keywords */}
            <section className="bg-black py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8 text-center text-gray-500 uppercase tracking-widest">Our Service Network</h2>

                    <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-500">
                        <div>
                            <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Danapur & West Patna</h3>
                            <ul className="space-y-2">
                                <li>Saguna More</li>
                                <li>Danapur Cantt</li>
                                <li>Kaliket Nagar</li>
                                <li>Gola Road</li>
                                <li>RPS More</li>
                                <li>Khagaul Road</li>
                                <li>Bihta</li>
                                <li>Shivala Par</li>
                                <li>Usri</li>
                                <li>Danapur Nizamat</li>
                                <li>Takiyapar</li>
                                <li>Mainpura</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Patna Core Areas</h3>
                            <ul className="space-y-2">
                                <li>Bailey Road (Nehru Path)</li>
                                <li>Boring Road</li>
                                <li>Patliputra Colony</li>
                                <li>Kankarbagh</li>
                                <li>Rajendra Nagar</li>
                                <li>Frazer Road</li>
                                <li>Gandhi Maidan</li>
                                <li>Ashiana Digha Road</li>
                                <li>Raja Bazar</li>
                                <li>Sheikhpura</li>
                                <li>Anisabad</li>
                                <li>Phulwari Sharif</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Security Solutions</h3>
                            <ul className="space-y-2">
                                <li>CCTV Camera Installation</li>
                                <li>IP Camera Setup</li>
                                <li>Movable 360 WiFi Camera</li>
                                <li>Biometric Attendance Machine</li>
                                <li>Video Door Phones (VDP)</li>
                                <li>Electronic Door Locks</li>
                                <li>Fire Alarm Systems</li>
                                <li>GPS Trackers</li>
                                <li>Home Automation</li>
                                <li>Intercom Systems</li>
                                <li>Networking & WiFi Solutions</li>
                                <li>Computer Hardware Services</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Brands & Partners</h3>
                            <ul className="space-y-2">
                                <li>Hikvision Authorized Dealer</li>
                                <li>CP Plus Partner</li>
                                <li>Dahua Technology</li>
                                <li>Prama Hikvision</li>
                                <li>Godrej Security Solutions</li>
                                <li>Western Digital (Purple)</li>
                                <li>Seagate Skyhawk</li>
                                <li>D-Link Networking</li>
                                <li>Secureye Dealer</li>
                                <li>ZKTećo Biometrics</li>
                                <li>Realtime Attendance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                        <p>
                            **Popular Searches:** CCTV Camera in Patna, Best CCTV Shop in Danapur, Security System Dealer Bailey Road,
                            Hikvision Camera Price Bihar, CP Plus Installation Service, Wireless CCTV Camera Shop Near Me,
                            Biometric Attendance Machine Patliputra, Video Door Phone Installation Kankarbagh,
                            CCTV Maintenance Service Danapur, Night Vision Camera Dealers Patna,
                            CCTV Wiring Contractor Bihar, Office Security System, Shop Surveillance Camera.
                        </p>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
