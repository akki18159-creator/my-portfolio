import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Mukul Kumar | Infra & Trade Monitor Engineer",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;   // <-- IMPORTANT FIX
}) {
  return (
    <html lang="en">
      <body className="bg-[#050509] text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
