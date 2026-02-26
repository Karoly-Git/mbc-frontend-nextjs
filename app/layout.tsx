import type { Metadata } from "next";
import "./globals.scss";

import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";


export const metadata: Metadata = {
  title: "Made by Care",
  description: "Handmade products with care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
