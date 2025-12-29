import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTerminal = () => {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl mx-auto mb-12"
        >
            <div className="glass rounded-xl p-6 shadow-2xl font-mono text-sm">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-xs ml-2">terminal.js</span>
                </div>

                {/* Terminal Content */}
                <div className="space-y-2">
                    <div className="flex items-start">
                        <span className="text-accent mr-2">$</span>
                        <TypeAnimation
                            sequence={[
                                'const developer = "Luis";',
                                1000,
                                'const developer = "Luis";\ndeveloper.skills = ["Django", "React", "PostgreSQL"];',
                                1000,
                                'const developer = "Luis";\ndeveloper.skills = ["Django", "React", "PostgreSQL"];\ndeveloper.build("amazing_projects");',
                                1000,
                                'const developer = "Luis";\ndeveloper.skills = ["Django", "React", "PostgreSQL"];\ndeveloper.build("amazing_projects");\n// ✓ Portfolio cargado exitosamente',
                            ]}
                            wrapper="pre"
                            speed={50}
                            className="text-gray-300 whitespace-pre-wrap"
                            repeat={0}
                        />
                    </div>

                    {/* Blinking Cursor */}
                    <div className="flex items-center">
                        <span className="text-accent mr-2">$</span>
                        <span className={`inline-block w-2 h-4 bg-accent ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AnimatedTerminal;