import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectsCatalog from '../components/projects/ProjectsCatalog';
import Footer from '../components/Footer';
import usePageMetadata from '../hooks/usePageMetadata';

const ProjectsPage = () => {
    usePageMetadata('Proyectos y demostraciones | Luis Hueda', 'Catálogo de proyectos, demostraciones y soluciones web desarrolladas por Luis Hueda.');

    return <main className="min-h-screen pt-16 lg:pt-20"><section className="px-5 py-14 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Link to="/" className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><ArrowLeft size={17} aria-hidden="true" />Volver al inicio</Link><div className="mt-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Catálogo completo</p><h1 className="text-4xl font-bold text-white sm:text-5xl">Proyectos y soluciones desarrolladas</h1><p className="mt-5 text-lg leading-relaxed text-slate-300">Explora trabajos y demostraciones. Cada proyecto puede servir como punto de partida para una solución adaptada a las necesidades de tu negocio.</p></div><div className="mt-14"><ProjectsCatalog /></div></div></section><Footer /></main>;
};

export default ProjectsPage;
