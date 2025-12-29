import { motion } from 'framer-motion';
import { Layout, Server, Terminal, Cpu, Award, TrendingUp, Brain, Code, Sparkles, Target, Zap } from 'lucide-react';
import { ABOUT_ME, LEARNING_TIMELINE, SKILLS, SOFT_SKILLS } from '../utils/constants';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        },
    };

    const iconMap = {
        Frontend: <Layout className="text-emerald-400" size={22} />,
        Backend: <Server className="text-emerald-400" size={22} />,
        'Herramientas': <Terminal className="text-emerald-400" size={22} />,
    };

    return (
        <section id="sobre-mi" className="py-32 px-6 relative overflow-hidden">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Premium */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="text-emerald-400" size={16} />
                        <span className="text-emerald-400 text-sm font-medium">Conóceme mejor</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-gradient">Sobre Mí</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Desarrollador apasionado por crear experiencias digitales excepcionales
                    </p>
                </motion.div>

                {/* Bento Grid Layout Asimétrico */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >

                    {/* Card Principal: Intro + Photo - SPAN 8 */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-8 glass rounded-3xl p-8 md:p-10 relative group hover:border-emerald-500/30 transition-all duration-500"
                    >
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row gap-8 mb-8">

                                {/* Photo con efectos premium */}
                                <div className="relative flex-shrink-0 mx-auto lg:mx-0">
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <div className="w-40 h-40 rounded-3xl overflow-hidden border-2 border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-500 shadow-xl shadow-emerald-500/20">
                                            <img
                                                src="/images/profile.jpg"
                                                alt="Luis Hueda"
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                onError={(e) => {
                                                    e.target.src = 'https://ui-avatars.com/api/?name=Luis+Hueda&size=160&background=10b981&color=fff&bold=true';
                                                }}
                                            />
                                        </div>
                                        {/* Animated Ring */}
                                        <div className="absolute inset-0 rounded-3xl border-2 border-emerald-500/50 animate-ping opacity-75 pointer-events-none"></div>

                                        {/* Status Badge */}
                                        <motion.div
                                            className="absolute -bottom-3 -right-3 px-4 py-2 bg-emerald-500 text-slate-950 text-xs font-bold rounded-full shadow-lg flex items-center gap-2"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        >
                                            <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>
                                            Disponible
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Intro Text */}
                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Target className="text-emerald-400" size={24} />
                                        <h3 className="text-3xl font-bold text-white">
                                            Desarrollador Full Stack
                                        </h3>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed text-base">
                                        {ABOUT_ME.intro}
                                    </p>

                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {ABOUT_ME.focus}
                                    </p>

                                    {/* Stats Mini Cards */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                                        <div className="glass rounded-xl p-4 text-center hover:border-emerald-500/30 transition-colors">
                                            <div className="text-2xl font-bold text-emerald-400 mb-1">1.5+</div>
                                            <div className="text-xs text-gray-400">Años</div>
                                        </div>
                                        <div className="glass rounded-xl p-4 text-center hover:border-emerald-500/30 transition-colors">
                                            <div className="text-2xl font-bold text-emerald-400 mb-1">5+</div>
                                            <div className="text-xs text-gray-400">Proyectos</div>
                                        </div>
                                        <div className="glass rounded-xl p-4 text-center hover:border-emerald-500/30 transition-colors">
                                            <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                                            <div className="text-xs text-gray-400">Dedicación</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Soft Skills + Learning (Grid interno) */}
                            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">

                                {/* Soft Skills */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Brain className="text-emerald-400" size={20} />
                                        <h4 className="font-semibold text-white">Soft Skills</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {SOFT_SKILLS.map((skill, index) => (
                                            <motion.span
                                                key={index}
                                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                                                className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 cursor-default transition-colors"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Learning (Lista vertical mejorada) */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <TrendingUp className="text-emerald-400" size={20} />
                                        <h4 className="font-semibold text-white">Aprendiendo Ahora</h4>
                                    </div>
                                    <div className="space-y-2">
                                        {ABOUT_ME.learning.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-default group/item"
                                            >
                                                <Zap className="text-emerald-400 flex-shrink-0 group-hover/item:scale-110 transition-transform" size={14} />
                                                <span className="text-xs text-gray-300 leading-relaxed">
                                                    {item}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline - SPAN 4 (Más alto que antes) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-4 glass rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-emerald-500/10 rounded-xl">
                                <Award className="text-emerald-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Mi Trayectoria</h3>
                                <p className="text-xs text-gray-400">Evolución constante</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {LEARNING_TIMELINE.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ x: 5 }}
                                    className="relative pl-8 border-l-2 border-emerald-500/20 hover:border-emerald-500 transition-colors group cursor-default"
                                >
                                    {/* Timeline Dot animado */}
                                    <motion.div
                                        className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"
                                        whileHover={{ scale: 1.3 }}
                                    >
                                        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                                    </motion.div>

                                    <div className="text-emerald-400 text-sm font-bold mb-1 flex items-center gap-2">
                                        {item.year}
                                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                                        {item.milestone}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress indicator */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                                <span>Progreso de carrera</span>
                                <span className="text-emerald-400 font-semibold">En crecimiento</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '75%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Grid - SPAN 12 (3 columnas balanceadas) */}
                    {SKILLS.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            variants={itemVariants}
                            className="md:col-span-4 glass rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <div className="p-2 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                                    {iconMap[skillGroup.category] || <Code className="text-emerald-400" size={22} />}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">{skillGroup.category}</h3>
                                    <p className="text-xs text-gray-400">{skillGroup.items.length} tecnologías</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {skillGroup.items.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: skillIndex * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-all cursor-default group/skill"
                                    >
                                        <span className="text-sm text-gray-200 font-medium group-hover/skill:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                        <motion.span
                                            whileHover={{ scale: 1.1 }}
                                            className={`px-3 py-1 text-xs font-bold rounded-lg ${skill.color} shadow-sm`}
                                        >
                                            {skill.level}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
};

export default About;