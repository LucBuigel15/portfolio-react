import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Download } from "lucide-react";

function About() {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="about" className="min-h-screen py-24 px-4 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-800 dark:text-white mb-4">
                        Wie ben ik?
                    </h2>
                    <div className="h-1 w-20 bg-zinc-800 dark:bg-white mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="md:col-span-2"
                    >
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-sm h-full">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-zinc-800 dark:text-white">
                                <Terminal size={20} className="text-zinc-500" />
                                <span className="dark:text-zinc-400 text-sm font-mono">luc@dev</span>
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Ik ben Luc Buigel, 16 jaar oud en ik woon in Groningen. Ik was vroeger ook al
                                gefascineerd over alles wat eigenlijk licht gaf, of geluid maakte. Dus toen ik erachter
                                kwam dat de opleiding van Bit-Academy bestond waarin ik zelf kon leren over het maken
                                van websites ben ik vrijwel meteen gestopt met de HAVO en naar de Bit-Academy gegaan.
                            </p>
                            <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-px my-4"></div>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Verder zijn er ook nog veel andere dingen dan programmeren die ik leuk vind zoals,
                                gamen, basketballen, en tijd spenderen met mijn vriendin, vrienden en familie.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="md:col-span-1"
                    >
                        <div className="bg-zinc-900 dark:bg-zinc-100 p-8 rounded-3xl text-white dark:text-zinc-900 h-full flex flex-col justify-between border border-zinc-800 dark:border-zinc-200 shadow-xl">
                            <div>
                                <Cpu size={32} className="mb-4 opacity-80" />
                                <h3 className="text-2xl font-bold mb-4">Mijn educatie.</h3>
                                <ul className="space-y-3 opacity-90 text-sm">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        Basisschool - OBS Drieborg.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        HAVO Leerjaar 1 Tot 4
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        Bit-Academy Noorderpoort
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <div className="bg-zinc-900 dark:bg-zinc-100 p-8 rounded-3xl text-white dark:text-zinc-900 flex flex-col md:flex-row md:items-center justify-between border border-zinc-800 dark:border-zinc-200 shadow-xl gap-6">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl font-bold mb-2 italic font-serif">Curriculum Vitae</h3>
                                <p className="text-zinc-400 dark:text-zinc-600">
                                    Verder ben ik ook van plan binnenkort op stage te gaan, klik op de knop om mijn cv
                                    te downloaden!
                                </p>
                            </div>
                            <motion.a
                                href="/cv-Luc-Buigel.pdf"
                                download="CV_Luc_Buigel.pdf"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl font-bold shadow-lg transition-colors text-center whitespace-nowrap"
                            >
                                Download mijn CV <Download className="m-1" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
