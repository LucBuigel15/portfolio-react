import { ArrowDown } from "lucide-react";

function Hero() {
    const skills = ["React", "Tailwind", "TypeScript", "Javascript", "Bootstrap", "HTML", "CSS"];
    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center -mt-20">
            <div className="w-40 h-40 rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700">
                <img
                    src="https://avatars.githubusercontent.com/u/248863441?v=4"
                    alt="Luc Buigel"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Frontend Developer</p>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-800 dark:text-white">
                    Luc Buigel
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto text-sm leading-relaxed">
                    Ik ben student Front-End Developer aan de Bit-Academy in Groningen.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-3">
                <a
                    href="#projects"
                    className="text-sm px-5 py-2.5 rounded-full bg-zinc-800 dark:bg-white text-white dark:text-zinc-900 hover:opacity-80 transition-opacity"
                >
                    Mijn Projecten
                </a>
                <a
                    href="#contact"
                    className="text-sm px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                    Stuur een berichtje!
                </a>
            </div>
            <div className="text-zinc-400 dark:text-zinc-600">
                <a href="#skills" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition duration-200">
                    <ArrowDown className="animate-bounce" size={18} />
                </a>
            </div>
        </section>
    );
}

export default Hero;
