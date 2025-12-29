import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../api';
import HeroSection from '../components/hero/HeroSection';
import HeroProjectCard from '../components/projects/HeroProjectCard';
import FeaturedProjectCard from '../components/projects/FeaturedProjectCard';
import StandardProjectCard from '../components/projects/StandardProjectCard';
import About from '../components/About';
import Contact from '../components/Contact';


const Home = () => {
    const [projects, setProjects] = useState({ hero: null, featured: [], standard: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('projects/')
            .then(response => {
                const data = response.data;

                // Clasificar proyectos:
                // - Primer proyecto = hero
                // - Proyectos 2-3 = featured
                // - Resto = standard
                const hero = data[0] || null;
                const featured = data.slice(1, 3) || [];
                const standard = data.slice(3) || [];

                setProjects({ hero, featured, standard });
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al cargar proyectos:", error);
                setLoading(false);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen">
            {/* HERO SECTION */}
            <HeroSection />

            {/* PROJECTS SECTION */}
            <section id="proyectos" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                                Proyectos <span className="text-gradient">Destacados</span>
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-light rounded-full"></div>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base">
                            Explora mis creaciones más recientes
                        </p>
                    </motion.div>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-20">
                            <div className="inline-block w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
                            <p className="text-gray-400 mt-4">Cargando proyectos...</p>
                        </div>
                    )}

                    {/* Hero Project */}
                    {!loading && projects.hero && (
                        <HeroProjectCard project={projects.hero} />
                    )}

                    {/* Featured Projects */}
                    {!loading && projects.featured.length > 0 && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                        >
                            {projects.featured.map((project) => (
                                <motion.div key={project.id} variants={itemVariants}>
                                    <FeaturedProjectCard project={project} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Standard Projects */}
                    {!loading && projects.standard.length > 0 && (
                        <>
                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                    Más Proyectos
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Otros trabajos y experimentos
                                </p>
                            </div>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-100px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {projects.standard.map((project) => (
                                    <motion.div key={project.id} variants={itemVariants}>
                                        <StandardProjectCard project={project} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </>
                    )}

                    {/* Empty State */}
                    {!loading && !projects.hero && projects.featured.length === 0 && projects.standard.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400">No hay proyectos disponibles aún.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ABOUT SECTION */}
            <About />

            {/* CONTACT SECTION */}
            <Contact />

        </div>
    );
};

export default Home;