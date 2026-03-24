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

export default function Skills({ setIsHovering }) {
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

    const MarqueeRow = ({ reverse = false }) => (
        <div className="overflow-hidden whitespace-nowrap w-full relative py-4">
            <motion.div
                className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
                whileHover={{ animationPlayState: "paused" }}
            >
                {[1, 2].map((i) => (
                    <ul key={i} className="flex gap-3 px-1.5">
                        {allLang.map((lang, index) => (
                            <motion.li
                                key={`${i}-${index}`}
                                onMouseEnter={() => setIsHovering?.(true)}
                                onMouseLeave={() => setIsHovering?.(false)}
                                whileHover={{ scale: 1.05, color: lang.color, borderColor: lang.color }}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-sm font-medium transition-colors duration-300 cursor-pointer bg-white dark:bg-zinc-900/30"
                            >
                                <span className="text-lg" style={{ color: "inherit" }}>
                                    {lang.icon}
                                </span>
                                {lang.name}
                            </motion.li>
                        ))}
                    </ul>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section id="skills" className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
            <div className="max-w-5xl mx-auto flex flex-col gap-12">
                <MarqueeRow reverse={true} />

                <header className="text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-zinc-800 dark:text-white mb-4">Skills</h2>
                    <div className="h-1.5 w-20 bg-zinc-800 dark:bg-white mx-auto rounded-full" />
                </header>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                >
                    {allLang.map((lang, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setIsHovering?.(true)}
                            onMouseLeave={() => setIsHovering?.(false)}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: `0px 15px 30px ${lang.color}40`,
                                borderColor: lang.color,
                            }}
                            className="relative group flex flex-col items-center justify-center p-6 pt-10 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all duration-300"
                        >
                            <div className="absolute top-3 flex items-center gap-1.5">
                                <span
                                    className={`h-2 w-2 rounded-full ${lang.status === "know" ? "bg-emerald-500" : "bg-amber-500"}`}
                                />
                                <span className="text-[9px] uppercase font-bold text-zinc-500">
                                    {lang.status === "know" ? "Ken ik" : "Leren"}
                                </span>
                            </div>
                            <div className="text-4xl mb-3 mt-2" style={{ color: lang.color }}>
                                {lang.icon}
                            </div>
                            <span className="font-bold text-sm text-zinc-800 dark:text-zinc-200 uppercase">
                                {lang.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <MarqueeRow reverse={false} />
            </div>
        </section>
    );
}
