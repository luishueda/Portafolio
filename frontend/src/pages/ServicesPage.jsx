import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Services from '../components/Services';
import Footer from '../components/Footer';
import usePageMetadata from '../hooks/usePageMetadata';

const ServicesPage = () => {
    usePageMetadata('Servicios | Luis Hueda', 'Servicios de desarrollo web, sistemas personalizados, ventas, inventario, reservas y soporte para negocios.');

    return <main className="min-h-screen pt-16 lg:pt-20"><div className="mx-auto max-w-7xl px-5 pt-8 sm:px-6 lg:px-8"><Link to="/" className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"><ArrowLeft size={17} aria-hidden="true" />Volver al inicio</Link></div><Services full /><Footer /></main>;
};

export default ServicesPage;
