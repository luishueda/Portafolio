import comedorSocialImage from '../assets/local-projects/comedor-social.png';
import inventarioImage from '../assets/local-projects/inventario.png';
import tiendaRopaImage from '../assets/local-projects/tienda-ropa.png';
import estudioJuridicoImage from '../assets/local-projects/estudio-juridico.png';
import campanaMunicipalImage from '../assets/local-projects/campana-municipal.png';
import veterinariaImage from '../assets/local-projects/veterinaria.png';
import mercaderiaImage from '../assets/local-projects/mercaderia.png';
import boticaImage from '../assets/local-projects/botica.png';
import salonBellezaImage from '../assets/local-projects/salon-belleza.png';

export const localProjects = [
    {
        id: 'local-comedor-provincial',
        title: 'Gestión Integral de Comedor Social',
        description: 'Sistema local para la gestión de beneficiarios, raciones, inventario y caja de un comedor.',
        technologies: 'PHP, MySQL, HTML, CSS',
        image: comedorSocialImage,
        link_live: 'http://localhost:8080/Comedor_Provincial/',
        link_github: '',
        caseStudy: {
            purpose: 'Centraliza la atención diaria de un comedor, desde el registro de beneficiarios hasta el control de insumos y caja.',
            capabilities: ['Registro de beneficiarios y raciones', 'Control de inventario e insumos', 'Movimientos de caja', 'Consulta de operaciones diarias'],
            workflow: ['Registrar atención', 'Descontar ración e insumos', 'Revisar caja y existencias'],
            roles: ['Administración', 'Encargado de cocina', 'Responsable de caja'],
        },
    },
    {
        id: 'local-inventario-system',
        title: 'Control de Inventario y Operaciones',
        description: 'Sistema local de inventario con módulos de productos, movimientos, proveedores, órdenes de compra y reportes.',
        technologies: 'PHP, MySQL, JavaScript, HTML, CSS',
        image: inventarioImage,
        link_live: 'http://localhost:8080/inventario-system/public/',
        link_github: '',
        caseStudy: {
            purpose: 'Organiza el stock y los movimientos de productos para tener visibilidad de compras, proveedores y existencias.',
            capabilities: ['Catálogo de productos y categorías', 'Entradas y salidas de almacén', 'Proveedores y órdenes de compra', 'Reportes de inventario'],
            workflow: ['Registrar compra', 'Actualizar existencias', 'Consultar movimientos y reportes'],
            roles: ['Administrador', 'Encargado de almacén', 'Compras'],
        },
    },
    {
        id: 'local-tienda-ropa',
        title: 'Plataforma de Gestión para Tienda de Moda',
        description: 'Sistema interno de ventas e inventario para una tienda de ropa.',
        technologies: 'PHP, MySQL, JavaScript, HTML, CSS',
        image: tiendaRopaImage,
        link_live: 'http://localhost:8080/tienda-ropa/',
        link_github: '',
        caseStudy: {
            purpose: 'Reúne ventas, productos y control de prendas para una operación minorista de ropa.',
            capabilities: ['Productos y variantes de prendas', 'Control de ventas', 'Inventario por producto', 'Seguimiento de existencias'],
            workflow: ['Registrar producto', 'Realizar venta', 'Actualizar stock disponible'],
            roles: ['Administrador', 'Vendedor', 'Encargado de inventario'],
        },
    },
    {
        id: 'local-estudio-juridico',
        title: 'Suite de Gestión para Estudio Jurídico',
        description: 'Sistema local para un estudio jurídico con archivos de agenda, casos, pagos y juzgados.',
        technologies: 'PHP, MySQL, HTML, CSS',
        image: estudioJuridicoImage,
        link_live: 'http://localhost:8080/Estudio-juridico/login',
        link_github: '',
        caseStudy: {
            purpose: 'Ayuda a ordenar la información operativa de un estudio jurídico: casos, agenda, juzgados y pagos.',
            capabilities: ['Registro y seguimiento de casos', 'Agenda de actividades', 'Gestión de juzgados', 'Control de pagos y archivos'],
            workflow: ['Crear expediente', 'Programar actividad', 'Actualizar el estado del caso'],
            roles: ['Administrador', 'Abogado', 'Asistente legal'],
        },
    },
    {
        id: 'local-campana-municipal',
        title: 'Plataforma de Participación y Gestión Territorial',
        description: 'Sitio y sistema local con módulos de encuestas, participación, recursos, simpatizantes y zonas.',
        technologies: 'PHP, MySQL, HTML, CSS',
        image: campanaMunicipalImage,
        link_live: 'http://localhost:8080/Capa%C3%B1a-municipal/',
        link_github: '',
        caseStudy: {
            purpose: 'Centraliza la organización de participación, recursos, encuestas y zonas para una campaña local.',
            capabilities: ['Registro de simpatizantes', 'Encuestas y participación', 'Organización por zonas', 'Gestión de recursos'],
            workflow: ['Registrar actividad', 'Clasificar por zona', 'Consultar información recopilada'],
            roles: ['Coordinación', 'Equipo de campo', 'Administrador'],
        },
    },
    {
        id: 'local-veterinaria',
        title: 'Sistema Integral para Clínica Veterinaria',
        description: 'Sistema local con módulos de citas, clientes, mascotas, inventario, vacunas, caja y estética.',
        technologies: 'PHP, MySQL, JavaScript, HTML, CSS',
        image: veterinariaImage,
        link_live: 'http://localhost:8080/Veterinaria/',
        link_github: '',
        caseStudy: {
            purpose: 'Organiza la atención de una veterinaria integrando pacientes, agenda, servicios, inventario y caja.',
            capabilities: ['Citas y fichas de mascotas', 'Vacunas y servicios', 'Inventario de productos', 'Caja y estética'],
            workflow: ['Registrar mascota', 'Agendar atención', 'Cobrar servicio y actualizar stock'],
            roles: ['Administrador', 'Recepción', 'Veterinario'],
        },
    },
    {
        id: 'local-sistema-mercaderia',
        title: 'Plataforma de Logística e Importaciones',
        description: 'Sistema local de importaciones y logística para Rumay Trading.',
        technologies: 'PHP, MySQL, JavaScript, HTML, CSS',
        image: mercaderiaImage,
        link_live: 'http://localhost:8080/Sistema-Mercaderia/frontend/',
        link_github: '',
        caseStudy: {
            purpose: 'Agrupa operaciones de mercadería e importación para facilitar el seguimiento logístico.',
            capabilities: ['Registro de mercadería', 'Seguimiento de operaciones', 'Control de movimientos', 'Consulta de información logística'],
            workflow: ['Registrar ingreso', 'Actualizar movimiento', 'Consultar estado de mercadería'],
            roles: ['Administrador', 'Operaciones', 'Almacén'],
        },
    },
    {
        id: 'local-botica',
        title: 'Sistema Integral de Gestión para Botica',
        description: 'Sistema local de botica con módulos de caja, inventario, ventas, usuarios y dashboard.',
        technologies: 'PHP, MySQL, JavaScript, HTML, CSS',
        image: boticaImage,
        link_live: 'http://localhost:8080/Botica/',
        link_github: '',
        caseStudy: {
            purpose: 'Concentra la operación de una botica para controlar ventas, productos, existencias y usuarios.',
            capabilities: ['Punto de venta y caja', 'Inventario de productos', 'Gestión de usuarios', 'Panel de consulta operativa'],
            workflow: ['Registrar venta', 'Descontar existencias', 'Revisar la operación desde el panel'],
            roles: ['Administrador', 'Cajero', 'Encargado de inventario'],
        },
    },
    {
        id: 'local-salon-belleza',
        title: 'Plataforma de Gestión para Salón de Belleza',
        description: 'Sistema local con módulos de citas, clientes, servicios, inventario, finanzas y cierre de caja.',
        technologies: 'PHP, MySQL, JavaScript, HTML, CSS',
        image: salonBellezaImage,
        link_live: 'http://localhost:8080/salon_belleza/',
        link_github: '',
        caseStudy: {
            purpose: 'Facilita la organización de una estética al reunir citas, clientes, servicios, productos y finanzas.',
            capabilities: ['Agenda de citas', 'Clientes y servicios', 'Inventario de productos', 'Caja y cierre diario'],
            workflow: ['Reservar cita', 'Registrar servicio', 'Cerrar operación del día'],
            roles: ['Administrador', 'Recepción', 'Especialista'],
        },
    },
];
