import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Trabajos from './components/Trabajos';
import Process from './components/Process';
import CotizadorWhatsApp from './components/CotizadorWhatsApp';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="app-layout">
      {/* Barra de Navegación */}
      <Navbar />

      {/* Contenido Principal */}
      <main id="main-content">
        {/* Hero con el mensaje cálido y llamado a la acción */}
        <Hero />

        {/* Pilares de confianza y calidad */}
        <Pillars />

        {/* Servicios que ofrecemos */}
        <Services />

        {/* Apartado de Trabajos Realizados preparado para fotos */}
        <Trabajos />

        {/* Proceso de trabajo paso a paso */}
        <Process />

        {/* Cotizador Interactivo para WhatsApp */}
        <CotizadorWhatsApp />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante persistente de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
