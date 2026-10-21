# 🚀 Mi Portafolio Profesional - Luis Hueda

Bienvenido a mi repositorio. Aquí encontrarás el código fuente de mi portafolio personal, construido con una arquitectura moderna y escalable.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React.js**: Biblioteca principal para la interfaz.
- **Tailwind CSS**: Estilizado moderno y responsivo.
- **Framer Motion**: Animaciones fluidas y profesionales.
- **Lucide React**: Iconografía minimalista.

### Backend
- **Django & Django REST Framework**: API robusta y segura.
- **SQLite**: Base de datos para gestión de proyectos y mensajes.
- **Gmail SMTP**: Sistema de notificaciones por correo electrónico.

## ✨ Características Principales
- **Gestión Dinámica**: Proyectos editables desde el Django Admin.
- **Seguridad**: Implementación de variables de entorno (`.env`) para proteger credenciales.
- **Contacto**: Formulario funcional con validación y envío de correos automáticos.
- **Responsive Design**: Optimizado para dispositivos móviles y escritorio.

## 🔧 Instalación Local

1. Clona el repositorio: `git clone https://github.com/luishueda/Portafolio.git`
2. Configura el Backend:
   - Crea un entorno virtual: `python -m venv venv`
   - Instala dependencias: `pip install -r requirements.txt`
   - Configura tu `.env` con las credenciales necesarias.
3. Configura el Frontend:
   - Instala paquetes: `npm install`
   - Inicia: `npm run dev`

## Rutas del frontend

El portafolio utiliza rutas del lado del cliente: `/`, `/servicios` y `/proyectos`. En producción, el hosting estático debe redirigir las rutas no encontradas a `index.html` para que React Router pueda resolverlas al recargar directamente una página interna. Esta configuración debe realizarse en el proveedor de hosting; no forma parte del código de la aplicación.

---
💻 Desarrollado por [Luis Hueda](https://linkedin.com/in/tu-perfil)
