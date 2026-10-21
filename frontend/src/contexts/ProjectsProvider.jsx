import { useCallback, useRef, useState } from 'react';
import ProjectsContext from './projectsContext';

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [status, setStatus] = useState('idle');
    const requestInProgress = useRef(false);

    const loadProjects = useCallback(async () => {
        if (requestInProgress.current) return;

        requestInProgress.current = true;
        setStatus('loading');

        try {
            const response = await fetch(`${import.meta.env.BASE_URL}content/projects.json`);
            if (!response.ok) throw new Error('No se pudo cargar el catálogo.');

            const data = await response.json();
            setProjects(Array.isArray(data.projects) ? data.projects : []);
            setStatus('success');
        } catch {
            setProjects([]);
            setStatus('error');
        } finally {
            requestInProgress.current = false;
        }
    }, []);

    return <ProjectsContext.Provider value={{ projects, status, loadProjects }}>{children}</ProjectsContext.Provider>;
};
