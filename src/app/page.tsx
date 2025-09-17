"use client";
import { ThemeToggle } from '@/components/ui/theme-button'
import Hero from '@/components/sections/Hero'


const Home: React.FC = () => {  

  
  return (
    <>
      <ThemeToggle />
      <Hero />

    </>
  );
}



export default Home;