import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTerminal = () => {
    const [showCursor, setShowCursor] = useState(true);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) return undefined;
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, [shouldReduceMotion]);

    const terminalCode = 'const developer = "Luis";\ndeveloper.stack = ["React", "Django", "APIs REST"];\ndeveloper.build("soluciones_a_medida");\n// ✓ Listo para crear tu próximo proyecto';

    return (
        <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-5 shadow-2xl shadow-slate-950/50 backdrop-blur-md sm:p-6 font-mono text-sm">
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
                        {shouldReduceMotion ? (
                            <pre className="whitespace-pre-wrap text-gray-300">{terminalCode}</pre>
                        ) : (
                            <TypeAnimation sequence={[terminalCode]} wrapper="pre" speed={42} className="whitespace-pre-wrap text-gray-300" repeat={0} />
                        )}
                    </div>

                    {/* Blinking Cursor */}
                    <div className="flex items-center">
                        <span className="text-accent mr-2">$</span>
                        <span className={`inline-block h-4 w-2 bg-accent ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity motion-reduce:opacity-100`}></span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AnimatedTerminal;
