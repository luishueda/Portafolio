import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, BriefcaseBusiness } from 'lucide-react';
import AnimatedTerminal from './AnimatedTerminal';
import MagneticButton from '../ui/MagneticButton';
import { PERSONAL_INFO } from '../../utils/constants';

const ParticleBackground = lazy(() => import('./ParticleBackground'));

const HeroSection = () => {
    const shouldReduceMotion = useReducedMotion();
    const reveal = (delay = 0) => ({
        initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay },
    });

    return (
        <section id="inicio" className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-5 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
            <Suspense fallback={null}><ParticleBackground /></Suspense>
            <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl motion-safe:animate-pulse" />
            <div className="pointer-events-none absolute bottom-12 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl motion-safe:animate-pulse" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div className="max-w-3xl text-center lg:text-left">
                    <motion.p {...reveal(0.1)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-200">
                        <BriefcaseBusiness size={16} aria-hidden="true" />
                        {PERSONAL_INFO.role}
                    </motion.p>

                    <motion.h1 {...reveal(0.2)} className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                        Desarrollo <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">páginas web</span> y sistemas a medida para impulsar tu negocio.
                    </motion.h1>

                    <motion.p {...reveal(0.35)} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
                        Transformo ideas y necesidades empresariales en soluciones digitales modernas, funcionales y adaptadas a cada proyecto.
                    </motion.p>

                    <motion.div {...reveal(0.5)} className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
                        <MagneticButton href="#contacto" primary className="w-full sm:w-auto">Solicitar cotización <ArrowRight size={17} aria-hidden="true" /></MagneticButton>
                        <MagneticButton href="#proyectos" className="w-full sm:w-auto">Ver proyectos</MagneticButton>
                    </motion.div>

                    <motion.p {...reveal(0.65)} className="mt-6 text-sm text-slate-400">
                        Desarrollo Full Stack con enfoque en experiencias claras, rendimiento y soluciones útiles.
                    </motion.p>
                </div>

                <motion.div {...reveal(0.35)} className="mx-auto w-full max-w-xl lg:max-w-none"><AnimatedTerminal /></motion.div>
            </div>

            <motion.a {...reveal(0.75)} href="#proyectos" aria-label="Explorar proyectos" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 rounded-md text-xs font-medium uppercase tracking-[0.18em] text-slate-400 outline-none transition hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400 md:flex">
                Explorar
                <ArrowDown size={18} className="animate-bounce text-emerald-400 motion-reduce:animate-none" aria-hidden="true" />
            </motion.a>
        </section>
    );
};

export default HeroSection;
