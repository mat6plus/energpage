import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Ingredients } from "./components/Ingredients";
import { Pharmacology } from "./components/Pharmacology";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Ingredients />
        <Pharmacology />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>;
}