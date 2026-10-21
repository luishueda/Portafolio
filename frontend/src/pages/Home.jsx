import HeroSection from '../components/hero/HeroSection';
import Services from '../components/Services';
import ProjectsPreview from '../components/ProjectsPreview';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WorkProcess from '../components/WorkProcess';
import usePageMetadata from '../hooks/usePageMetadata';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { search } = useLocation();
    usePageMetadata();

    return <main className="min-h-screen"><HeroSection /><Services /><WorkProcess /><ProjectsPreview /><About /><Contact key={search} /><Footer /></main>;
};

export default Home;
