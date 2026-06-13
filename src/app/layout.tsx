import {Outfit, JetBrains_Mono} from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})
const cormorantGarmond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})
export const metadata: Metadata = {
  title: "Daylo",
  description: "Plan your day. Track your tasks. Stay on top — with Daylo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetBrainsMono.variable} ${cormorantGarmond.variable}`}
    >
      <body>
        <div className="max-w-sm mx-auto min-h-screen relative overflow-hidden">
          {children}
          <BottomNav />
        </div>
        </body>
    </html>
  );
}
