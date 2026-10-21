import {
    ArrowRight,
    CalendarDays,
    Check,
    Globe2,
    PackageCheck,
    MessageCircle,
    Settings2,
    Wrench,
} from 'lucide-react';
import { createElement } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../utils/whatsapp';

const services = [
    {
        title: 'Desarrollo de páginas web',
        description: 'Sitios empresariales, profesionales y páginas de presentación pensadas para comunicar con claridad.',
        features: ['Diseño adaptable a móvil', 'Secciones de servicios y contacto', 'Base preparada para crecer'],
        detail: 'Una presencia profesional enfocada en explicar tus servicios, facilitar el contacto y presentar tu propuesta de valor.',
        icon: Globe2,
        contactService: 'Página web empresarial',
    },
    {
        title: 'Sistemas web personalizados',
        description: 'Aplicaciones creadas alrededor de los procesos y requerimientos reales de tu negocio.',
        features: ['Flujos a medida', 'Paneles y gestión centralizada', 'Perfiles de usuario según operación'],
        detail: 'La solución se diseña a partir de las tareas que ya realiza tu equipo para reducir trabajo manual y centralizar información.',
        icon: Settings2,
        contactService: 'Sistema web personalizado',
    },
    {
        title: 'Ventas e inventario',
        description: 'Herramientas para organizar productos, existencias, ventas y reportes en un solo lugar.',
        features: ['Control de stock', 'Registro de ventas y reportes', 'Productos y movimientos organizados'],
        detail: 'Un punto de partida para visualizar movimientos, existencias y datos importantes para tomar decisiones del negocio.',
        icon: PackageCheck,
        contactService: 'Sistema de ventas e inventario',
    },
    {
        title: 'Citas y reservas',
        description: 'Sistemas para ordenar horarios, reservas y la atención de clientes de forma más simple.',
        features: ['Agenda organizada', 'Mejor seguimiento de atención', 'Gestión de clientes y servicios'],
        detail: 'Herramientas pensadas para ordenar la disponibilidad y dar una experiencia más clara a clientes y equipo.',
        icon: CalendarDays,
        contactService: 'Sistema de citas y reservas',
    },
    {
        title: 'Mantenimiento y soporte',
        description: 'Mejoras, actualizaciones y acompañamiento para que tus aplicaciones sigan siendo útiles.',
        features: ['Ajustes y nuevas funciones', 'Soporte para tu aplicación web', 'Planificación de mejoras'],
        detail: 'Acompañamiento para mantener una aplicación actualizada, corregir incidencias y planificar mejoras útiles.',
        icon: Wrench,
        contactService: 'Mantenimiento y soporte',
    },
];

const Services = ({ full = false }) => {
    const Heading = full ? 'h1' : 'h2';

    return (
    <section id="servicios" className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Servicios</p>
                <Heading className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Soluciones digitales para tu negocio
                </Heading>
                <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                    Desarrollo herramientas digitales modernas y personalizadas para optimizar procesos, mejorar tu presencia en línea y facilitar el crecimiento de tu negocio.
                </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                {services.map(({ title, description, detail, features, icon, contactService }, index) => (
                    <article
                        key={title}
                        className={`group flex min-h-80 flex-col rounded-2xl border border-white/10 bg-slate-950/45 p-6 shadow-lg shadow-slate-950/20 transition duration-300 hover:border-emerald-400/40 hover:bg-slate-900/70 motion-safe:hover:-translate-y-1 focus-within:border-emerald-400/50 ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition duration-300 group-hover:bg-emerald-400 group-hover:text-slate-950">
                            {createElement(icon, { size: 22, 'aria-hidden': true })}
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
                        {full && <p className="mt-3 text-sm leading-relaxed text-slate-300">{detail}</p>}
                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">Alcance orientativo</p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2">
                                    <Check className="mt-0.5 shrink-0 text-emerald-400" size={15} aria-hidden="true" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6"><Link to={`/?${new URLSearchParams({ servicio: contactService }).toString()}#contacto`} className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 outline-none transition hover:text-emerald-200 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Solicitar cotización <ArrowRight size={16} aria-hidden="true" /></Link><a href={getWhatsAppUrl(`Hola Luis, me interesa ${title}. Mi negocio es...`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-200 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><MessageCircle size={16} aria-hidden="true" />WhatsApp</a></div>
                    </article>
                ))}
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-emerald-400/15 bg-gradient-to-r from-emerald-400/10 via-slate-950/50 to-cyan-400/10 px-6 py-8 text-center sm:px-10">
                <h3 className="text-2xl font-semibold text-white">¿Necesitas una solución diferente?</h3>
                <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-300">
                    También desarrollo sistemas a medida según las necesidades de tu negocio. Cuéntame tu idea y evaluemos cómo convertirla en una solución funcional.
                </p>
                <Link to="/#contacto" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                    Hablemos de tu proyecto <ArrowRight size={17} aria-hidden="true" />
                </Link>
            </div>
            {!full && <div className="mt-10 text-center"><Link to="/servicios" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Ver todos los servicios <ArrowRight size={17} aria-hidden="true" /></Link></div>}
        </div>
    </section>
    );
};

export default Services;
