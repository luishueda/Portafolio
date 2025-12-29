import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const StandardProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative bg-dark-light/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
            {/* Imagen compacta */}
            <div className="relative h-44 overflow-hidden bg-dark-light">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Contenido compacto */}
            <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-white">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tecnologías (solo 2-3) */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.split(',').slice(0, 2).map((tech, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-0.5 text-xs rounded-md bg-white/5 border border-white/10 text-gray-400"
                        >
                            {tech.trim()}
                        </span>
                    ))}
                </div>

                {/* Links minimalistas */}
                <div className="flex items-center gap-4 text-gray-400">
                    {project.link_github && (
                        <a
                            href={project.link_github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.link_live && (
                        <a
                            href={project.link_live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium hover:text-accent transition-colors"
                        >
                            Demo <ExternalLink size={14} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default StandardProjectCard;