import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://saldatasolutions.com"),
  title: {
    default: "SAL Data Solutions | Transforming Data into Decisions",
    template: "%s | SAL Data Solutions"
  },
  description:
    "SAL Data Solutions is a premium data engineering, artificial intelligence, analytics, cloud, and business intelligence consulting company.",
  keywords: [
    "SAL Data Solutions",
    "Data Engineering",
    "Artificial Intelligence",
    "Business Intelligence",
    "Cloud Data Platforms",
    "Data Governance",
    "Analytics Consulting"
  ],
  openGraph: {
    title: "SAL Data Solutions",
    description: "Transforming Data into Decisions through Engineering, AI and Analytics.",
    url: "https://saldatasolutions.com",
    siteName: "SAL Data Solutions",
    images: [{ url: "/images/sds-enterprise-data-hero.png", width: 1600, height: 900 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SAL Data Solutions",
    description: "Transforming Data into Decisions through Engineering, AI and Analytics.",
    images: ["/images/sds-enterprise-data-hero.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} bg-white text-navy antialiased dark:bg-[#071225] dark:text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
