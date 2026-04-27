import { useState, useEffect } from "react";
import { Github, Linkedin, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    const navLinks = [
        { href: "#about", label: "Over" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projecten" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
            <div className="px-5 md:px-8 py-4 flex justify-between items-center">
                <a href="#hero" className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                    Luc<span className="text-slate-400">.dev</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
                        <a href="https://github.com/lucbuigel15" target="_blank" className="text-slate-400 dark:text-slate-500 hover:text-slate-800 transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/luc-buigel-5379903b9/" target="_blank" className="text-slate-400 dark:text-slate-500 hover:text-slate-800 transition-colors"><Linkedin size={20} /></a>
                        <button onClick={toggleDarkMode} className="text-slate-400 dark:text-slate-500 hover:text-slate-800 transition-colors">
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>

                <button className="md:hidden text-slate-800 dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden md:hidden">
                        <div className="bg-white dark:bg-slate-950 p-5 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-base text-slate-600 dark:text-slate-300">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;