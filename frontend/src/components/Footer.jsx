import { Github, Linkedin, Facebook, Instagram, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';

// Icono de TikTok personalizado
const TikTokIcon = ({ size = 20, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, url: PERSONAL_INFO.social.github, color: "hover:text-white", label: "GitHub" },
        { icon: Linkedin, url: PERSONAL_INFO.social.linkedin, color: "hover:text-[#0077b5]", label: "LinkedIn" },
        { icon: Facebook, url: PERSONAL_INFO.social.facebook, color: "hover:text-[#1877F2]", label: "Facebook" },
        { icon: Instagram, url: PERSONAL_INFO.social.instagram, color: "hover:text-[#E4405F]", label: "Instagram" },
        { icon: TikTokIcon, url: PERSONAL_INFO.social.tiktok, color: "hover:text-[#00F2EA]", label: "TikTok" },
    ];

    return (
        <footer className="relative border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
            {/* Background decorativo sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

                {/* Contenido centrado */}
                <div className="flex flex-col items-center gap-8">

                    {/* Redes Sociales */}
                    <div className="text-center">
                        <h3 className="text-white font-semibold mb-4 text-lg">Conéctate conmigo</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`p-4 bg-white/5 rounded-xl text-gray-400 transition-all border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 ${social.color}`}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={22} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-md border-t border-white/5"></div>

                    {/* Copyright y Stack */}
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.name}</span>. Todos los derechos reservados.
                        </div>

                        {/* Separador vertical (solo desktop) */}
                        <div className="hidden md:block w-px h-4 bg-white/10"></div>

                        {/* Stack Tech */}
                        <div className="text-sm text-gray-400">
                            Desarrollado con <span className="text-emerald-400 font-semibold">React</span> & <span className="text-emerald-400 font-semibold">Django</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;