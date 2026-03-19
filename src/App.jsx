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
        const lenis = new Lenis({
            duration: 1.0,
            lerp: 0.1,
            wheelMultiplier: 3,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen">
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
