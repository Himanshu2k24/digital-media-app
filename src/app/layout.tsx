import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCTV Camera Installation Service in Patna | Zplus Smart Vision",
  description: "Professional CCTV Installation in Patna. Authorized Hikvision & CP Plus Dealer. We offer Home CCTV Camera Setup, Shop & Office CCTV Security, and HD & IP CCTV Camera Installation. Best services by Zplus Smart Vision.",
  keywords: "CCTV Camera Installation Service in patna, Professional CCTV Installation in patna, Home CCTV Camera Setup, Shop & Office CCTV Security, Authorized Hikvision & CP Plus Dealer, HD & IP CCTV Camera Installation, Zplus Smart Vision, Security camera installation Patna, CCTV camera dealers in Patna, Best CCTV shop in Danapur, Z Plus Smart Vision, Biometric attendance system Patna, Home security systems, Wireless CCTV camera, Night vision camera, CCTV repair and maintenance Patna, Kaliket Nagar CCTV shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K1QFTK9JSH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K1QFTK9JSH');
          `}
        </Script>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Zplus Smart Vision",
              "image": "https://zplussmartvision.in/logo.jpeg",
              "@id": "https://zplussmartvision.in",
              "url": "https://zplussmartvision.in",
              "telephone": "+919288661426",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kaliket Nagar",
                "addressLocality": "Danapur, Patna",
                "addressRegion": "Bihar",
                "postalCode": "801503",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.62, 
                "longitude": 85.04
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://www.facebook.com/zplussmartvision",
                "https://www.instagram.com/zplussmartvision",
                "https://www.youtube.com/@ZPlusSmartVision"
              ]
            }
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
