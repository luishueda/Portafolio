import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const HeroProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative glass rounded-2xl overflow-hidden mb-16 group"
        >
            {/* Badge Proyecto Principal */}
            <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
                    ⭐ Proyecto Principal
                </span>
            </div>

            <div className="grid md:grid-cols-5 gap-0">
                {/* Imagen - 60% */}
                <div className="relative md:col-span-3 h-64 md:h-96 overflow-hidden bg-dark-light">
                    <motion.img
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)',
                        }}
                        transition={{ duration: 0.6 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent" />
                </div>

                {/* Contenido - 40% */}
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.split(',').slice(0, 4).map((tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 cursor-default transition-colors"
                            >
                                {tech.trim()}
                            </motion.span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4">
                        {project.link_live && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link_live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-accent text-dark font-semibold rounded-xl hover:bg-accent-light transition-colors glow-accent"
                            >
                                Ver proyecto <ArrowUpRight size={18} />
                            </motion.a>
                        )}

                        {project.link_github && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link_github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 transition-all backdrop-blur-sm"
                            >
                                <Github size={20} />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>

            {/* Glow effect on hover */}
            <motion.div
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.1), transparent 80%)',
                }}
            />
        </motion.div>
    );
};

export default HeroProjectCard;