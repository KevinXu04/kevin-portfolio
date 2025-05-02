import './App.css';
import './index.css';
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { StarBackground } from './components/StarBackground';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* Loading effect */}
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
    <div className={`min-h-screen transition-opacity duration-700 ${
      isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
    >
      {/* Background effect */}
      <StarBackground />

      {/* Navigation */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
