import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers";
import { cn } from "@/lib/utils";
import NavbarMenu from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parth Kapoor Dev",
  description: "Hi , I'm Parth Kapoor & this is my portfolio website🤗",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Providers>
          <NavbarMenu/>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
