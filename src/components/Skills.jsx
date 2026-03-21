import { motion } from "framer-motion";
import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiTypescript,
    SiPhp,
    SiMysql,
    SiGit,
    SiBootstrap,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";

function Skills() {
    const allLang = [
        { name: "HTML", icon: <SiHtml5 />, color: "#E34F26", status: "know" },
        { name: "CSS", icon: <IoLogoCss3 />, color: "#1572B6", status: "know" },
        { name: "JS", icon: <SiJavascript />, color: "#F7DF1E", status: "learning" },
        { name: "TS", icon: <SiTypescript />, color: "#3178C6", status: "learning" },
        { name: "React", icon: <SiReact />, color: "#61DAFB", status: "learning" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", status: "know" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", status: "know" },
        { name: "PHP", icon: <SiPhp />, color: "#777BB4", status: "learning" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1", status: "learning" },
        { name: "Git", icon: <SiGit />, color: "#F05032", status: "know" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="skills" className="py-24 px-4 bg-white dark:bg-zinc-950 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold text-zinc-800 dark:text-white mb-4">Skills</h2>
                    <div className="h-1.5 w-20 bg-white mx-auto rounded-full" />
                </header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                >
                    {allLang.map((lang, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: `0px 15px 30px ${lang.color}40`,
                                borderColor: lang.color,
                            }}
                            className="relative group flex flex-col items-center justify-center p-6 pt-10 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all duration-300"
                        >
                            <div className="absolute top-3 left-0 right-0 flex justify-center items-center gap-1.5">
                                <span
                                    className={`h-2 w-2 rounded-full ${
                                        lang.status === "know"
                                            ? "bg-emerald-500 shadow-[0_0_8px_#10b981]"
                                            : "bg-amber-500 shadow-[0_0_8px_#f59e0b]"
                                    }`}
                                />
                                <span className="text-[9px] uppercase tracking-tighter font-bold text-zinc-500 dark:text-zinc-400 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    {lang.status === "know" ? "Ken ik" : "Aan het leren"}
                                </span>
                            </div>

                            <div
                                className="text-4xl mb-3 mt-2 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: lang.color }}
                            >
                                {lang.icon}
                            </div>

                            <span className="font-bold text-sm md:text-base text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                                {lang.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
