import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const siteUrl = "https://gentlekboy.vercel.app";
const oneLiner =
  "Software engineer crafting calm, dependable products, from resilient backends to interfaces that feel effortless.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kufre Udoh, Software Engineer",
  description: oneLiner,
  openGraph: {
    title: "Kufre Udoh, Software Engineer",
    description: oneLiner,
    url: siteUrl,
    siteName: "Kufre Udoh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kufre Udoh, Software Engineer",
    description: oneLiner,
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
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
