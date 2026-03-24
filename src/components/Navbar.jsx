import { useState } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { handleScroll } from "../utils/handleScroll";

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
                    <motion.a
                        onClick={(e) => handleScroll(e, "#hero")}
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.08 }}
                        className="text-2xl text-zinc-800 dark:text-white cursor-pointer"
                    >
                        lmd.dev
                    </motion.a>
                </div>
                <div className="text-2xl flex gap-2 text-zinc-800 dark:text-white">
                    <motion.a
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.08 }}
                        href="https://github.com/lucbuigel15"
                        target="_blank"
                    >
                        <Github />
                    </motion.a>
                    <motion.a
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.08 }}
                        href="https://www.linkedin.com/in/luc-buigel-5379903b9/"
                        target="_blank"
                    >
                        <Linkedin />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={toggleDarkMode}
                        className="outline-none"
                    >
                        {darkMode ? (
                            <Sun key="sun" className="animate-spin-once" />
                        ) : (
                            <Moon key="moon" className="animate-spin-once" />
                        )}
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
