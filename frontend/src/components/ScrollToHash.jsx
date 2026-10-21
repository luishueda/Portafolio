import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            if (hash) {
                document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.scrollTo({ top: 0, behavior: 'auto' });
            }
        });

        return () => cancelAnimationFrame(frame);
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
