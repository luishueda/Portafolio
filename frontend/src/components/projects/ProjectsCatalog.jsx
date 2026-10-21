import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroProjectCard from './HeroProjectCard';
import FeaturedProjectCard from './FeaturedProjectCard';
import StandardProjectCard from './StandardProjectCard';
import useProjects from '../../hooks/useProjects';

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const ProjectsCatalog = ({ preview = false }) => {
    const { projects, status, loadProjects } = useProjects();

    useEffect(() => {
        if (status === 'idle') loadProjects();
    }, [loadProjects, status]);

    if (status === 'loading' || status === 'idle') {
        return <div className="py-20 text-center"><div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-accent/30 border-t-accent" /><p className="mt-4 text-gray-400">Cargando proyectos y demostraciones...</p></div>;
    }

    if (status === 'error') {
        return <div className="rounded-2xl border border-rose-400/20 bg-rose-400/5 px-6 py-14 text-center"><p className="text-lg font-medium text-white">No se pudieron cargar los proyectos.</p><p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">La conexión con el catálogo no está disponible en este momento. Puedes intentarlo nuevamente.</p><button type="button" onClick={loadProjects} className="mt-6 rounded-lg border border-emerald-400/40 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Reintentar carga</button></div>;
    }

    if (projects.length === 0) {
        return <div className="py-20 text-center"><p className="text-lg font-medium text-white">Aún no hay proyectos registrados.</p><p className="mt-2 text-gray-400">Pronto encontrarás demostraciones y soluciones desarrolladas aquí.</p></div>;
    }

    const hero = projects[0];
    const featured = projects.slice(1, 3);
    const standard = preview ? [] : projects.slice(3);

    return <>
        {hero && <HeroProjectCard project={hero} />}
        {featured.length > 0 && <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">{featured.map((project) => <motion.div key={project.id} variants={itemVariants}><FeaturedProjectCard project={project} /></motion.div>)}</motion.div>}
        {standard.length > 0 && <><div className="mb-8"><h2 className="mb-2 text-2xl font-semibold text-white md:text-3xl">Más proyectos</h2><p className="text-sm text-gray-400">Otros trabajos y demostraciones disponibles.</p></div><motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{standard.map((project) => <motion.div key={project.id} variants={itemVariants}><StandardProjectCard project={project} /></motion.div>)}</motion.div></>}
    </>;
};

export default ProjectsCatalog;
