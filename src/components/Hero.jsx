import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "Mathematical & Computer Science Engineer | Data Science & AI Specialist.";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Neural Network Background */}
            <div className="neural-bg"></div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle-dot"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="section-container">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Text Content - Now Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 z-10 w-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                Hi, I'm{' '}
                                <span className="gradient-text">Hamza Meskini</span>
                                <span className="text-neon-purple">.</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="h-20 md:h-16"
                        >
                            <p className="text-xl md:text-2xl text-gray-300 font-medium">
                                {typedText}
                                <span className="inline-block w-0.5 h-6 bg-neon-purple ml-1 animate-blink"></span>
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            Passionate about bridging the gap between mathematical modeling and real-world AI solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap justify-center gap-6 pt-4"
                        >
                            <Link to="projects" smooth={true} duration={500}>
                                <button className="btn-neon flex items-center gap-2">
                                    View Projects
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
