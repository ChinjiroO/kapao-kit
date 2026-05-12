import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@kapao-kit/ui — Component Showcase",
  description: "Example app showcasing @kapao-kit/ui components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="default"
      className="dark"
      suppressHydrationWarning
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
