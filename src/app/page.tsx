import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoPopup from "@/components/PromoPopup";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";

import ProductSlider from "@/components/ProductSlider";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  const services = [
    { item: "Service Charge", price: "Just ₹800 (Fix Rate)" },
    { item: "Visiting Charges", price: "Just ₹350" },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <PromoPopup />
      <Navbar />
      <Hero />

      {/* Featured Services Teaser */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="p-6 bg-black rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">Home CCTV Camera Setup</h3>
              <p className="text-gray-400">Professional CCTV Installation in Patna for complete home security.</p>
            </div>
            <div className="p-6 bg-black rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">Shop & Office CCTV Security</h3>
              <p className="text-gray-400">Advanced attendance and access control solutions for businesses.</p>
            </div>
            <div className="p-6 bg-black rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">HD & IP CCTV Camera Installation</h3>
              <p className="text-gray-400">Authorized Hikvision & CP Plus Dealer for premium quality.</p>
            </div>
          </div>
          <a href="/services" className="text-blue-500 hover:text-blue-400 font-bold flex items-center justify-center gap-2">
            View All Services &rarr;
          </a>
        </div>
      </section>

      {/* Installation & Service Charges Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-neutral-900/50 p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <h2 className="text-2xl font-bold mb-8">Installation & Service Charges</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center hover:border-yellow-500/30 transition-colors">
                  <span className="text-gray-400 mb-2 font-medium">{service.item}</span>
                  <span className="text-3xl font-bold text-yellow-400">{service.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-green-500" /> Certified Technicians</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-green-500" /> On-Site Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Slider Products */}
      <ProductSlider />

      {/* Gallery Teaser */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
          <Gallery /> { /* Keeping the slider here as requested "show in slider of home image place" */}
          <div className="mt-8">
            <a href="/gallery" className="inline-block border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Zplus Smart Vision?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-neutral-900 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold mb-2 text-blue-500">Authorized Dealer</h3>
              <p className="text-gray-300">We are an <strong>Authorized Hikvision & CP Plus Dealer</strong>, ensuring you get genuine products with full warranty support.</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold mb-2 text-blue-500">Expert Service</h3>
              <p className="text-gray-300">Best <strong>CCTV Camera Installation Service in patna</strong>. Our team provides professional installation and support for homes and offices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Z Plus Smart Vision</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We are Patna's most trusted security system provider with over 100+ successful installations.
            Verified 5-star rating on Google and Justdial.
          </p>
          <a href="/about" className="text-blue-500 hover:text-blue-400 font-bold">
            Read More About Us &rarr;
          </a>
        </div>
      </section>

      <Contact />
    </main>
  );
}
