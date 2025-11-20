import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Mukul Kumar | Infra Support Engineer",
  description: "Portfolio of Mukul Kumar - Infra Support & Trade Monitoring Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050509] text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        {children}
      </body>
    </html>
  );
}
