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



            {/* SEO: Local Directions & Keywords */}
            <section className="bg-neutral-900 py-16">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-500 text-sm max-w-4xl mx-auto leading-relaxed">
                        **Find Us:** We are centrally located in Danapur, easily accessible from **Saguna More** and **Danapur Railway Station**.
                        Serving clients from **Kaliket Nagar**, **Priyadarshi Nagar**, **Judge Colony**, **Abhimanyu Nagar**, and **Gola Road**.
                        <br /><br />
                        **Contact for:**
                        CCTV Installation Price List Patna • Hikvision Camera Dealer Contact Number •
                        CP Plus Service Center Patna • Best Security System Shop in Danapur •
                        CCTV Technician Near Me • Camera Repairing Shop Danapur •
                        Biometric Machine Supplier Number • Fire Alarm Technician Patna •
                        Video Door Phone Demo • Wireless Camera Price in Bihar.
                        <br /><br />
                        **Nearby Landmarks:** Near Foundation Academy, Near Tribhuvan School, Saguna More, R.P.S. More,
                        Danapur Station Road, Khagaul Road, Bailey Road.
                    </p>
                </div>
            </section>
        </main>
    );
}
