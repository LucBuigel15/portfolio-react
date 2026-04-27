import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiGit, SiBootstrap, SiPhp, SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";

const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: IoLogoCss3, color: "#1572B6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
];

function Skills() {
    return (
        <section id="skills" className="py-24 px-5 md:px-16 lg:px-24 min-h-screen">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Wat ik werk mee</p>
                <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tighter text-slate-800 dark:text-white leading-[0.9]">Skills</h2>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
                {skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="py-8 pr-8 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                                <Icon size={28} color={skill.color} />
                                <span className="text-lg text-slate-800 dark:text-white">{skill.name}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-slate-500 dark:text-slate-400 max-w-lg">
                Ik werk het liefst met React en Tailwind CSS, maar ben altijd open om nieuwe technologieën te leren.
            </motion.p>
        </section>
    );
}

export default Skills;