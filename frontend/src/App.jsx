import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <>
      {/* Barra de progreso de scroll */}
      <ScrollProgress />

      {/* Navegación */}
      <Navbar />

      {/* Página principal */}
      <Home />

      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp />
    </>
  );
}

export default App;