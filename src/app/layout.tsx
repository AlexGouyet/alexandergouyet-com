import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander Gouyet — Builder & Sales Operator",
  description:
    "Cross-disciplinary builder shipping sales pipelines, autonomous agents, and mobile apps across drones, agtech, and corporate wellness.",
  openGraph: {
    title: "Alexander Gouyet",
    description:
      "Cross-disciplinary builder shipping sales pipelines, autonomous agents, and mobile apps across drones, agtech, and corporate wellness.",
    url: "https://alexandergouyet.com",
    siteName: "Alexander Gouyet",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">{children}</body>
    </html>
  );
}
