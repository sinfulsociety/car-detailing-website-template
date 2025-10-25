import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // change this
  title: "The White Glove Detailer - Premier Auto Detailing Services",
  description:
    "USA's premier mobile automotive detailing and paint protection specialists. Expert ceramic coating, paint correction, and premium detailing services.",
  keywords:
    "auto detailing, car detailing, ceramic coating, paint protection, USA, paint correction, interior detailing, mobile detailing, car wash, Blue Planet detailing",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
