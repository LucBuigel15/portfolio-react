import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp } from "lucide-react";

function Contact() {
    return (
        <section id="contact" className="py-24 px-5 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Contact</p>
                <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tighter text-slate-800 dark:text-white leading-[0.9]">Neem contact op</h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-12">
                <p className="text-slate-500 dark:text-slate-400 max-w-lg mb-6">Heb je een vraag of wil je samenwerken? Stuur me gerust een berichtje!</p>
                <motion.a href="mailto:lmdbuigel@st.noorderportal.nl" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="text-xl md:text-2xl font-medium text-slate-800 dark:text-white border-b-2 border-slate-800 dark:border-white pb-1">
                    lmdbuigel@st.noorderportal.nl
                </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex gap-6 mt-10">
                <motion.a href="https://github.com/lucbuigel15" target="_blank" whileHover={{ scale: 1.1 }} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 transition-colors"><Github size={22} /></motion.a>
                <motion.a href="https://www.linkedin.com/in/luc-buigel-5379903b9/" target="_blank" whileHover={{ scale: 1.1 }} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 transition-colors"><Linkedin size={22} /></motion.a>
                <motion.a href="#hero" whileHover={{ scale: 1.1, y: -3 }} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 transition-colors"><ArrowUp size={22} /></motion.a>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-16 text-sm text-slate-400 dark:text-slate-500">
                © {new Date().getFullYear()} Luc Buigel — Groningen, NL
            </motion.p>
        </section>
    );
}

export default Contact;