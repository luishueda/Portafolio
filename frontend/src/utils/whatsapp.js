import { PERSONAL_INFO } from './constants';

export const getWhatsAppUrl = (message) => {
    const phone = PERSONAL_INFO.social.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
