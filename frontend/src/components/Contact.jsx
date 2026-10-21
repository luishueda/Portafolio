import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, Building2, CheckCircle, Clock3, Loader2, Mail, MapPin, MessageSquare, Phone, Send, User } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';
import { getWhatsAppUrl } from '../utils/whatsapp';

const MAX_CONTENT_LENGTH = 2000;
const SERVICE_OPTIONS = ['Página web empresarial', 'Sistema web personalizado', 'Sistema de ventas e inventario', 'Sistema de citas y reservas', 'Mantenimiento y soporte', 'Otro servicio'];
const INDUSTRY_OPTIONS = ['Comercio y ventas', 'Salud y bienestar', 'Servicios profesionales', 'Restaurante o alimentación', 'Educación', 'Logística e inventario', 'Otro rubro'];
const BUDGET_OPTIONS = ['Aún no lo defino', 'Menos de S/ 1,000', 'S/ 1,000 a S/ 3,000', 'S/ 3,000 a S/ 6,000', 'Más de S/ 6,000'];
const TIMEFRAME_OPTIONS = ['Aún no lo defino', 'Lo antes posible', 'En 1 a 2 meses', 'En 3 meses o más'];
const initialFormData = { name: '', email: '', service: '', solution: '', company: '', whatsapp: '', industry: '', features: '', budget: '', timeframe: '', description: '' };

const getInitialFormData = (searchParams) => {
    const solution = searchParams.get('proyecto')?.trim() || '';
    const service = searchParams.get('servicio')?.trim() || '';
    return {
        ...initialFormData,
        solution,
        service: SERVICE_OPTIONS.includes(service) ? service : '',
    };
};

const buildContent = ({ service, solution, company, whatsapp, industry, features, budget, timeframe, description }) => {
    const lines = [`Servicio solicitado: ${service.trim()}`];
    if (solution.trim()) lines.push(`Solución de interés: ${solution.trim()}`);
    if (company.trim()) lines.push(`Empresa o negocio: ${company.trim()}`);
    if (whatsapp.trim()) lines.push(`WhatsApp: ${whatsapp.trim()}`);
    if (industry.trim()) lines.push(`Rubro: ${industry.trim()}`);
    if (features.trim()) lines.push(`Funciones de interés: ${features.trim()}`);
    if (budget.trim()) lines.push(`Presupuesto orientativo: ${budget.trim()}`);
    if (timeframe.trim()) lines.push(`Plazo deseado: ${timeframe.trim()}`);
    lines.push('', 'Descripción del proyecto:', description.trim());
    return lines.join('\n');
};

const encodeFormData = (data) => new URLSearchParams(data).toString();

