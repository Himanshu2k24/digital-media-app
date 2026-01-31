"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-20">
            <Navbar />

            {/* Page Header */}
            <div className="bg-neutral-900 py-16 border-b border-white/10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We provide complete security and surveillance solutions for homes, offices, shops, and industrial properties in Patna and Danapur.
                    </p>
                </div>
            </div>

            {/* Service Details Section */}
            <div className="container mx-auto px-6 py-16 space-y-24">

                {/* Service 1: Supply & Dealership */}
                <section id="supply" className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-500">CCTV Camera Supply & Dealership</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Z Plus Smart Vision is a leading authorized dealer and supplier of high-quality CCTV cameras in Patna.
                            We partner with top global brands to ensure you get authentic products with full warranty support.
                            Whether you need a single camera for your home or a bulk order for a commercial project, we offer competitive wholesale prices.
                        </p>
                        <ul className="space-y-3">
                            {["Authorized CP Plus Dealer", "Hikvision Partner", "Dahua Security Products", "Godrej CCTV Cameras"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-neutral-900 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Available Products</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-black rounded-lg text-center border border-white/5">
                                <span className="block font-bold text-lg mb-1">HD Cameras</span>
                                <span className="text-xs text-gray-500">Crystal Clear Video</span>
                            </div>
                            <div className="p-4 bg-black rounded-lg text-center border border-white/5">
                                <span className="block font-bold text-lg mb-1">IP Cameras</span>
                                <span className="text-xs text-gray-500">Network Based</span>
                            </div>
                            <div className="p-4 bg-black rounded-lg text-center border border-white/5">
                                <span className="block font-bold text-lg mb-1">Wireless</span>
                                <span className="text-xs text-gray-500">Wifi Enabled</span>
                            </div>
                            <div className="p-4 bg-black rounded-lg text-center border border-white/5">
                                <span className="block font-bold text-lg mb-1">NVR/DVR</span>
                                <span className="text-xs text-gray-500">Recording Units</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service 2: Installation */}
                <section id="installation" className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 bg-neutral-900 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Installation Capabilities</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Residential Setup</span>
                                <span className="text-blue-500 font-bold">1-4 Cameras</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Small Office</span>
                                <span className="text-blue-500 font-bold">4-16 Cameras</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Industrial Site</span>
                                <span className="text-blue-500 font-bold">32+ Cameras</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-purple-500">Professional Installation Services</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Our team of expert technicians ensures a neat and professional installation experience.
                            We don't just hang cameras; we plan the optimal viewing angles, manage clean cabling (concealed wiring),
                            and configure remote viewing on your mobile devices.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We serve all areas in Patna including Danapur, Kaliket Nagar, Bailey Road, Kankarbagh, and Boring Road.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold">
                            Book an Installation <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* Service 3: Biometric & Access */}
                <section id="access" className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-indigo-500">Biometric & Access Control</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Secure your premises with our advanced biometric systems. Perfect for offices to track employee attendance
                            or for restricted areas requiring authorized entry. We install fingerprint scanners, RFID card readers,
                            and face recognition terminals.
                        </p>
                        <ul className="space-y-3">
                            {["Time & Attendance Machines", "Magnetic Door Locks", "Video Door Phones", "Smart Locks"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <CheckCircle className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-neutral-900 h-64 rounded-2xl border border-white/10 flex items-center justify-center">
                        <p className="text-gray-500 italic">Biometric attendance demo image</p>
                    </div>
                </section>

                {/* Service 4: Support */}
                <section id="support" className="bg-blue-900/10 p-10 rounded-3xl border border-blue-500/20 text-center">
                    <h2 className="text-3xl font-bold mb-4">After-Sales Support & AMC</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                        Security is a continuous process. We offer Annual Maintenance Contracts (AMC) to ensure your
                        CCTV workflow never stops. Our support team is just a call away for any troubleshooting,
                        password resets, or hardware replacements.
                    </p>
                    <a href="tel:+919288661426" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all">
                        Call Support: +91 9288 661 426
                    </a>
                </section>

            </div>

            {/* SEO: Service Coverage & Keywords */}
            <section className="bg-neutral-900/50 py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-10 text-center text-gray-500 uppercase tracking-widest">Service Capabilities</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Keywords Block 1 */}
                        <div className="bg-black p-6 rounded-xl border border-white/5">
                            <h3 className="text-blue-500 font-bold mb-4">Installation Services</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We offer **CCTV Installation in Patna**, **Danapur Security Camera Setup**, **Biometric Installation in Bailey Road**,
                                **Video Door Phone Setup in Kankarbagh**, **Fire Alarm Installation in Patliputra**, **Office Networking in Boring Road**,
                                **Home Security System Danapur**, **Wireless Camera Shop Patna**, **Dome Camera Installation**, **Bullet Camera Setup**,
                                **PTZ Camera Configuration**, **NVR/DVR Configuration**, **Clean Cabling Services**, **Online Pipe Wiring**,
                                **Hidden Camera Detection**, **Old CCTV Repair Service**.
                            </p>
                        </div>

                        {/* Keywords Block 2 */}
                        <div className="bg-black p-6 rounded-xl border border-white/5">
                            <h3 className="text-blue-500 font-bold mb-4">Product Range</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Authorized dealer for **Hikvision 2MP/5MP/8MP Cameras**, **CP Plus 4G Sim Camera**, **Dahua IP Cameras**,
                                **Godrej Video Door Bell**, **Realtime Biometric Machine**, **ZKTećo Face Attendance**, **Seagate Surveillance HDD**,
                                **WD Purple Hard Disk**, **Cat6 Cable Bundles**, **BNC Connectors**, **DC Pins**, **Power Supply SMPS**,
                                **4 Channel DVR**, **8 Channel NVR**, **16 Channel DVR**, **32 Channel NVR**, **WiFi Routers**,
                                **4G Routers**, **Fiber Optic Media Converters**.
                            </p>
                        </div>

                        {/* Keywords Block 3 */}
                        <div className="bg-black p-6 rounded-xl border border-white/5">
                            <h3 className="text-blue-500 font-bold mb-4">Areas & Sectors</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Serving: **Saguna More**, **RPS More**, **Gola Road**, **Danapur Cantt**, **Khagaul**, **Phulwari Sharif**,
                                **Anisabad**, **Beur**, **Mithapur**, **Jakkanpur**, **Rajendra Nagar**, **Kankarbagh**, **Hanuman Nagar**,
                                **Patna City**, **Didarganj**, **Bihta Industrial Area**, **IIT Bihta**, **Shivala**, **Naubatpur**.
                                Specialized in: **School Security Systems**, **Hospital CCTV**, **Hotel Surveillance**, **Apartment Intercoms**,
                                **Factory Fire Alarms**, **Shop Anti-Theft Systems**.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
