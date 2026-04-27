import { motion } from "framer-motion";
import { Download } from "lucide-react";

function About() {
    return (
        <section id="about" className="py-24 px-5 md:px-16 lg:px-24 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Over mij</p>
                <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tighter text-slate-800 dark:text-white leading-[0.9]">
                    Wie ben ik
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16 max-w-2xl"
            >
                <p className="text-xl md:text-2xl text-slate-800 dark:text-white leading-relaxed">
                    Ik ben Luc Buigel, 16 jaar oud en woon in Groningen.
                </p>
                <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed">
                    Vroeger was ik gefascineerd door alles wat licht gaf of geluid maakte. Toen ik ontdekte dat ik op de
                    Bit-Academy kon leren hoe ik zelf websites kon maken, ben ik gestopt met de HAVO en fulltime gaan
                    programmeren.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-16"
            >
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Opleiding</h3>
                <div className="space-y-3">
                    <div className="flex gap-4">
                        <span className="text-sm text-slate-400 w-32">2025 - nu</span>
                        <span className="text-slate-800 dark:text-white">Bit-Academy</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-sm text-slate-400 w-32">2021 - 2025</span>
                        <span className="text-slate-800 dark:text-white">HAVO</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-sm text-slate-400 w-32">2012 - 2023</span>
                        <span className="text-slate-800 dark:text-white">OBS Drieborg</span>
                    </div>
                </div>
            </motion.div>

            <motion.a
                href="/cv-Luc-Buigel.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-12 text-base font-medium text-slate-800 dark:text-white border-b-2 border-slate-800 dark:border-white pb-1"
            >
                Download mijn CV <Download size={18} />
            </motion.a>
        </section>
    );
}

export default About;
