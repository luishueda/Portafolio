import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, href, onClick, className = '', primary = false }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseClasses = `px-8 py-3 rounded-full font-bold transition-all duration-300 inline-block ${className}`;
    const variants = primary
        ? 'bg-accent text-dark hover:bg-accent-light glow-accent'
        : 'border border-white/20 hover:bg-white/5 hover:border-white/40';

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            href={href}
            onClick={onClick}
            className={`${baseClasses} ${variants}`}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </Component>
    );
};

export default MagneticButton;