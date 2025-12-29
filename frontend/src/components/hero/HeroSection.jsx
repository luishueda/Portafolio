import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react'; // Quitamos la importación de Star
import AnimatedTerminal from './AnimatedTerminal';
import ParticleBackground from './ParticleBackground';
import MagneticButton from '../ui/MagneticButton';
import { PERSONAL_INFO } from '../../utils/constants';

const HeroSection = () => {
    return (
        // Padding-top ajustado para balance con navbar
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-28">

            {/* Fondo de Partículas */}
            <ParticleBackground />

            {/* Orbes de luz de fondo */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center w-full">

                {/* ============================================
                   TÍTULO PRINCIPAL
                ============================================ */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display font-bold mb-6 leading-tight"
                >
                    <div className="text-4xl md:text-6xl lg:text-7xl mb-2">
                        <span className="text-white">Hola, soy </span>

                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                {PERSONAL_INFO.name}
                            </span>
                            {/* Subrayado */}
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.3 }}
                            />
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl text-gray-400 mt-2"
                    >
                        {PERSONAL_INFO.role}
                    </motion.div>
                </motion.h1>

                {/* ============================================
                   DESCRIPCIÓN - ESLOGAN VENDEDOR
                ============================================ */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                    className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
                >
                    Transformo ideas en activos digitales de <span className="text-white font-semibold">alto impacto</span>.
                    Desarrollo soluciones web estratégicas diseñadas para potenciar el crecimiento y la eficiencia de tu negocio.
                </motion.p>

                {/* ============================================
                   TERMINAL ANIMADO
                ============================================ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.9 }}
                    className="mb-12"
                >
                    <AnimatedTerminal />
                </motion.div>

                {/* ============================================
                   BOTONES CTA
                ============================================ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.1 }}
                    className="flex gap-4 justify-center flex-wrap mb-16"
                >
                    <MagneticButton href="#proyectos" primary>
                        Ver Trabajo
                    </MagneticButton>
                    <MagneticButton href="#contacto">
                        Descargar CV
                    </MagneticButton>
                </motion.div>

                {/* ============================================
                   SCROLL INDICATOR
                ============================================ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.6 }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Explorar</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <ArrowDown size={20} className="text-emerald-400" />
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;