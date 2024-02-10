import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "normalize.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Show me the Weather",
  description: "Personal weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
