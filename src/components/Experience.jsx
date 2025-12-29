import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [expandedIndex, setExpandedIndex] = useState(null);

    const experiences = [
        {
            role: "Software Development & Data Automation Intern",
            company: "Capgemini",
            location: "Casablanca",
            project: "IDelivery Application",
            period: "July - Sept 2025",
            shortDescription: [
                "Migrated legacy VBA to PyQt5",
                "Centralized data via SharePoint",
                "Reduced processing errors",
                "Automated KPI reporting"
            ],
            fullDescription: [
                {
                    title: "Modernization",
                    detail: "Migrated legacy VBA automation to a modern PyQt5 desktop app, significantly improving UX."
                },
                {
                    title: "Data Centralization",
                    detail: "Implemented logic to synchronize Excel files via SharePoint/OneDrive, centralizing interdepartmental data access."
                },
                {
                    title: "Error Reduction",
                    detail: "Significantly reduced manual data processing errors through the implementation of a strict data validation layer."
                },
                {
                    title: "Reporting",
                    detail: "Automated dynamic KPI generation (Python, Pandas, OpenPyXL) for real-time reporting on batches and deliverables."
                }
            ],
            color: "from-neon-blue to-neon-purple"
        },
        {
            role: "Data Science/AI Intern (PFA)",
            company: "NextMindz",
            location: "Startup",
            project: "Brand Sentiment Analysis Platform",
            period: "Apr - June 2025",
            shortDescription: [
                "Built Brand Sentiment Analysis Platform",
                "Used GenAI (Gemini), FastAPI, Supabase",
                "Implemented Next.js frontend",
                "Scraped data from X/Reddit"
            ],
            fullDescription: [
                {
                    title: "Full-Stack AI",
                    detail: "Developed a platform to analyze brand perception using data scraped from X (Twitter), Reddit, and Google News."
                },
                {
                    title: "GenAI Integration",
                    detail: "Utilized Gemini AI for advanced emotion analysis and context extraction on unstructured text."
                },
                {
                    title: "Architecture",
                    detail: "Built backend with Python, FastAPI, and Supabase (PostgreSQL) with caching for speed."
                },
                {
                    title: "Visualization",
                    detail: "Deployed on Railway; designed Next.js dashboards and automated PDF reports with actionable insights."
                }
            ],
            color: "from-neon-purple to-neon-pink"
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Work <span className="gradient-text">Experience</span>
                </h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-pink"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue animate-pulse-glow z-10"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                    }`}>
                                    <div
                                        className="glass-card p-6 hover-float group cursor-pointer"
                                        onClick={() => toggleExpand(index)}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-10`}>
                                                <Briefcase className="w-6 h-6 text-neon-purple" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-purple transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-neon-blue font-semibold">
                                                    {exp.company} {exp.location && `— ${exp.location}`}
                                                </p>
                                                {exp.project && (
                                                    <p className="text-gray-400 text-sm mt-1">
                                                        Project: {exp.project}
                                                    </p>
                                                )}
                                            </div>
                                            {/* Expand/Collapse Icon */}
                                            <div className="text-neon-purple">
                                                {expandedIndex === index ? (
                                                    <ChevronUp className="w-5 h-5" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Period */}
                                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>

                                        {/* Short Description (Always Visible) */}
                                        {expandedIndex !== index && (
                                            <ul className="space-y-2">
                                                {exp.shortDescription.map((item, i) => (
                                                    <li key={i} className="text-gray-300 flex items-start gap-2">
                                                        <span className="text-neon-purple mt-1">▹</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Expanded Details */}
                                        <AnimatePresence>
                                            {expandedIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="space-y-4 overflow-hidden"
                                                >
                                                    {exp.fullDescription.map((item, i) => (
                                                        <div key={i} className="border-l-2 border-neon-purple/30 pl-4">
                                                            <h4 className="text-neon-purple font-semibold mb-1">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-gray-300 text-sm">
                                                                {item.detail}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Click to expand hint */}
                                        <div className="mt-4 text-center text-sm text-gray-500">
                                            {expandedIndex === index ? 'Click to collapse' : 'Click to see more details'}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
