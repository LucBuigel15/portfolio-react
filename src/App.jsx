import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmoothFollower from "./components/SmoothFollower";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
    return (
        <div className="min-h-screen">
            <SmoothFollower />
            <Navbar />
            <Hero />
            <About />
            <Skills />
        </div>
    );
}
export default App;
