import './App.css';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import ScrollToHash from './components/ScrollToHash';
import { ProjectsProvider } from './contexts/ProjectsProvider';

function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
      {/* Barra de progreso de scroll */}
      <ScrollProgress />

      {/* Navegación */}
      <Navbar />

      <ScrollToHash />

      <ProjectsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="/soluciones/:slug" element={<ProjectDetailPage commercial />} />
        </Routes>
      </ProjectsProvider>

      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp />
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
