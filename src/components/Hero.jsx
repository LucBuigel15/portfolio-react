import { ArrowDown, MessageCircleCode, Binary } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    const skills = [
        { name: "React", color: "hover:text-cyan-400 hover:border-cyan-400" },
        { name: "Tailwind", color: "hover:text-sky-400 hover:border-sky-400" },
        { name: "TypeScript", color: "hover:text-blue-500 hover:border-blue-500" },
        { name: "Javascript", color: "hover:text-yellow-400 hover:border-yellow-400" },
        { name: "Bootstrap", color: "hover:text-purple-500 hover:border-purple-500" },
        { name: "HTML", color: "hover:text-orange-500 hover:border-orange-500" },
        { name: "CSS", color: "hover:text-blue-400 hover:border-blue-400" },
    ];

    const simpleFade = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        if (window.lenis && typeof window.lenis.scrollTo === "function") {
            window.lenis.scrollTo(id, {
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            const target = document.querySelector(id);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center -mt-20"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.01, translateY: -500, rotate: 360 }}
                animate={{ opacity: 1, scale: 1, translateY: 0, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="w-40 h-40 rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700"
            >
                <img
                    src="https://avatars.githubusercontent.com/u/248863441?v=4"
                    alt="Luc Buigel"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.div {...simpleFade} className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Frontend Developer</p>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-800 dark:text-white">
                    Luc Buigel
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto text-sm leading-relaxed">
                    Ik ben student Front-End Developer aan de Bit-Academy in Groningen.
                </p>
            </motion.div>

            <motion.div
                {...simpleFade}
                transition={{ delay: 0.2 }}
                className="overflow-hidden w-full max-w-sm relative"
            >
                <motion.div
                    className="flex gap-2 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    {[...skills, ...skills].map((skill, i) => (
                        <span
                            key={i}
                            className={`text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 whitespace-nowrap transition-all duration-300 ${skill.color}`}
                        >
                            {skill.name}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div {...simpleFade} transition={{ delay: 0.3 }} className="flex gap-3">
                <motion.a
                    href="#projects"
                    onClick={(e) => handleScroll(e, "#projects")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-sm px-5 py-2.5 rounded-full bg-zinc-800 dark:bg-white text-white dark:text-zinc-900 flex items-center gap-2 cursor-pointer"
                >
                    Mijn Projecten <Binary size={20} />
                </motion.a>

                <motion.a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
                >
                    Stuur een berichtje! <MessageCircleCode size={20} />
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-zinc-400 dark:text-zinc-600 mt-4"
            >
                <a
                    href="#skills"
                    onClick={(e) => handleScroll(e, "#skills")}
                    className="hover:text-zinc-600 dark:hover:text-zinc-400 transition duration-200 cursor-pointer block"
                    aria-label="Scroll naar skills"
                >
                    <ArrowDown className="animate-bounce" size={18} />
                </a>
            </motion.div>
        </section>
    );
}

export default Hero;
