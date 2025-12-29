import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X, Workflow } from 'lucide-react';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Sentiment Platform Images (9 images) - Case sensitive fix for Vercel
    const sentimentImages = [
        '/images/Brand sentiment platform images/1 (1).png',
        '/images/Brand sentiment platform images/2 (1).PNG',
        '/images/Brand sentiment platform images/3 (1).PNG',
        '/images/Brand sentiment platform images/4 (1).PNG',
        '/images/Brand sentiment platform images/5 (1).PNG',
        '/images/Brand sentiment platform images/6 (1).PNG',
        '/images/Brand sentiment platform images/7 (1).PNG',
        '/images/Brand sentiment platform images/8 (1).PNG',
        '/images/Brand sentiment platform images/9 (1).PNG',
    ];

    const projects = [
        {
            title: "Brand Sentiment Analysis Platform",
            subtitle: "NextMindz - GenAI Integration",
            description: "Built a comprehensive sentiment analysis platform using Gemini AI, FastAPI, and Next.js. Scraped data from X/Reddit to analyze brand perception with real-time insights.",
            tags: ["GenAI", "Gemini AI", "NLP", "FastAPI", "Next.js", "Supabase"],
            images: sentimentImages,
            hasGallery: true,
            size: "large",
            isAutomation: false
        },
        {
            title: "End-to-End MLOps Pipeline",
            subtitle: "Credit Scoring",
            description: "Production-ready pipeline with automated retraining, version control with DVC, experiment tracking with MLflow, and CI/CD integration.",
            tags: ["DVC", "MLflow", "GitHub Actions", "CI/CD", "Python"],
            image: "/images/End-to-End MLOps Pipeline.png",
            hasGallery: false,
            size: "large",
            isAutomation: false
        },
        {
            title: "Medical Chatbot",
            subtitle: "RAG & AWS",
            description: "Contextual medical assistant using LangChain, Pinecone vector database, and RAG architecture. Deployed on AWS EC2 for scalable inference.",
            tags: ["LangChain", "Pinecone", "RAG", "AWS EC2", "Vector DB"],
            image: "/images/Medical Chatbot.png",
            hasGallery: false,
            size: "medium",
            isAutomation: false
        },
        {
            title: "Sales Analytics & Churn Prediction",
            subtitle: "Power BI Dashboard",
            description: "Interactive dashboard with churn prediction models, customer retention KPIs, and automated reporting using SQL and Power BI.",
            tags: ["Power BI", "SQL", "Data Viz", "Python", "Pandas"],
            image: "/images/Sales Analytics & Churn Prediction.png",
            hasGallery: false,
            size: "medium",
            isAutomation: false
        },
        {
            title: "Automated Invoice Processing",
            subtitle: "n8n & AI Workflow",
            description: "Built an autonomous pipeline that monitors email attachments, uses OCR/AI to extract structured data from invoices. Eliminated 100% of manual entry and streamlined accounting workflows.",
            tags: ["n8n", "Python", "Deep Learning", "Automation"],
            image: "/images/project_invoice.png",
            hasGallery: false,
            size: "medium",
            isAutomation: true
        },
        {
            title: "AI Content Creation Engine",
            subtitle: "Gemini API & n8n",
            description: "Designed a workflow that automatically generates researched articles and social media snippets. Reduced research and content creation time by 80%.",
            tags: ["n8n", "Gemini API", "Content AI", "Workflow"],
            image: "/images/project_content.png",
            hasGallery: false,
            size: "medium",
            isAutomation: true
        }
    ];

    const openGallery = (project, index = 0) => {
        setSelectedProject(project);
        setCurrentImageIndex(index);
    };

    const closeGallery = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject && selectedProject.hasGallery) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject && selectedProject.hasGallery) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="projects" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl ${project.size === 'large' ? 'md:col-span-1 lg:col-span-2' : 'md:col-span-1'
                                }`}
                        >
                            <div className="glass-card h-full overflow-hidden hover-float cursor-pointer">
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={project.hasGallery ? project.images[0] : project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            // Fallback to workflow placeholder for automation projects
                                            if (project.isAutomation) {
                                                e.target.src = "https://placehold.co/600x400/1e293b/ec4899?text=Workflow+Automation";
                                            } else {
                                                e.target.src = "https://placehold.co/600x400/1e293b/a855f7?text=Project";
                                            }
                                        }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60"></div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                                    {/* Gallery Badge */}
                                    {project.hasGallery && (
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neon-purple/80 text-white text-sm font-semibold">
                                            {project.images.length} Images
                                        </div>
                                    )}

                                    {/* Workflow Badge for Automation Projects */}
                                    {project.isAutomation && (
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-pink-500/80 text-white text-sm font-semibold flex items-center gap-1">
                                            <Workflow className="w-4 h-4" />
                                            Automation
                                        </div>
                                    )}

                                    {/* View Details/Gallery Button */}
                                    {!project.isAutomation && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => openGallery(project)}
                                                className="btn-neon flex items-center gap-2"
                                            >
                                                {project.hasGallery ? (
                                                    <>
                                                        <ExternalLink className="w-5 h-5" />
                                                        View Gallery
                                                    </>
                                                ) : (
                                                    <>
                                                        <ExternalLink className="w-5 h-5" />
                                                        View Image
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-neon-purple transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neon-blue font-semibold mb-3">
                                        {project.subtitle}
                                    </p>
                                    <p className="text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-sm rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Image Gallery Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={closeGallery}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeGallery}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Gallery Content */}
                    <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                        {selectedProject.hasGallery ? (
                            /* Multi-Image Gallery */
                            <>
                                {/* Main Image */}
                                <div className="relative">
                                    <img
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                    />

                                    {/* Navigation Buttons */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon-purple/80 hover:bg-neon-purple transition-colors"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-white" />
                                    </button>

                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon-purple/80 hover:bg-neon-purple transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>

                                {/* Image Counter */}
                                <div className="text-center mt-4 text-white">
                                    <p className="text-lg font-semibold">
                                        {currentImageIndex + 1} / {selectedProject.images.length}
                                    </p>
                                    <p className="text-gray-400 mt-2">{selectedProject.title}</p>
                                </div>

                                {/* Thumbnail Strip */}
                                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                    {selectedProject.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex
                                                ? 'border-neon-purple scale-110'
                                                : 'border-white/20 hover:border-white/40'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            /* Single Image Viewer */
                            <>
                                <div className="relative">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="text-center mt-4 text-white">
                                    <p className="text-xl font-semibold">{selectedProject.title}</p>
                                    <p className="text-neon-blue mt-1">{selectedProject.subtitle}</p>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Projects;
