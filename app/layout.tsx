import type { Metadata } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premium Knife Brands & Manufacturing`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://nordblade.com"),
  openGraph: {
    title: `${siteConfig.name} | Premium Knife Brands & Manufacturing`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${dmSans.variable} ${oswald.variable} h-full`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-bg font-sans text-text antialiased"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
