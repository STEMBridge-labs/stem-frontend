import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STEMBridge",
  description:
    "Step-by-step JSS 1 Mathematics learning, built for offline-first use.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "STEMBridge",
    description:
      "Step-by-step JSS 1 Mathematics learning, built for offline-first use.",
    images: ["/og-mascot-stem.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "STEMBridge",
    description:
      "Step-by-step JSS 1 Mathematics learning, built for offline-first use.",
    images: ["/og-mascot-stem.png"],
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
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
