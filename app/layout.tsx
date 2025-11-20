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
  title: "Biplov Gautam — AI/ML Engineer",
  description:
    "Portfolio for Biplov Gautam, an AI/ML-focused full-stack engineer crafting retrieval-first, human-centered products.",
  metadataBase: new URL("https://biplovgautam.com.np"),
  openGraph: {
    title: "Biplov Gautam — AI/ML Engineer",
    description:
      "AI/ML student & full-stack builder shipping LLM copilots, RAG pipelines, and intelligent web experiences.",
    url: "https://biplovgautam.com.np",
    siteName: "Biplov Gautam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
