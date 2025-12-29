import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Terminal, Cpu, Award, TrendingUp } from 'lucide-react';
import { ABOUT_ME, SKILLS, LEARNING_TIMELINE } from '../utils/constants';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const iconMap = {
        Frontend: <Layout className="text-accent" />,
        Backend: <Server className="text-accent" />,
        'Base de Datos': <Database className="text-accent" />,
        Herramientas: <Terminal className="text-accent" />,
    };

    return (
        <section id="sobre-mi" className="py-24 px-6 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Cpu className="text-accent" size={40} />
                        <span className="text-gradient">Sobre Mí</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Conoce mi trayectoria y habilidades
                    </p>
                </motion.div>

                {/* Main Grid - Bento Style */}
                <div className="grid md:grid-cols-12 gap-6">

                    {/* Intro + Photo - 7 columnas */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:col-span-7 glass rounded-2xl p-8 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="flex items-start gap-6 mb-6">
                                {/* Foto de perfil */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors">
                                        <img
                                            src="/images/profile.jpg"
                                            alt="Luis"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://ui-avatars.com/api/?name=Luis&size=128&background=10b981&color=fff&bold=true';
                                            }}
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full">
                                        {ABOUT_ME.experience}
                                    </div>
                                </div>

                                {/* Intro Text */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        Desarrollador en Constante Evolución
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        {ABOUT_ME.intro}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        {ABOUT_ME.focus}
                                    </p>
                                </div>
                            </div>

                            {/* Learning Focus */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="text-accent" size={20} />
                                    <h4 className="font-semibold text-white">Aprendizaje Actual</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {ABOUT_ME.learning.map((item, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>

                    {/* Timeline - 5 columnas */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:col-span-5 glass rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Award className="text-accent" size={24} />
                            <h3 className="text-xl font-bold text-white">Mi Trayectoria</h3>
                        </div>

                        <div className="space-y-6">
                            {LEARNING_TIMELINE.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-dark"></div>
                                    <div className="text-accent text-sm font-semibold mb-1">{item.year}</div>
                                    <p className="text-gray-400 text-sm">{item.milestone}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Grid - Full width */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:col-span-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {SKILLS.map((skillGroup, groupIndex) => (
                            <motion.div
                                key={groupIndex}
                                variants={itemVariants}
                                className="glass rounded-xl p-6 hover:border-accent/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {iconMap[skillGroup.category]}
                                    <h3 className="font-bold text-lg text-white">{skillGroup.category}</h3>
                                </div>

                                <div className="space-y-3">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm text-gray-300">{skill.name}</span>
                                                <span className="text-xs text-accent font-semibold">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 bg-dark-light rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;