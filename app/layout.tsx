import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { generatePageTitle } from "@/src/shared/utils/metadata";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: generatePageTitle("Inicio"),
  description: "Fullstack NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
