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
        <Analytics />
      </body>
    </html>
  );
}
