import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, ImageOff } from 'lucide-react';
import { getContactPath, getSolutionPath } from '../../utils/projectRoutes';

const StandardProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative bg-dark-light/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-300"
        >
            {/* Imagen compacta */}
            <div className="relative h-44 overflow-hidden bg-dark-light">
                {project.image ? <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                /> : <div role="img" aria-label={`Sin imagen disponible para ${project.title}`} className="flex h-full w-full items-center justify-center bg-slate-900 px-5 text-center text-xs text-slate-400"><ImageOff size={22} className="mr-2 text-emerald-400" aria-hidden="true" />Imagen no disponible</div>}
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

                {/* Tecnologías - CORREGIDO: Sin límites y con animación */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.split(',').map((tech, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300 cursor-default transition-colors"
                        >
                            {tech.trim()}
                        </motion.span>
                    ))}
                </div>

                {/* Links minimalistas */}
                <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <Link to={getSolutionPath(project)} className="inline-flex items-center gap-1 text-xs font-semibold text-white transition hover:text-emerald-200 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">Ver solución <ArrowRight size={14} aria-hidden="true" /></Link>
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
                            Probar demo <ExternalLink size={14} />
                        </a>
                    )}
                    <Link to={getContactPath(project)} className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                        Sistema similar <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default StandardProjectCard;
