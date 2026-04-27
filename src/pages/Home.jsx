import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SmoothFollower from "../components/SmoothFollower";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 pt-20">
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

export default Home;
