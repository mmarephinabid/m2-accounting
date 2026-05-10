import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/ui/StickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "M2 Accounting Solutions | Bookkeeping & BAS Services Melbourne",
  description: "Professional bookkeeping, BAS services, and tax solutions for small businesses in South East Melbourne. Trusted local bookkeeper serving Dandenong, Cranbourne, Berwick & surrounding areas.",
  keywords: "bookkeeping melbourne, BAS agent, bookkeeper dandenong, xero bookkeeper, small business accounting, payroll services melbourne",
  openGraph: {
    title: "M2 Accounting Solutions | Bookkeeping & BAS Services Melbourne",
    description: "Professional bookkeeping, BAS services, and tax solutions for small businesses in South East Melbourne.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
