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
        { name: "HTML", icon: <SiHtml5 />, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        {
            name: "CSS",
            icon: <IoLogoCss3 />,
            color: "#1572B6",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            name: "JS",
            icon: <SiJavascript />,
            color: "#F7DF1E",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "TS", icon: <SiTypescript />, color: "#3178C6", url: "https://www.typescriptlang.org/" },
        { name: "React", icon: <SiReact />, color: "#61DAFB", url: "https://react.dev/" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", url: "https://tailwindcss.com/" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", url: "https://getbootstrap.com/" },
        { name: "PHP", icon: <SiPhp />, color: "#777BB4", url: "https://www.php.net/" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1", url: "https://www.mysql.com/" },
        { name: "Git", icon: <SiGit />, color: "#F05032", url: "https://git-scm.com/" },
    ];

    return (
        <section id="skills" className="min-h-screen py-32 px-4 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-[10vw] font-bold tracking-tight text-zinc-800 dark:text-white mb-6">Skills</h2>
                    <div className="h-1.5 w-24 bg-zinc-800 dark:bg-white mx-auto rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
