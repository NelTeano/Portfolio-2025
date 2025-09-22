"use client";

// SECTIONS
import React from "react";
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";

import { ThemeToggle } from "@/components/ui/theme-button";

const Home: React.FC = () => {

  return (
    <>
          <ThemeToggle />
          <Hero />
          <About />
          <Projects />
          <Contacts />
          <Footer />

    </>
  );
}

export default Home;