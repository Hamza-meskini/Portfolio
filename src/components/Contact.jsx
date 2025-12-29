import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/hamza-meskini/',
            color: 'hover:text-blue-400'
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/Hamza-meskini',
            color: 'hover:text-gray-300'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:meskinihamza31@gmail.com',
            color: 'hover:text-neon-purple'
        }
    ];

    return (
        <section id="contact" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Get In <span className="gradient-text">Touch</span>
                </h2>

                <div className="max-w-2xl mx-auto">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8 mb-8"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-center">Let's Connect</h3>
                        <p className="text-gray-400 mb-6 text-center">
                            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                        </p>

                        <div className="flex justify-center">
                            <a
                                href="mailto:meskinihamza31@gmail.com"
                                className="flex items-center gap-3 text-lg text-gray-300 hover:text-neon-purple transition-colors"
                            >
                                <Mail className="w-6 h-6" />
                                <span>meskinihamza31@gmail.com</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className={`glass-card p-6 ${social.color} transition-all hover-float`}
                                aria-label={social.name}
                            >
                                <social.icon className="w-8 h-8" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400"
                >
                    <p>Built by <span className="text-neon-purple font-semibold">Hamza Meskini</span> © 2025</p>
                </motion.footer>
            </motion.div>
        </section>
    );
};

export default Contact;
