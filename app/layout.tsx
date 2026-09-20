import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Wisata Tabanan",
  description: "Wisata Tabanan - Destinasi Wisata di Tabanan, Bali"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}