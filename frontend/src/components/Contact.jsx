import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, Mail, User, MessageSquare, MapPin, Github, Linkedin } from 'lucide-react';
import api from '../api';
import { PERSONAL_INFO } from '../utils/constants';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', content: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await api.post('contact/', formData);
            setStatus('success');
            setFormData({ name: '', email: '', content: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section id="contacto" className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Hablemos</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        ¿Tienes un proyecto en mente? Vamos a construirlo juntos.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">

                    {/* Info de Contacto - 2 columnas */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Card de Info */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-6 text-white">Información de Contacto</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <Mail className="text-accent" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email</p>
                                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-accent transition-colors">
                                            {PERSONAL_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <MapPin className="text-accent" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                                        <p className="text-white">{PERSONAL_INFO.location || "Perú"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            {/* ... (resto de tu código social igual) ... */}
                            <p className="text-sm text-gray-400 mb-3">Sígueme en</p>
                            <div className="flex gap-3">
                                <a
                                    href={PERSONAL_INFO.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 rounded-lg hover:bg-accent/20 hover:text-accent transition-all border border-white/10 hover:border-accent/30"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={PERSONAL_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 rounded-lg hover:bg-accent/20 hover:text-accent transition-all border border-white/10 hover:border-accent/30"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="glass rounded-2xl p-6 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-3">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                                <span className="text-accent text-sm font-medium">Disponible</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Actualmente aceptando nuevos proyectos freelance
                            </p>
                        </div>
                    </motion.div>

                    {/* Formulario - 3 columnas */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">

                            {/* Grid de inputs */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Nombre */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                        <User size={16} className="text-accent" />
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        // CAMBIO AQUÍ: bg-[#1e293b] asegura fondo oscuro
                                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                        <Mail size={16} className="text-accent" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        // CAMBIO AQUÍ
                                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            {/* Mensaje */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                    <MessageSquare size={16} className="text-accent" />
                                    Mensaje
                                </label>
                                <textarea
                                    name="content"
                                    required
                                    rows="5"
                                    value={formData.content}
                                    onChange={handleChange}
                                    // CAMBIO AQUÍ
                                    className="w-full bg-[#1e293b] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                ></textarea>
                            </div>

                            {/* Botón Submit */}
                            <motion.button
                                whileHover={{ scale: status === 'loading' || status === 'success' ? 1 : 1.02 }}
                                whileTap={{ scale: status === 'loading' || status === 'success' ? 1 : 0.98 }}
                                disabled={status === 'loading' || status === 'success'}
                                className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all
                  ${status === 'success'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : status === 'error'
                                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                            : 'bg-accent text-dark hover:bg-accent-light glow-accent'
                                    }
                  ${(status === 'loading' || status === 'success') && 'cursor-not-allowed'}
                `}
                            >
                                {status === 'loading' && (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Enviando...
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <CheckCircle size={20} />
                                        ¡Mensaje Enviado!
                                    </>
                                )}
                                {status === 'error' && '❌ Error al enviar'}
                                {status === 'idle' && (
                                    <>
                                        <Send size={20} />
                                        Enviar Mensaje
                                    </>
                                )}
                            </motion.button>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-sm text-green-400"
                                >
                                    ¡Gracias! Te responderé lo antes posible.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;