"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Youtube, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                        <p className="text-gray-400 mb-10 text-lg">
                            Secure your property with Z Plus Smart Vision. Contact us for installation, repair, or a free consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Call Us</h3>
                                    <a href="tel:+919288661426" className="block text-gray-400 hover:text-blue-400 transition-colors">
                                        +91 9288 661 426
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Mail className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                                    <a href="mailto:zplussmartvisio@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        zplussmartvisio@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <MapPin className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Visit Us</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Balaji Apartment, Judge Colony,<br />
                                        Kaliket Nagar, Danapur,<br />
                                        Patna, Bihar 801503
                                    </p>
                                </div>
                            </div>

                            {/* Added WhatsApp Button logic implicitly via the phone link or we could add a button */}
                            <a
                                href="https://wa.me/919288661426?text=Hmko%20aapse%20Camera%20lagawana%20hai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Map Integration */}
                        <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900">
                            <iframe
                                src="https://www.google.com/maps?q=Balaji+Apartment,Judge+Colony,Kaliket+Nagar,Danapur,Patna,Bihar&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                                title="Z Plus Smart Vision Location"
                            />
                        </div>
                        <p className="text-xs text-gray-500 text-center mt-2">
                            *Map shows location of Balaji Apartment, Danapur
                        </p>
                    </motion.div>
                </div>

                <div className="text-center pt-8 border-t border-white/5">
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <Facebook size={24} />
                        </a>
                        <a href="https://www.instagram.com/zplussmartvision?igsh=Z2JzNnhtcWtmbm5l" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="https://youtube.com/@zplussmartvision?si=NgFLiQ-K4Jwf9O61" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                            <Youtube size={24} />
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Z Plus Smart Vision CCTV. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
