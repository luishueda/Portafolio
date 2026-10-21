import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Menu, Terminal, X } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';

const navLinks = [
    { name: 'Inicio', to: '/', id: 'inicio' },
    { name: 'Servicios', to: '/servicios', id: 'servicios' },
    { name: 'Proyectos', to: '/proyectos', id: 'proyectos' },
    { name: 'Sobre mí', to: '/#sobre-mi', id: 'sobre-mi' },
    { name: 'Contacto', to: '/#contacto', id: 'contacto' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const { pathname } = useLocation();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
            if (pathname !== '/') return;
            const current = navLinks.find(({ id }) => {
                const element = document.getElementById(id);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 160 && rect.bottom >= 160;
            });
            setActiveSection(current?.id || 'inicio');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const currentPage = pathname === '/servicios' ? 'servicios' : pathname === '/proyectos' ? 'proyectos' : activeSection;
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return <>
        <motion.header initial={shouldReduceMotion ? false : { y: -36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }} className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-white/10 bg-slate-950/90 shadow-lg shadow-slate-950/30 backdrop-blur-xl' : 'border-transparent bg-slate-950/30 backdrop-blur-sm'}`}>
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8" aria-label="Navegación principal">
                <Link to="/" className="group relative z-10 inline-flex items-center gap-2 rounded-lg text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"><Terminal className="text-emerald-400 transition-transform duration-300 group-hover:scale-110" size={21} aria-hidden="true" /><span className="text-lg font-bold tracking-tight sm:text-xl">{PERSONAL_INFO.name}<span className="text-emerald-400">.dev</span></span></Link>
                <div className="hidden items-center gap-6 lg:flex"><div className="flex items-center gap-5 xl:gap-7">{navLinks.map((link) => { const isActive = currentPage === link.id; return <Link key={link.id} to={link.to} aria-current={isActive ? 'page' : undefined} className={`relative rounded-md px-1 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 ${isActive ? 'text-emerald-300' : 'text-slate-300 hover:text-white'}`}>{link.name}{isActive && <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-emerald-400" />}</Link>; })}</div><Link to="/#contacto" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Solicitar cotización</Link></div>
                <button type="button" onClick={() => setMobileMenuOpen((isOpen) => !isOpen)} className="inline-flex rounded-lg p-2 text-slate-200 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-emerald-400 lg:hidden" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}>{mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}</button>
            </nav>
        </motion.header>
        <AnimatePresence>{mobileMenuOpen && <motion.div id="mobile-navigation" initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }} transition={{ duration: 0.2 }} className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-slate-950/95 px-5 py-6 shadow-2xl backdrop-blur-xl lg:hidden"><nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Navegación móvil">{navLinks.map((link) => <Link key={link.id} to={link.to} onClick={closeMobileMenu} aria-current={currentPage === link.id ? 'page' : undefined} className="rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">{link.name}</Link>)}<Link to="/#contacto" onClick={closeMobileMenu} className="mt-3 inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Solicitar cotización</Link><div className="mt-4 flex gap-5 border-t border-white/10 px-4 pt-5"><a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Luis Hueda" className="text-slate-400 transition hover:text-emerald-300"><Github size={21} /></a><a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Luis Hueda" className="text-slate-400 transition hover:text-emerald-300"><Linkedin size={21} /></a></div></nav></motion.div>}</AnimatePresence>
    </>;
};

export default Navbar;
