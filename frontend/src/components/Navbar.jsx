import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Terminal, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Sobre mí', href: '#sobre-mi' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-dark/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="w-full px-6 md:px-12 flex items-center justify-between">

                {/* IZQUIERDA: Solo el Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Terminal className="text-accent" size={24} />
                    <h1 className="text-xl font-bold text-gradient font-display">
                        {PERSONAL_INFO.name}.dev
                    </h1>
                </motion.a>

                {/* DERECHA: Navegación + Redes Sociales (Agrupados) */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Links de navegación */}
                    <div className="flex gap-8 text-gray-400 font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Separador vertical sutil */}
                    <div className="h-4 w-[1px] bg-white/10"></div>

                    {/* Redes Sociales */}
                    <div className="flex gap-4 text-gray-400">
                        <motion.a
                            href={PERSONAL_INFO.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: '#fff' }}
                            className="transition-colors"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={PERSONAL_INFO.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: '#fff' }}
                            className="transition-colors"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                    </div>
                </div>

                {/* BOTÓN MÓVIL (Visible solo en celular) */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-gray-400 hover:text-white transition-colors"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-dark-light/95 backdrop-blur-xl border-t border-white/10"
                >
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-gray-400 hover:text-accent transition-colors py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex gap-4 pt-4 border-t border-white/10">
                            <a href={PERSONAL_INFO.github} target="_blank" className="text-gray-400 hover:text-white">
                                <Github size={20} />
                            </a>
                            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-gray-400 hover:text-white">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;