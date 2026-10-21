import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const MagneticButton = ({ children, href, className = '', primary = false }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const shouldReduceMotion = useReducedMotion();

    const handleMouseMove = (e) => {
        if (!buttonRef.current || shouldReduceMotion) return;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) * 0.3;
        const y = (e.clientY - top - height / 2) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={buttonRef}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={shouldReduceMotion ? undefined : { x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={`
                relative inline-flex items-center justify-center
                gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                overflow-hidden group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
                ${primary
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50'
                    : 'border border-white/20 bg-slate-950/40 text-white hover:border-emerald-400/60 hover:bg-white/5'
                }
                transition-all duration-300
                ${className}
            `}
        >
            {/* Shine effect para primary */}
            {primary && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            )}

            {/* Glow effect para secondary */}
            {!primary && (
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-300"></div>
            )}

            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </motion.a>
    );
};

export default MagneticButton;
