import { useState } from "react";

const rowConfig = [
    { reverse: false, duration: "7s" },
    { reverse: true, duration: "24s" },
    { reverse: false, duration: "14s" },
    { reverse: true, duration: "30s" },
    { reverse: false, duration: "20s" },
    { reverse: true, duration: "10s" },
    { reverse: false, duration: "26s" },
];

function Skills() {
    const skills = [
        { name: "HTML", color: "#E34F26" },
        { name: "CSS", color: "#1572B6" },
        { name: "Javascript", color: "#F7DF1E" },
        { name: "PHP", color: "#777BB4" },
        { name: "MySQL", color: "#4479A1" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "TailwindCSS", color: "#06B6D4" },
        { name: "Bootstrap", color: "#7952B3" },
        { name: "React", color: "#61DAFB" },
        { name: "Git", color: "#F05032" },
    ];

    return (
        <>
            {rowConfig.map((config, i) => (
                <MarqueeRow key={i} skills={skills} {...config} />
            ))}
        </>
    );
}

function MarqueeRow({ skills, reverse, duration }) {
    const animation = reverse ? "marquee-reverse" : "marquee";

    return (
        <div className="mb-3 flex items-center overflow-hidden">
            <div
                className="flex whitespace-nowrap gap-4"
                style={{
                    animation: `${animation} ${duration} linear infinite`,
                }}
            >
                {[...skills, ...skills].map((tag, i) => (
                    <SkillBadge key={i} name={tag.name} color={tag.color} />
                ))}
            </div>
        </div>
    );
}

function SkillBadge({ name, color }) {
    const [hovered, setHovered] = useState(false);

    return (
        <span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                borderColor: hovered ? color : undefined,
                color: hovered ? color : undefined,
                backgroundColor: hovered ? `${color}18` : undefined,
            }}
            className="text-4xl px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 shrink-0 transition-colors duration-300 cursor-default"
        >
            {name}
        </span>
    );
}

export default Skills;
