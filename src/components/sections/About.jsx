import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frondendSkills = [
        "React", 
        "TailwindCSS",
        "Vite"
    ]

    const backendSkills = [
        "Node.js", 
        "Python",
        "PHP",
        "C#"
    ]

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >

        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                <p className="text-gray-300 mb-6">
                Hi, I’m Kevin, an 20-year-old Software Developer student from Dordrecht. Currently, 
                I’m studying Software Development at ROC Da Vinci College, driven by my passion for coding. 
                After completing my MBO, I plan to pursue a degree in Computer Science at Hogeschool Rotterdam.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frondendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> MBO 4 Software Developer </strong> ROC Da Vinci College (2022 - <strong>Expected 2026</strong>)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Software Developer at Depot Software (2024 - 2025) </h4>
                            <p>Built a solar panel and home battery simulator, designing dashboards, leading Agile sprints, and integrating APIs with MySQL for data insights.</p>
                        </div>
                    </div>

                    <div className="space-y-4 text-gray-300 mt-4">
                        <div>
                            <h4 className="font-semibold"> Software Development Intern at GSM Parts Center (2023 - 2024) </h4>
                            <p>Designed and developed 5+ client webshops, tailoring plugins and optimizing UX/UI through client collaboration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
        </section>
    );
};