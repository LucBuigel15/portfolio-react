import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    const handleScroll = (e, id) => {
        e.preventDefault();
        if (window.lenis && typeof window.lenis.scrollTo === "function") {
            window.lenis.scrollTo(id, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
            const target = document.querySelector(id);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 text-center -mt-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Frontend Developer</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2">
                <div className="overflow-hidden leading-[0.9]">
                    <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7 }} className="text-[20vw] md:text-[18vw] lg:text-[16vw] font-bold tracking-tight text-slate-800 dark:text-white">
                        <span className="inline-block">Luc</span>
                    </motion.h1>
                </div>
                <div className="overflow-hidden leading-[0.9]">
                    <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-[20vw] md:text-[18vw] lg:text-[16vw] font-bold tracking-tight text-slate-800 dark:text-white">
                        <span className="inline-block text-slate-400 dark:text-slate-500">Buigel</span>
                    </motion.h1>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8 flex gap-8">
                <motion.a href="#projects" onClick={(e) => handleScroll(e, "#projects")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-base font-medium text-slate-800 dark:text-white border-b-2 border-slate-800 dark:border-white pb-0.5">
                    Projecten
                </motion.a>
                <motion.a href="#contact" onClick={(e) => handleScroll(e, "#contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-base font-medium text-slate-500 dark:text-slate-400 border-b-2 border-transparent hover:border-slate-500 pb-0.5 transition-colors">
                    Contact
                </motion.a>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-10 max-w-xs text-slate-500 dark:text-slate-400 text-sm">
                Student Front-End Developer aan de Bit-Academy in Groningen.
            </motion.p>

            <motion.a href="#about" onClick={(e) => handleScroll(e, "#about")} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-8 text-slate-400 dark:text-slate-500">
                <motion.div whileHover={{ scale: 1.2 }} animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ArrowDown size={24} />
                </motion.div>
            </motion.a>
        </section>
    );
}

export default Hero;