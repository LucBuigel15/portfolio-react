import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    { title: "Schrijvershoek", description: "Website voor een buurtvereniging in Zuidbroek.", github: "https://github.com/LucBuigel15/Schrijvershoek-Zuidbroek", tech: ["React", "Tailwind", "JS"] },
    { title: "Portfolio", description: "Mijn portfolio website.", github: "#", tech: ["React", "Tailwind", "Motion"] },
    { title: "IntelliJ TabOut", description: "Extension voor IntelliJ IDEA.", github: "https://github.com/LucBuigel15/JumpOut-for-IntelliJ-IDEA", tech: ["Kotlin"] },
    { title: "Web-Rookie", description: "Eindopdracht voor Web-Rookie.", github: "https://github.com/LucBuigel15/Web-rookie-eindproject.com", tech: ["HTML", "CSS", "JS", "Bootstrap"] },
];

function Projects() {
    return (
        <section id="projects" className="py-24 px-5 md:px-16 lg:px-24 min-h-screen">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Mijn werk</p>
                <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tighter text-slate-800 dark:text-white leading-[0.9]">Projecten</h2>
            </motion.div>

            <div className="mt-16 space-y-8">
                {projects.map((project, i) => (
                    <motion.a key={i} href={project.github} target="_blank" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ x: 5 }} className="block group">
                        <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white">{project.title}</h3>
                                <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-md">{project.description}</p>
                                <div className="flex gap-3 mt-2">{project.tech.map((t, j) => <span key={j} className="text-xs text-slate-400">{t}</span>)}</div>
                            </div>
                            <ArrowUpRight className="text-slate-300 dark:text-slate-600" size={22} />
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

export default Projects;