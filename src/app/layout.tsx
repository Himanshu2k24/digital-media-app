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
  title: "Z Plus Smart Vision CCTV | Best Security System Dealer in Patna & Danapur",
  description: "Z Plus Smart Vision is Patna's #1 trusted CCTV installation service provider. We offer HD/IP cameras, Biometric systems, Video Door Phones, and Networking solutions for home, office, and shops in Danapur, Kaliket Nagar, and Patna. Authorized dealer for Hikvision, CP Plus, Dahua.",
  keywords: "CCTV installation service Patna, Security camera installation Patna, CCTV camera dealers in Patna, Best CCTV shop in Danapur, Z Plus Smart Vision, Hikvision dealer Patna, CP Plus installation, Biometric attendance system Patna, Home security systems, Wireless CCTV camera, Night vision camera, CCTV repair and maintenance Patna, Kaliket Nagar CCTV shop",
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
        <Analytics />
      </body>
    </html>
  );
}
