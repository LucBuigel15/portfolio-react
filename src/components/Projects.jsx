import { easeOut, motion } from "framer-motion";
import { Github } from "lucide-react";
import { SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiGit, SiBootstrap, SiKotlin } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";

const projects = [
    {
        title: "Schrijvershoek - Zuidbroek",
        description:
            "Een website gemaakt voor de Schrijvershoek (een buurtvereniging in Zuidbroek). Samen gemaakt met 3 andere klasgenoten.",
        github: "https://github.com",
        icons: [
            <SiHtml5 className="hover:text-[#E34F26] transition-colors" title="HTML5" />,
            <SiTailwindcss className="hover:text-[#1572B6] transition-colors" title="TailwindCSS" />,
            <SiJavascript className="hover:text-[#F7DF1E] transition-colors" title="JavaScript" />,
        ],
    },
    {
        title: "React Portfolio - Luc Buigel ©",
        description: "Portfolio, geschreven in react.",
        github: "https://github.com",
        icons: [
            <SiReact className="hover:text-[#61DAFB] transition-colors" title="React" />,
            <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" title="TailwindCSS" />,
            <SiGit className="hover:text-[#F05032] transition-colors" title="Git" />,
            <TbBrandFramerMotion className="hover:text-[#FF0055] transition-colors" title="Framer-motion" />,
        ],
    },
    {
        title: "Intellij Tabout.",
        description: "Tabout extension voor IntelliJ IDEA, met ai gemaakt.",
        github: "https://github.com",
        icons: [<SiKotlin className="hover:text-[#7F52FF] transition-colors" title="Kotlin" />],
    },
    {
        title: "Web-Rookie Eindproject.",
        description: "Eindopdracht voor Web-Rookie.",
        github: "https://github.com/LucBuigel15/Web-rookie-eindproject.com",
        icons: [
            <SiBootstrap className="hover:text-[#7952B3] transition-colors" title="Bootstrap" />,
            <SiHtml5 className="hover:text-[#e34f26] transition-colors" title="HTML5" />,
            <IoLogoCss3 className="hover:text-[#1572b6] transition-colors" title="CSS3" />,
            <SiJavascript className="hover:text-[#f7df1e] transition-colors" title="JavaScript" />,
        ],
    },
];

function Projects() {
    return (
        <section id="projects" className="scroll-mt-32 py-24 max-w-5xl mx-auto min-h-screen px-4">
            <header className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-zinc-800 dark:text-white mb-6">Projecten</h2>
                    <div className="h-1.5 w-20 bg-zinc-800 dark:bg-white mx-auto rounded-full" />
                </motion.div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-zinc-200 dark:border-white/20 h-80 rounded-2xl p-6 flex flex-col group hover:border-zinc-400 dark:hover:border-white/40 transition-all duration-300"
                    >
                        <header className="text-xl font-bold dark:text-white text-zinc-950">{project.title}</header>
                        <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-px mt-2"></div>

                        <p className="dark:text-zinc-400 text-zinc-600 mt-4 mb-4 grow text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex gap-3 mb-6 text-2xl text-zinc-400">
                            {project.icons.map((icon, i) => (
                                <span key={i}>{icon}</span>
                            ))}
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.github}
                            className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 py-3 rounded-xl font-bold w-full transition-colors"
                        >
                            Bekijk op GitHub <Github size={18} />
                        </motion.a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
