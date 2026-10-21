import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Github, MessageCircle, UsersRound, Workflow } from 'lucide-react';
import Footer from '../components/Footer';
import useProjects from '../hooks/useProjects';
import usePageMetadata from '../hooks/usePageMetadata';
import { getContactPath, getProjectIdentifierFromSlug } from '../utils/projectRoutes';
import { getWhatsAppUrl } from '../utils/whatsapp';

const ProjectDetailPage = ({ commercial = false }) => {
    const { slug } = useParams();
    const projectIdentifier = getProjectIdentifierFromSlug(slug);
    const { projects, status, loadProjects } = useProjects();
    const project = status === 'success' && projectIdentifier !== null ? projects.find(({ id }) => String(id) === String(projectIdentifier)) : null;
    const description = project?.description?.trim() || 'Detalle de proyecto desarrollado por Luis Hueda.';

    usePageMetadata(project ? `${project.title} | Luis Hueda` : 'Proyecto | Luis Hueda', description.slice(0, 160));

    useEffect(() => {
        if (status === 'idle') loadProjects();
    }, [loadProjects, status]);

    if (status === 'idle' || status === 'loading') {
        return <PageLayout><div className="py-24 text-center"><div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-accent/30 border-t-accent" /><p className="mt-4 text-gray-400">Cargando detalles del proyecto...</p></div></PageLayout>;
    }

    if (status === 'error') {
        return <PageLayout><StateCard title="No se pudo cargar el proyecto." message="La conexión con el catálogo no está disponible en este momento." action={<button type="button" onClick={loadProjects} className="rounded-lg border border-emerald-400/40 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Reintentar carga</button>} /></PageLayout>;
    }

    if (!project) {
        return <PageLayout><StateCard title="Proyecto no encontrado." message="El enlace puede estar incompleto o el proyecto ya no está disponible en el catálogo." /></PageLayout>;
    }

    const technologies = project.technologies?.split(',').map((technology) => technology.trim()).filter(Boolean) || [];
    const caseStudy = project.caseStudy;

    return <PageLayout>
        <article className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 shadow-2xl shadow-slate-950/30 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
                    {project.image ? <img src={project.image} alt={`Vista principal de ${project.title}`} className="h-full min-h-64 w-full object-cover" /> : <div className="flex min-h-64 items-center justify-center px-6 text-center text-sm text-slate-400">No hay una imagen disponible para este proyecto.</div>}
                </div>
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{commercial ? 'Solución digital adaptable' : 'Caso de estudio'}</p>
                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">{project.title}</h1>
                    <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
                    {technologies.length > 0 && <div className="mt-8"><h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Tecnologías</h2><div className="mt-3 flex flex-wrap gap-2">{technologies.map((technology) => <span key={technology} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">{technology}</span>)}</div></div>}
                    <div className="mt-9 flex flex-wrap gap-3">
                        {project.link_live && <a href={project.link_live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Probar demo <ExternalLink size={17} aria-hidden="true" /></a>}
                        {project.link_github && <a href={project.link_github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"><Github size={17} aria-hidden="true" />Ver GitHub</a>}
                        <Link to={getContactPath(project)} className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Solicitar sistema similar <ArrowRight size={17} aria-hidden="true" /></Link>
                        {commercial && <a href={getWhatsAppUrl(`Hola Luis, me interesa una solución similar a ${project.title}. Mi negocio es...`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"><MessageCircle size={17} aria-hidden="true" />Consultar por WhatsApp</a>}
                    </div>
                    {!project.link_live && project.demo_status && <p className="mt-5 text-sm text-slate-400">{project.demo_status}</p>}
                </div>
            </div>
            {caseStudy && <section className="mt-12 border-t border-white/10 pt-10" aria-labelledby="demo-details-title">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Recorrido de la demo</p>
                    <h2 id="demo-details-title" className="mt-3 text-2xl font-bold text-white sm:text-3xl">{commercial ? 'Una base para tu propia solución' : 'Así podría funcionar en una operación real'}</h2>
                    <p className="mt-4 leading-relaxed text-slate-300">{caseStudy.purpose}</p>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <InfoCard icon={<CheckCircle2 size={20} aria-hidden="true" />} title="Módulos principales" items={caseStudy.capabilities} />
                    <InfoCard icon={<Workflow size={20} aria-hidden="true" />} title="Flujo de trabajo" items={caseStudy.workflow} numbered />
                    <InfoCard icon={<UsersRound size={20} aria-hidden="true" />} title="Perfiles de acceso" items={caseStudy.roles} />
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate-400">Los módulos y perfiles mostrados describen el alcance de esta demo local. Una versión comercial puede adaptarse a los procesos, permisos y necesidades específicas de cada negocio.</p>
            </section>}
            {commercial && <section className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-8"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">Cotización personalizada</p><h2 className="mt-3 text-2xl font-bold text-white">¿Quieres una versión para tu negocio?</h2><p className="mt-3 max-w-2xl leading-relaxed text-slate-300">Cuéntame el rubro de tu negocio, los módulos que necesitas y el plazo estimado. Prepararé una propuesta adaptada a tu operación.</p><Link to={getContactPath(project)} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Cotizar esta solución <ArrowRight size={17} aria-hidden="true" /></Link></section>}
        </article>
    </PageLayout>;
};

const PageLayout = ({ children }) => <main className="min-h-screen pt-16 lg:pt-20"><section className="px-5 py-14 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><Link to="/proyectos" className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><ArrowLeft size={17} aria-hidden="true" />Volver a proyectos</Link><div className="mt-10">{children}</div></div></section><Footer /></main>;
const StateCard = ({ title, message, action }) => <div className="rounded-2xl border border-white/10 bg-slate-950/45 px-6 py-16 text-center"><h1 className="text-2xl font-semibold text-white">{title}</h1><p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400">{message}</p>{action && <div className="mt-6">{action}</div>}</div>;
const InfoCard = ({ icon, title, items, numbered = false }) => <section className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"><div className="flex items-center gap-3 text-emerald-300">{icon}<h3 className="font-semibold text-white">{title}</h3></div><ol className="mt-5 space-y-3">{items.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">{numbered ? <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-bold text-emerald-300">{index + 1}</span> : <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />}{item}</li>)}</ol></section>;

export default ProjectDetailPage;
