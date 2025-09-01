import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Brand Boosters Media - Your Brand, Amplified by Experts",
  description: "Creative strategies that tell your story and grow your business. We boost brands to shine with high-impact video production and smart social media management.",
  keywords: "video marketing, social media management, brand strategy, creative agency, content creation, Brand Boosters Media",
  authors: [{ name: "Brand Boosters Media" }],
  openGraph: {
    title: "Brand Boosters Media - Your Brand, Amplified by Experts",
    description: "Creative strategies that tell your story and grow your business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Boosters Media - Your Brand, Amplified by Experts",
    description: "Creative strategies that tell your story and grow your business.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body
        className="font-inter antialiased bg-white min-h-screen overflow-x-hidden"
      >
        <div className="relative">
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
