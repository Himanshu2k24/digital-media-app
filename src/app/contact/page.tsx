"use client";

import Navbar from "@/components/Navbar";
import ContactContent from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black pt-20">
            <Navbar />
            <div className="pt-10">
                <ContactContent />
            </div>

            {/* Full width map section for Contact Page specifically */}
            <div className="w-full h-[50vh] mt-10 border-t border-white/10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14389.544713506972!2d85.0357738!3d25.6253406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57c024500001%3A0x0!2sDanapur%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1704888888888!5m2!1sen!2sin&q=Balaji+Apartment+Judge+Colony+Kaliket+Nagar+Danapur"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </main>
    );
}