const Contact = () => {
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState(() => getInitialFormData(searchParams));
    const [fieldErrors, setFieldErrors] = useState({});
    const [status, setStatus] = useState('idle');
    const [requestError, setRequestError] = useState('');
    const content = buildContent(formData);
    const contentLength = content.length;
    const maximumDescriptionLength = Math.max(0, MAX_CONTENT_LENGTH - buildContent({ ...formData, description: '' }).length);
    const whatsappMessage = formData.solution
        ? `Hola Luis, me interesa una solución similar a ${formData.solution}. Mi negocio es...`
        : 'Hola Luis, me interesa una solución web o sistema personalizado para mi negocio.';

    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Indica tu nombre completo.';
        if (!formData.email.trim()) errors.email = 'Indica tu correo electrónico.';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) errors.email = 'Escribe un correo electrónico válido.';
        if (!formData.service) errors.service = 'Selecciona el tipo de servicio que necesitas.';
        if (!formData.description.trim()) errors.description = 'Cuéntame brevemente sobre tu proyecto.';
        if (contentLength > MAX_CONTENT_LENGTH) errors.description = `La información de la solicitud no puede superar ${MAX_CONTENT_LENGTH} caracteres.`;
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = ({ target: { name, value } }) => {
        setFormData((current) => ({ ...current, [name]: value }));
        setFieldErrors((current) => ({ ...current, [name]: undefined }));
        setRequestError('');
        if (status !== 'idle') setStatus('idle');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (status === 'loading' || !validate()) return;
        setStatus('loading');
        setRequestError('');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encodeFormData({
                    'form-name': 'cotizacion',
                    'bot-field': '',
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    service: formData.service,
                    solution: formData.solution.trim(),
                    company: formData.company.trim(),
                    whatsapp: formData.whatsapp.trim(),
                    industry: formData.industry,
                    features: formData.features.trim(),
                    budget: formData.budget,
                    timeframe: formData.timeframe,
                    content,
                }),
            });
            if (!response.ok) {
                const error = new Error('No se pudo enviar la solicitud.');
                error.status = response.status;
                throw error;
            }
            setFormData(initialFormData);
            setFieldErrors({});
            setStatus('success');
        } catch (error) {
            if (error.status === 429) {
                setStatus('rateLimited');
                setRequestError('Has enviado varias solicitudes recientemente. Espera un momento antes de intentarlo de nuevo.');
            } else {
                setStatus('error');
                setRequestError('No pudimos registrar tu solicitud. Revisa tu conexión e inténtalo nuevamente.');
            }
        }
    };

    const inputClassName = (hasError) => `w-full bg-[#1e293b] border rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${hasError ? 'border-red-400/80 focus:border-red-400 focus:ring-red-400/20' : 'border-white/10 focus:border-accent focus:ring-accent/20'}`;

    return (
        <section id="contacto" className="scroll-mt-24 py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">Cuéntame sobre tu proyecto</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">¿Necesitas una página web o un sistema personalizado? Cuéntame qué tienes en mente y conversemos sobre una solución para tu negocio.</p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-6 text-white">Información de contacto</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3"><div className="p-2 bg-accent/10 rounded-lg"><Mail className="text-accent" size={20} /></div><div><p className="text-sm text-gray-400 mb-1">Correo electrónico</p><a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-accent transition-colors">{PERSONAL_INFO.email}</a></div></div>
                                <div className="flex items-start gap-3"><div className="p-2 bg-accent/10 rounded-lg"><MapPin className="text-accent" size={20} /></div><div><p className="text-sm text-gray-400 mb-1">Ubicación</p><p className="text-white">{PERSONAL_INFO.location || 'Perú'}</p></div></div>
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-6"><div className="flex items-start gap-3"><div className="p-2 bg-emerald-500/10 rounded-lg"><Clock3 className="w-5 h-5 text-emerald-400" /></div><div><h3 className="text-white font-semibold mb-1">Respuesta directa</h3><p className="text-gray-400 text-sm">Tu solicitud quedará registrada para revisarla contigo.</p></div></div></div>
                        <div className="glass rounded-2xl p-6 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10">
                            <div className="flex items-center gap-3 mb-3"><div className="p-2 bg-emerald-500/10 rounded-lg"><Phone className="w-5 h-5 text-emerald-400" /></div><h3 className="text-white font-semibold">¿Prefieres hablar por WhatsApp?</h3></div>
                            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 text-white text-sm font-semibold rounded-lg transition-colors text-center">Contáctame por WhatsApp</a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                        <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 md:p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Field label="Nombre completo" icon={<User size={16} className="text-accent" />} id="contact-name" name="name" autoComplete="name" maxLength="100" value={formData.name} onChange={handleChange} error={fieldErrors.name} className={inputClassName(fieldErrors.name)} placeholder="Tu nombre completo" />
                                <Field label="Correo electrónico" icon={<Mail size={16} className="text-accent" />} id="contact-email" name="email" type="email" autoComplete="email" maxLength="254" value={formData.email} onChange={handleChange} error={fieldErrors.email} className={inputClassName(fieldErrors.email)} placeholder="tu@email.com" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2"><Label htmlFor="contact-service" icon={<MessageSquare size={16} className="text-accent" />}>Tipo de servicio</Label><select id="contact-service" name="service" value={formData.service} onChange={handleChange} aria-invalid={Boolean(fieldErrors.service)} aria-describedby={fieldErrors.service ? 'contact-service-error' : undefined} className={inputClassName(fieldErrors.service)}><option value="" disabled>Selecciona una opción</option>{SERVICE_OPTIONS.map((service) => <option key={service} value={service}>{service}</option>)}</select>{fieldErrors.service && <ErrorMessage id="contact-service-error">{fieldErrors.service}</ErrorMessage>}</div>
                                <Field label="Empresa o negocio" optional icon={<Building2 size={16} className="text-accent" />} id="contact-company" name="company" autoComplete="organization" maxLength="100" value={formData.company} onChange={handleChange} className={inputClassName(false)} placeholder="Nombre de tu negocio" />
                            </div>
                            <Field label="Solución de interés" optional icon={<MessageSquare size={16} className="text-accent" />} id="contact-solution" name="solution" maxLength="120" value={formData.solution} onChange={handleChange} className={inputClassName(false)} placeholder="Ej. Sistema de inventario" />
                            <Field label="WhatsApp" optional icon={<Phone size={16} className="text-accent" />} id="contact-whatsapp" name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" maxLength="30" value={formData.whatsapp} onChange={handleChange} className={inputClassName(false)} placeholder="Ej. +51 999 999 999" />
                            <div className="grid md:grid-cols-2 gap-6">
                                <SelectField label="Rubro de tu negocio" id="contact-industry" name="industry" value={formData.industry} onChange={handleChange} options={INDUSTRY_OPTIONS} placeholder="Selecciona tu rubro" />
                                <SelectField label="Presupuesto orientativo" id="contact-budget" name="budget" value={formData.budget} onChange={handleChange} options={BUDGET_OPTIONS} placeholder="Selecciona una opción" />
                            </div>
                            <SelectField label="Plazo deseado" id="contact-timeframe" name="timeframe" value={formData.timeframe} onChange={handleChange} options={TIMEFRAME_OPTIONS} placeholder="Selecciona una opción" />
                            <div className="space-y-2"><Label htmlFor="contact-features" icon={<MessageSquare size={16} className="text-accent" />} optional>Funciones que necesitas</Label><textarea id="contact-features" name="features" rows="3" maxLength="400" value={formData.features} onChange={handleChange} className={`${inputClassName(false)} resize-none`} placeholder="Ej. ventas, alertas de stock, agenda, roles de usuario o reportes." /></div>
                            <div className="space-y-2"><div className="flex items-end justify-between gap-4"><Label htmlFor="contact-description" icon={<MessageSquare size={16} className="text-accent" />}>Descripción del proyecto</Label><span className={`text-xs ${contentLength > MAX_CONTENT_LENGTH ? 'text-red-300' : 'text-gray-500'}`}>{contentLength}/{MAX_CONTENT_LENGTH}</span></div><textarea id="contact-description" name="description" required rows="6" maxLength={maximumDescriptionLength} value={formData.description} onChange={handleChange} aria-invalid={Boolean(fieldErrors.description)} aria-describedby={fieldErrors.description ? 'contact-description-error' : 'contact-description-help'} className={`${inputClassName(fieldErrors.description)} resize-none`} placeholder="Describe qué necesitas, los objetivos de tu negocio y cualquier detalle importante." /><p id="contact-description-help" className="text-xs text-gray-500">Puedes escribir hasta {maximumDescriptionLength} caracteres según la información incluida.</p>{fieldErrors.description && <ErrorMessage id="contact-description-error">{fieldErrors.description}</ErrorMessage>}</div>
                            {(status === 'error' || status === 'rateLimited') && <div className="flex gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200" role="alert"><AlertCircle className="shrink-0" size={20} />{requestError}</div>}
                            {status === 'success' && <div className="flex gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200" role="status"><CheckCircle className="shrink-0" size={20} />Tu solicitud fue registrada correctamente. Me pondré en contacto contigo pronto.</div>}
                            <motion.button whileHover={{ scale: status === 'loading' ? 1 : 1.02 }} whileTap={{ scale: status === 'loading' ? 1 : 0.98 }} disabled={status === 'loading'} className="w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all bg-accent text-dark hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark glow-accent disabled:cursor-not-allowed disabled:opacity-70">{status === 'loading' ? <><Loader2 className="animate-spin" size={20} />Registrando solicitud...</> : <><Send size={20} />Solicitar cotización</>}</motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Label = ({ htmlFor, icon, optional, children }) => <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-medium text-gray-300">{icon}{children}{optional && <span className="text-gray-500">(opcional)</span>}</label>;
const ErrorMessage = ({ id, children }) => <p id={id} className="text-sm text-red-300" role="alert">{children}</p>;
const Field = ({ label, optional, icon, id, name, type = 'text', error, className, ...props }) => <div className="space-y-2"><Label htmlFor={id} icon={icon} optional={optional}>{label}</Label><input id={id} type={type} name={name} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={className} {...props} />{error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}</div>;
const SelectField = ({ label, id, name, value, onChange, options, placeholder }) => <div className="space-y-2"><Label htmlFor={id} icon={<MessageSquare size={16} className="text-accent" />} optional>{label}</Label><select id={id} name={name} value={value} onChange={onChange} className="w-full rounded-xl border border-white/10 bg-[#1e293b] p-4 text-white transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"><option value="">{placeholder}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;

export default Contact;
