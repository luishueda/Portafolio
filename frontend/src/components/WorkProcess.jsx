import { CheckCircle2, Code2, Handshake, MessageSquare, SearchCheck, Wrench } from 'lucide-react';

const steps = [
    { title: 'Consulta', description: 'Cuéntame qué necesitas, cuál es tu rubro y qué problema quieres resolver.', icon: MessageSquare },
    { title: 'Análisis', description: 'Revisamos los procesos, módulos prioritarios y el alcance más conveniente.', icon: SearchCheck },
    { title: 'Propuesta', description: 'Definimos una solución, entregables y una cotización según tus necesidades.', icon: Handshake },
    { title: 'Desarrollo', description: 'Construyo la solución con avances organizados y comunicación durante el proceso.', icon: Code2 },
    { title: 'Entrega y soporte', description: 'Realizamos la entrega, pruebas necesarias y planificamos mejoras futuras.', icon: Wrench },
];

const WorkProcess = () => <section className="relative overflow-hidden border-y border-white/10 bg-slate-950/35 px-5 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Proceso de trabajo</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">De la idea a una solución funcional</h2><p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">Un proceso claro para entender tu necesidad y construir una solución adaptada a tu negocio.</p></div><ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{steps.map(({ title, description, icon: Icon }, index) => <li key={title} className="relative rounded-2xl border border-white/10 bg-slate-900/45 p-6"><span className="absolute right-5 top-5 text-sm font-bold text-emerald-300/70">0{index + 1}</span><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><Icon size={22} aria-hidden="true" /></div><h3 className="mt-5 font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>{index === steps.length - 1 && <CheckCircle2 className="mt-5 text-emerald-300" size={20} aria-hidden="true" />}</li>)}</ol></div></section>;

export default WorkProcess;
