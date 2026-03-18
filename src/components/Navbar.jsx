import { useState } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div className="sticky top-0 z-50 md:flex md:justify-center md:pt-5 md:px-4">
            <div
                className="mx-auto flex justify-between items-center p-5 w-full md:max-w-3xl
                            border-b md:border md:rounded-2xl
                            border-white/20
                            bg-white/10 dark:bg-zinc-800/30
                            backdrop-blur-none
                            shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
            >
                <div className="nav-left">
                    <a href="#home">
                        <p className="text-2xl text-zinc-800 dark:text-white">lmd.dev</p>
                    </a>
                </div>
                <div className="text-2xl flex gap-2 text-zinc-800 dark:text-white">
                    <Github />
                    <Linkedin />
                    <button onClick={toggleDarkMode} className="outline-none">
                        {darkMode ? (
                            <Sun key="sun" className="animate-spin-once" />
                        ) : (
                            <Moon key="moon" className="animate-spin-once" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
