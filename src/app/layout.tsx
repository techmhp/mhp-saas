import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const heading = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Health Passport for Schools | Student Wellbeing Platform",
  description:
    "A complete school health, wellbeing & support platform. Aligned with CBSE NEP framework, trusted by schools across India. Request a demo today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased text-navy">{children}</body>
    </html>
  );
}
