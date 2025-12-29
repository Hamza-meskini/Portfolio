import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Brain,
    Server,
    Container,
    Cloud,
    GitBranch,
    BarChart3
} from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'Python', icon: Code2, color: 'text-blue-400' },
        { name: 'R', icon: BarChart3, color: 'text-blue-500' },
        { name: 'Java', icon: Code2, color: 'text-orange-500' },
        { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: Code2, color: 'text-blue-600' },
        { name: 'SQL', icon: Database, color: 'text-cyan-400' },
        { name: 'Pandas', icon: Database, color: 'text-purple-400' },
        { name: 'NumPy', icon: Database, color: 'text-blue-300' },
        { name: 'Matplotlib', icon: BarChart3, color: 'text-green-400' },
        { name: 'Seaborn', icon: BarChart3, color: 'text-teal-400' },
        { name: 'TensorFlow', icon: Brain, color: 'text-orange-400' },
        { name: 'PyTorch', icon: Brain, color: 'text-red-500' },
        { name: 'LangChain', icon: Brain, color: 'text-green-400' },
        { name: 'LangSmith', icon: Brain, color: 'text-green-500' },
        { name: 'CrewAI', icon: Brain, color: 'text-purple-500' },
        { name: 'Scikit-learn', icon: Brain, color: 'text-orange-300' },
        { name: 'NLTK', icon: Brain, color: 'text-pink-500' },
        { name: 'FastAPI', icon: Server, color: 'text-teal-400' },
        { name: 'Flask', icon: Server, color: 'text-gray-400' },
        { name: 'Docker', icon: Container, color: 'text-blue-400' },
        { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
        { name: 'DVC', icon: GitBranch, color: 'text-purple-400' },
        { name: 'MLflow', icon: BarChart3, color: 'text-blue-400' },
        { name: 'PostgreSQL', icon: Database, color: 'text-blue-500' },
        { name: 'Supabase', icon: Database, color: 'text-green-500' },
        { name: 'Pinecone', icon: Database, color: 'text-purple-400' },
        { name: 'Power BI', icon: BarChart3, color: 'text-yellow-400' },
        { name: 'n8n', icon: Server, color: 'text-pink-400' },
        { name: 'UiPath', icon: Server, color: 'text-orange-500' },
        { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    ];

    // Duplicate skills for seamless loop
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section id="skills" className="py-20 overflow-hidden">
            <div className="section-container">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Tech <span className="gradient-text">Stack</span>
                </h2>
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10"></div>

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 py-8"
                        animate={{
                            x: [0, -50 * skills.length * 8], // Adjust based on skill count
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 50,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="glass-card px-8 py-6 flex items-center gap-4 min-w-max hover-float group cursor-pointer"
                            >
                                <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                                <span className="text-xl font-semibold text-white whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
