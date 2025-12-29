import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Terminal, Menu, X, Sparkles, Rocket } from 'lucide-react'; // Importamos Sparkles y Rocket
import { PERSONAL_INFO } from '../utils/constants';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['proyectos', 'sobre-mi', 'contacto'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            setActiveSection(current || '');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
        { name: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
        { name: 'Contacto', href: '#contacto', id: 'contacto' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 h-16'
                    : 'bg-transparent h-20'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full relative">
                    <div className="flex items-center justify-between h-full">

                        {/* 1. LOGO */}
                        <a href="#" className="flex items-center gap-2 group shrink-0 relative z-20">
                            <Terminal className="text-emerald-400 group-hover:scale-110 transition-transform" size={22} />
                            <span className="text-xl font-bold">
                                <span className="text-white">{PERSONAL_INFO.name}</span>
                                <span className="text-emerald-400">.dev</span>
                            </span>
                        </a>

                        {/* 2. BADGE CENTRAL - Solo en pantallas GRANDES (xl+) y SOLO cuando NO hay scroll */}
                        <div className={`hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ${scrolled ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                            }`}>
                            <div className="flex items-center gap-2.5 group cursor-default">
                                {/* Icono Inicio: Sparkles con hover y active */}
                                <Sparkles
                                    className="text-yellow-400 fill-yellow-400 animate-pulse group-hover:scale-110 group-active:scale-95 transition-transform"
                                    size={16}
                                />

                                <span className="text-emerald-400 text-sm font-medium tracking-wide whitespace-nowrap group-hover:brightness-125 group-active:brightness-110 transition-all">
                                    {PERSONAL_INFO.availability}
                                </span>

                                {/* Icono Final: Rocket con hover y active */}
                                <Rocket
                                    className="text-emerald-400 group-hover:scale-110 group-hover:translate-x-0.5 group-active:scale-95 transition-transform"
                                    size={16}
                                />
                            </div>
                        </div>

                        {/* 3. MENÚ NAVEGACIÓN */}
                        <div className="hidden md:flex items-center gap-8 shrink-0 relative z-20">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`relative text-sm transition-all duration-300 ${isActive
                                            ? 'text-emerald-400 font-semibold'
                                            : 'text-gray-400 hover:text-emerald-400'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400"
                                                style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)' }}
                                            />
                                        )}
                                    </a>
                                );
                            })}

                            <div className="h-4 w-px bg-white/10"></div>

                            <div className="flex gap-4">
                                <motion.a
                                    href={PERSONAL_INFO.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-emerald-400"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Github size={18} />
                                </motion.a>
                                <motion.a
                                    href={PERSONAL_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-emerald-400"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Linkedin size={18} />
                                </motion.a>
                            </div>
                        </div>

                        {/* Botón Móvil */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-400 hover:text-white transition-colors p-2 relative z-20"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Menú Móvil */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-b border-white/5"
                    >
                        <div className="px-6 py-6 space-y-4 flex flex-col items-center">

                            {/* Badge en móvil - SIMPLE SIN ÓVALO con efectos táctiles */}
                            <div className="flex items-center gap-2.5 mb-4 active:scale-95 transition-transform">
                                <Sparkles className="text-yellow-400 fill-yellow-400 animate-pulse active:scale-90 transition-transform" size={16} />
                                <span className="text-emerald-400 text-sm font-medium active:brightness-110 transition-all">
                                    {PERSONAL_INFO.availability}
                                </span>
                                <Rocket className="text-emerald-400 active:scale-90 active:translate-x-0.5 transition-transform" size={16} />
                            </div>

                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-emerald-400 text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="flex gap-6 pt-4 mt-2 border-t border-white/10 w-full justify-center">
                                <a href={PERSONAL_INFO.github} target="_blank" className="text-gray-400 hover:text-emerald-400"><Github size={22} /></a>
                                <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-gray-400 hover:text-emerald-400"><Linkedin size={22} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;