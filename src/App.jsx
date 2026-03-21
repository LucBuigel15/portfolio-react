import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmoothFollower from "./components/SmoothFollower";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    useEffect(() => {
        // Initialiseer Lenis
        const lenis = new Lenis({
            duration: 1.2,
            lerp: 0.1,
            wheelMultiplier: 1, // Tip: 1 voelt natuurlijker dan 3, maar pas aan naar wens
            smoothWheel: true,
        });

        // Maak lenis globaal beschikbaar voor je componenten
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = null;
        };
    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
            <SmoothFollower />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
