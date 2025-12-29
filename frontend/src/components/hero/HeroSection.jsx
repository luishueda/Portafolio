import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AnimatedTerminal from './AnimatedTerminal';
import ParticleBackground from './ParticleBackground';
import MagneticButton from '../ui/MagneticButton';
import { PERSONAL_INFO } from '../../utils/constants';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Badge Disponibilidad */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-8"
                >
                    <span className="px-4 py-2 rounded-full glass text-accent text-sm font-medium tracking-wide">
                        ✨ {PERSONAL_INFO.availability}
                    </span>
                </motion.div>

                {/* Título Principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
                >
                    Hola, soy{' '}
                    <span className="text-gradient">{PERSONAL_INFO.name}</span>
                    <br />
                    <span className="text-4xl md:text-6xl lg:text-7xl text-gray-400">
                        {PERSONAL_INFO.role}
                    </span>
                </motion.h1>

                {/* Descripción */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
                >
                    Especializado en crear sistemas escalables con{' '}
                    <span className="text-white font-semibold">Django</span> y{' '}
                    <span className="text-white font-semibold">React</span>.
                    Transformo ideas complejas en productos digitales eficientes.
                </motion.p>

                {/* Terminal Animado */}
                <AnimatedTerminal />

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-4 justify-center flex-wrap mb-16"
                >
                    <MagneticButton href="#proyectos" primary>
                        Ver Trabajo
                    </MagneticButton>
                    <MagneticButton href="#contacto">
                        Descargar CV
                    </MagneticButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-sm">Desliza para explorar</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ArrowDown size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;