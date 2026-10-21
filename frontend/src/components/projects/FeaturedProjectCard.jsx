import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, ImageOff } from 'lucide-react';
import { getContactPath, getSolutionPath } from '../../utils/projectRoutes';

const FeaturedProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 transition-all duration-300 hover:border-accent/50"
            style={{
                boxShadow: isHovered ? '0 0 40px rgba(16, 185, 129, 0.15)' : 'none',
            }}
        >
            {/* Badge Featured */}
            <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
                    ✨ Destacado
                </span>
            </div>

            {/* Imagen */}
            <div className="relative h-56 overflow-hidden bg-dark-light">
                {project.image ? <motion.img
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                /> : <div role="img" aria-label={`Sin imagen disponible para ${project.title}`} className="flex h-full w-full items-center justify-center bg-slate-900 px-6 text-center text-sm text-slate-400"><ImageOff size={26} className="mr-3 text-emerald-400" aria-hidden="true" />Imagen no disponible</div>}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-60" />
            </div>

            {/* Contenido */}
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.split(',').map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-accent/30 transition-all cursor-default"
                        >
                            {tech.trim()}
                        </span>
                    ))}
                </div>

                {/* Links con Progressive Disclosure */}
                <div className="flex flex-wrap items-center gap-3">
                    <Link to={getSolutionPath(project)} className="inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-emerald-200 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Ver solución <ArrowRight size={15} aria-hidden="true" /></Link>
                    {project.link_live && (
                        <motion.a
                            href={project.link_live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                        >
                            Probar demo <ExternalLink size={16} />
                        </motion.a>
                    )}

                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {project.link_github && (
                            <a
                                href={project.link_github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors ml-2"
                            >
                                <Github size={16} />
                            </a>
                        )}
                    </motion.div>
                    <Link to={getContactPath(project)} className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                        Solicitar sistema similar <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedProjectCard;
