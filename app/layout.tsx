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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
