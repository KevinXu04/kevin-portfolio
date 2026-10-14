import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    // "user" turns transform animations off when prefers-reduced-motion is set
    // LazyMotion + `m` ships only the animation features we use (no layout engine)
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
    </LazyMotion>
  );
}

export default App;
