import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const certifications = [
        {
            title: "OCI Generative AI Professional",
            issuer: "Oracle",
            logo: "https://placehold.co/100x100/transparent/f80000?text=Oracle",
            color: "from-red-500 to-orange-500",
            url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=87A47862F0931CFA7D4FB741C64EB29FDBEEA81D002FCB634D891D8C1DD96C75"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            logo: "https://placehold.co/100x100/transparent/FF9900?text=AWS",
            color: "from-orange-400 to-yellow-500",
            url: null
        },
        {
            title: "Agile / Scrum Methodology",
            issuer: "Certified Professional",
            logo: "https://placehold.co/100x100/transparent/00C7B7?text=Agile",
            color: "from-teal-400 to-cyan-500",
            url: null
        }
    ];

    return (
        <section id="certifications" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="gradient-text">Certifications</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => {
                        const CardContent = (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card p-6 hover-float group cursor-pointer relative overflow-hidden"
                            >
                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    {/* Badge Icon */}
                                    <div className="flex justify-center mb-4">
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                                            <img
                                                src={cert.logo}
                                                alt={cert.issuer}
                                                className="relative w-20 h-20 object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Certification Title */}
                                    <h3 className="text-xl font-bold text-center mb-2 group-hover:text-neon-purple transition-colors">
                                        {cert.title}
                                    </h3>

                                    {/* Issuer */}
                                    <p className="text-gray-400 text-center mb-4">
                                        {cert.issuer}
                                    </p>

                                    {/* Verified Badge */}
                                    <div className="flex items-center justify-center gap-2 text-neon-blue">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="text-sm font-semibold">
                                            {cert.url ? 'View Badge' : 'Verified'}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );

                        return cert.url ? (
                            <a
                                key={index}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                {CardContent}
                            </a>
                        ) : (
                            CardContent
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
