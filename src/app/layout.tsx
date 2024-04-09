import type { Metadata } from "next";
import { Inter, Open_Sans, Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcos Daut",
  description: "Portfolio de Marcos Daut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
