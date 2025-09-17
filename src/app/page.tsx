"use client";
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero'
import { ThemeToggle } from "@/components/ui/theme-button";


const Home: React.FC = () => {  

  
  return (
    <>
        <ThemeToggle />
        <Hero />
        <div className="">
          <About/>
          {/* <Projects sectionRef={projectsRef} />
          <BlogFeature sectionRef={skillsRef} /> */}
          {/* <Skills sectionRef={skillsRef} /> */}
          {/* <About sectionRef={aboutRef} /> */}
          {/* <Contact sectionRef={contactRef} /> */}
        </div>
    </>
  );
}



export default Home;