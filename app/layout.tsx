import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rao Muhammad Shayan - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Adsense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4708776309734586"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
