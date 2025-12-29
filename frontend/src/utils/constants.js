// ===============================
// INFORMACIÓN PERSONAL
// ===============================
export const PERSONAL_INFO = {
    name: "Luis",
    role: "Desarrollador Full Stack",
    location: "Perú",
    availability: "Disponible para proyectos freelance y colaboraciones",
    email: "huedaluis72@gmail.com",
    phone: "+51 993 887 382",
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    whatsapp: "51993887382",
};

// ===============================
// SOBRE MÍ
// ===============================
export const ABOUT_ME = {
    intro: "Desarrollador Full Stack con enfoque práctico y aprendizaje constante. Desde 2023 vengo formándome en desarrollo web, iniciando con fundamentos de programación y evolucionando hacia la creación de aplicaciones completas, APIs REST y sistemas web funcionales. Actualmente desarrollo proyectos de forma independiente, combinando backend robusto y frontend moderno, priorizando siempre la lógica, la escalabilidad y la experiencia del usuario.",

    experience: "1 año y medio",

    focus: "Desarrollo de aplicaciones web completas, con énfasis en backend sólido, integración de APIs y frontend moderno orientado a soluciones reales.",

    learning: [
        "Diseño e implementación de APIs REST",
        "Arquitectura backend con Django",
        "Integración frontend-backend en aplicaciones web",
        "Buenas prácticas de desarrollo y control de versiones",
    ],
};

// ===============================
// TIMELINE DE APRENDIZAJE
// ===============================
export const LEARNING_TIMELINE = [
    {
        year: "2023",
        milestone: "Inicio en programación con Python, fundamentos de programación y lógica computacional."
    },
    {
        year: "2023 - 2024",
        milestone: "Desarrollo web con HTML, CSS y JavaScript. Primeros proyectos utilizando Bootstrap y fundamentos de bases de datos."
    },
    {
        year: "2024",
        milestone: "Implementación de backend con Django y Django REST Framework. Creación de APIs propias y pruebas con Postman."
    },
    {
        year: "2024",
        milestone: "Introducción al desarrollo backend con Java y Spring Boot, enfocándose en servicios y APIs REST."
    },
    {
        year: "2024 - 2025",
        milestone: "Integración de backend con frontend moderno utilizando React y Tailwind CSS. Desarrollo de proyectos personales e independientes."
    },
];

// ... (Tus otras constantes ABOUT_ME, LEARNING_TIMELINE, etc. déjalas igual)

// ===============================
// SKILLS (ACTUALIZADO: Niveles cualitativos)
// ===============================
export const SKILLS = [
    {
        category: "Frontend",
        items: [
            { name: "CSS / Tailwind", level: "Avanzado", color: "text-emerald-400 bg-emerald-400/10" },
            { name: "HTML", level: "Intermedio", color: "text-blue-400 bg-blue-400/10" },
            { name: "Bootstrap", level: "Intermedio", color: "text-blue-400 bg-blue-400/10" },
            { name: "JavaScript", level: "En aprendizaje", color: "text-yellow-400 bg-yellow-400/10" },
            { name: "React", level: "En aprendizaje", color: "text-yellow-400 bg-yellow-400/10" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "MySQL / PostgreSQL", level: "Avanzado", color: "text-emerald-400 bg-emerald-400/10" },
            { name: "Python", level: "Intermedio", color: "text-blue-400 bg-blue-400/10" },
            { name: "PHP", level: "Intermedio", color: "text-blue-400 bg-blue-400/10" },
            { name: "Django", level: "En aprendizaje", color: "text-yellow-400 bg-yellow-400/10" },
        ],
    },
    {
        category: "Herramientas",
        items: [
            { name: "VS Code", level: "Avanzado", color: "text-emerald-400 bg-emerald-400/10" },
            { name: "Git / GitHub", level: "Intermedio", color: "text-blue-400 bg-blue-400/10" },
            { name: "Postman", level: "Intermedio", color: "text-blue-400 bg-blue-400/10" },
        ],
    },
];

// Soft Skills (Añádelo también si quieres tenerlo centralizado)
export const SOFT_SKILLS = ["Autodidacta", "Resolución de Problemas", "Adaptabilidad", "Trabajo en Equipo"];