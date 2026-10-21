import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const FloatingWhatsApp = () => {
    const message = 'Hola Luis, me interesa una solución web o sistema personalizado para mi negocio.';
    const whatsappUrl = getWhatsAppUrl(message);

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iniciar conversación por WhatsApp"
            className="fixed bottom-8 right-8 z-50 bg-accent text-dark p-4 rounded-full shadow-2xl hover:bg-accent-light transition-colors group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle size={28} className="animate-pulse" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-light text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                ¿Hablamos por WhatsApp?
            </span>

            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75"></span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
