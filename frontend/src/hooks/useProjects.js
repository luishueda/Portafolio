import { useContext } from 'react';
import ProjectsContext from '../contexts/projectsContext';

const useProjects = () => {
    const context = useContext(ProjectsContext);
    if (!context) throw new Error('useProjects debe utilizarse dentro de ProjectsProvider.');
    return context;
};

export default useProjects;
