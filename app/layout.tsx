import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const Shippori = Shippori_Mincho({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mincho'
 });

export const metadata: Metadata = {
  title: "Prescious",
  description: "AI Powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: {colorPrimary: '#46feff'} }}>
    <html lang="en">
      <body className={cn("font-Shippori antialiased", Shippori.variable)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
