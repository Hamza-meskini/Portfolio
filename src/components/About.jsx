import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, FolderGit2 } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { icon: Code2, label: "Years Coding", value: "3+" },
        { icon: Briefcase, label: "Major Internships", value: "2" },
        { icon: FolderGit2, label: "Complex Projects", value: "5+" },
    ];

    return (
        <section id="about" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    About <span className="gradient-text">Me</span>
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-8 md:p-12 mb-12"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                        I am a <span className="text-neon-purple font-semibold">Mathematical and Computer Science Engineer</span> at{' '}
                        <span className="text-neon-purple font-semibold">FST Mohammedia</span>,
                        passionate about bridging the gap between mathematical modeling and real-world AI solutions.
                    </p>
                </motion.div>

                {/* Mathematical Foundations Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass-card p-8 mb-12 border-l-4 border-neon-blue"
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-neon-blue/10">
                            <span className="text-neon-blue text-xl font-bold">Σ</span>
                        </div>
                        Mathematical <span className="gradient-text">Foundations</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <p className="text-gray-300">
                                My background in pure mathematics provides the theoretical depth required to understand, build, and optimize AI architectures from first principles.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Linear Algebra", "Multivariate Calculus", "Statistics", "Optimization Theory"].map((item) => (
                                    <span key={item} className="px-3 py-1 text-sm rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-dark-surface/30 p-4 rounded-xl border border-white/5">
                            <p className="text-sm text-gray-400 italic">
                                "This deep mathematical intuition allows me to go beyond just using libraries—I focus on optimization, stability, and the underlying mechanics of neural networks."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="glass-card p-6 text-center hover-float group cursor-pointer"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-gradient-neon/10 group-hover:bg-gradient-neon/20 transition-all">
                                    <stat.icon className="w-8 h-8 text-neon-purple" />
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
