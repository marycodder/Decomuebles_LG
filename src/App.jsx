import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Trabajos from './components/Trabajos';
import Process from './components/Process';
import CotizadorWhatsApp from './components/CotizadorWhatsApp';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Sincronización bidireccional con el hash de la URL
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['trabajos', 'proceso', 'cotizador'].includes(hash)) {
        setActiveSection(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'servicios') {
        setActiveSection('inicio');
        setTimeout(() => {
          const el = document.getElementById('servicios');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setActiveSection('inicio');
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleNavigate = (section) => {
    if (section === 'servicios') {
      window.location.hash = 'servicios';
      if (activeSection !== 'inicio') {
        setActiveSection('inicio');
        setTimeout(() => {
          const el = document.getElementById('servicios');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        const el = document.getElementById('servicios');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setActiveSection(section);
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Barra de Navegación fija con selector de secciones */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Contenido Principal por sección */}
      <main id="main-content">
        {/* Sección Inicio: Solo Hero + Lo que hacemos (Servicios) */}
        {activeSection === 'inicio' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services />
          </>
        )}

        {/* Sección Trabajos Realizados */}
        {activeSection === 'trabajos' && (
          <Trabajos onNavigate={handleNavigate} />
        )}

        {/* Sección Proceso de Trabajo */}
        {activeSection === 'proceso' && (
          <Process onNavigate={handleNavigate} />
        )}

        {/* Sección Cotizador */}
        {activeSection === 'cotizador' && (
          <CotizadorWhatsApp onNavigate={handleNavigate} />
        )}
      </main>

      {/* Pie de página */}
      <Footer onNavigate={handleNavigate} />

      {/* Botón flotante persistente de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
