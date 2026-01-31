import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />

      {/* Featured Services Teaser */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="p-6 bg-black rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">CCTV Installation</h3>
              <p className="text-gray-400">HD, IP, and Wireless camera setups for home and business.</p>
            </div>
            <div className="p-6 bg-black rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">Biometric Systems</h3>
              <p className="text-gray-400">Advanced attendance and access control solutions.</p>
            </div>
            <div className="p-6 bg-black rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-2">Networking</h3>
              <p className="text-gray-400">Complete office wiring and Wi-Fi setup services.</p>
            </div>
          </div>
          <a href="/services" className="text-blue-500 hover:text-blue-400 font-bold flex items-center justify-center gap-2">
            View All Services &rarr;
          </a>
        </div>
      </section>

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
