import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { handleScroll } from "../utils/handleScroll";

function Contact() {
    const madeIn = [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "#E91E63" },
        { name: "CSS3", icon: <IoLogoCss3 />, color: "#1572b6" },
    ];

    return (
        <section id="contact" className="relative overflow-hidden">
            <div className="min-h-screen bg-zinc-950 dark:bg-zinc-50 flex flex-col justify-center items-center px-4">
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-bold tracking-tighter leading-none select-none text-zinc-50 dark:text-zinc-950 text-[15vw] md:text-[20vw] lg:text-[25vw]"
                >
                    Contact.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-10 flex flex-col items-center gap-6"
                >
                    <p className="text-zinc-400 dark:text-zinc-600 text-lg md:text-xl max-w-md text-center">
                        Wil je wat vragen ? Stuur mij een bericht op mijn E-Mail:
                    </p>

                    <motion.a
                        href="mailto:lmdbuigel@st.noorderportal.nl"
                        className="group relative text-2xl md:text-4xl font-medium text-white dark:text-zinc-900 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        lmdbuigel@st.noorderportal.nl
                        <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white dark:bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                </motion.div>

                <div className="absolute bottom-10 left-0 px-10 w-full text-[10px] md:text-xs uppercase tracking-[0.2em] dark:text-zinc-800 text-zinc-200 flex justify-between items-center">
                    <div className="left-footer opacity-60">
                        <div>Gemaakt door Luc Buigel in Groningen, NL — &copy; {new Date().getFullYear()}</div>
                        <div className="flex items-center gap-3 mt-1">
                            Gemaakt in
                            {madeIn.map((lang, index) => (
                                <span key={index} className="text-xl">
                                    {lang.icon}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="right-footer flex gap-6 items-center">
                        <motion.a
                            href="https://github.com/lucbuigel15"
                            target="_blank"
                            className="opacity-60 hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <Github />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/luc-buigel-5379903b9/"
                            target="_blank"
                            className="opacity-60 hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <Linkedin />
                        </motion.a>

                        <motion.a
                            href="#hero"
                            onClick={(e) => handleScroll(e, "#hero")}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.8 }}
                            className="bg-white text-zinc-950 p-2 rounded-full dark:bg-zinc-950 dark:text-zinc-50 shadow-lg"
                        >
                            <ArrowUp size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
