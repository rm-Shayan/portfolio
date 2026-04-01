import { Orbitron, Share_Tech_Mono, Rajdhani, Outfit, Inter } from "next/font/google";
import Providers from "./components/Providers/Providers";
import "./globals.css";
import type { Metadata } from "next";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "600", "700", "900"], variable: "--font-orbitron" });
const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-share-tech-mono" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-rajdhani" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rao Muhammad Shayan - Portfolio",
  description: "Full Stack Developer Portfolio",
  other: {
    'google-adsense-account': 'ca-pub-4708776309734586',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${orbitron.variable} ${shareTechMono.variable} ${rajdhani.variable} ${outfit.variable} ${inter.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
