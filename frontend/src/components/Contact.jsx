import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, Mail, User, MessageSquare, MapPin, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
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

                        {/* Tiempo de Respuesta */}
                        <div className="glass rounded-2xl p-6">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Tiempo de Respuesta</h3>
                                    <p className="text-gray-400 text-sm">Normalmente respondo en menos de 24 horas</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="glass rounded-2xl p-6 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">¿Necesitas respuesta inmediata?</h3>
                                </div>
                            </div>
                            <a
                                href={PERSONAL_INFO.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors text-center"
                            >
                                Contáctame por WhatsApp
                            </a>
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