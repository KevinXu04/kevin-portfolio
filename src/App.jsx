import "./App.css";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";
import { StarBackground } from "./components/StarBackground";
import { Footer } from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorGlowRef = useRef(null);
  const cursorBlobRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const blobPos = useRef({ x: 0, y: 0 });

  // Cursor effects
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    let animationId;
    let isHovering = false;

    const handleMouseMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };

      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = e.clientX + "px";
        cursorGlowRef.current.style.top = e.clientY + "px";
      }
    };

    const animate = () => {
      const dx = cursorPos.current.x - blobPos.current.x;
      const dy = cursorPos.current.y - blobPos.current.y;

      blobPos.current.x += dx * 0.15;
      blobPos.current.y += dy * 0.15;

      if (cursorBlobRef.current) {
        cursorBlobRef.current.style.left = blobPos.current.x + "px";
        cursorBlobRef.current.style.top = blobPos.current.y + "px";
        cursorBlobRef.current.style.transform = `translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, .cursor-hover")) {
        isHovering = true;
        cursorBlobRef.current?.classList.add("hovering");
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, [role='button'], input, textarea, .cursor-hover")) {
        isHovering = false;
        cursorBlobRef.current?.classList.remove("hovering");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(15, 15, 30, 0.9)",
            color: "#f3f4f6",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            backdropFilter: "blur(10px)",
          },
          success: {
            iconTheme: {
              primary: "#6366f1",
              secondary: "#f3f4f6",
            },
          },
        }}
      />

      <div className="min-h-screen bg-background text-foreground cursor-none md:cursor-none">
        {/* Custom cursor (desktop only) */}
        <div ref={cursorBlobRef} className="custom-cursor-blob hidden md:block" />

        {/* Ambient cursor glow (desktop only) */}
        <div ref={cursorGlowRef} className="cursor-glow hidden md:block" />

        {/* Noise texture */}
        <div className="noise-overlay" />

        {/* Background */}
        <StarBackground />

        {/* Navigation */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AnimatePresence>
          {menuOpen && (
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main>
          <Home />
          <div className="section-divider" />
          <About />
          <Stats />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Testimonials />
          <div className="section-divider" />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
