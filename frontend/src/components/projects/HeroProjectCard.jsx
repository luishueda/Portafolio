import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, ArrowUpRight, ImageOff } from 'lucide-react';
import { getContactPath, getSolutionPath } from '../../utils/projectRoutes';

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
            className="relative rounded-2xl overflow-hidden mb-16 group border border-white/10 bg-slate-950/50"
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
                    {project.image ? <motion.img
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)',
                        }}
                        transition={{ duration: 0.6 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    /> : <div role="img" aria-label={`Sin imagen disponible para ${project.title}`} className="flex h-full w-full items-center justify-center bg-slate-900 px-6 text-center text-sm text-slate-400"><ImageOff size={28} className="mr-3 text-emerald-400" aria-hidden="true" />Imagen no disponible</div>}
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

                    {/* Tecnologías - CORREGIDO: Sin límite (.slice eliminado) */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.split(',').map((tech, index) => (
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
                    <div className="flex flex-wrap items-center gap-3">
                        <Link to={getSolutionPath(project)} className="flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Ver solución <ArrowRight size={16} aria-hidden="true" /></Link>
                        {project.link_live && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link_live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-dark transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            >
                                Probar demo <ArrowUpRight size={18} />
                            </motion.a>
                        )}

                        <Link to={getContactPath(project)} className="flex items-center gap-2 rounded-xl border border-emerald-400/40 px-4 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                            Solicitar sistema similar <ArrowRight size={16} aria-hidden="true" />
                        </Link>

                        {project.link_github && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link_github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver código de ${project.title} en GitHub`}
                                className="rounded-xl border border-white/20 p-3 text-gray-400 transition-all hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
