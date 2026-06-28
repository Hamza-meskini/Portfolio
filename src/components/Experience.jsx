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
            role: "AI Engineer Intern (LLM Systems & Automation)",
            company: "Stellantis",
            location: "Global Test & Validation Division",
            project: "AI-Powered Test Design & Validation Platform",
            period: "Feb. 2026 - Aug. 2026",
            shortDescription: [
                "Deployed cloud-native AI framework on Databricks Apps, reducing test design cycles by 90%",
                "Built hybrid resolution engine validating requirements against 12.9k+ DCI signals to eliminate hallucinations",
                "Designed interactive Traceability Map dependency graphs and React/TS telemetry dashboard",
                "Compiled production-ready vTESTstudio bundles including CAPL modules and test trees"
            ],
            fullDescription: [
                {
                    title: "Cloud-Native AI Framework",
                    detail: "Deployed an end-to-end, cloud-native AI framework on Databricks Apps adopted by cross-border validation teams (10+ nationalities), reducing test design cycles by 90% (from days to minutes)."
                },
                {
                    title: "Requirements Ingestion",
                    detail: "Engineered core pipeline to ingest unstructured, raw text automotive testing requirements and translate them into validated, production-ready system test cases."
                },
                {
                    title: "Hybrid Resolution Engine",
                    detail: "Developed a deterministic hybrid resolution engine (Python, Pydantic) to cross-reference and validate raw text inputs against a Databricks SQL Warehouse containing 12,935 DCI signals, eliminating hallucinations via structural verification."
                },
                {
                    title: "Token Optimization",
                    detail: "Optimized context window efficiency by shifting data serialization from JSON to YAML configuration schemas, lowering LLM token consumption costs by 30%."
                },
                {
                    title: "Autonomous AI Agent & Manual Overrides",
                    detail: "Designed a dual-mode interactive refinement interface allowing engineers to either perform direct manual overrides or utilize an Autonomous AI Agent to perform surgical updates on test designs and merge test cases."
                },
                {
                    title: "Jinja2 Compilation & CAPL",
                    detail: "Built a native Jinja2 compilation engine that automatically packages the verified logic into production-ready vTESTstudio bundles, compiling CAPL modules (.can) and combinatorial test trees via Cartesian product expansion."
                },
                {
                    title: "Traceability Map",
                    detail: "Architected an interactive Traceability Map leveraging NetworkX to map and render complex dependency graphs directly in the UI, visualizing the programmatic links between requirements, consumer/producer signals, and internal variables."
                },
                {
                    title: "Telemetry Dashboard",
                    detail: "Constructed an interactive React/TypeScript telemetry dashboard displaying real-time operational KPIs, active usage metrics, and throughput analytics to track platform adoption and ROI for global executive review."
                }
            ],
            color: "from-neon-cyan to-neon-blue"
        },
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
