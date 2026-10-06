import React, { useState } from 'react';
import { categoriasTrabajos, trabajosRealizados } from '../data/trabajos';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, ZoomIcon, ImageIcon } from './Icons';
import TrabajoModal from './TrabajoModal';

export default function Trabajos() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);

  // Filtrado de proyectos
  const trabajosFiltrados = categoriaActiva === "Todos"
    ? trabajosRealizados
    : trabajosRealizados.filter(t => t.categoria === categoriaActiva);

  return (
    <section id="trabajos" className="section trabajos-section">
      <div className="container">

        <div className="section-header">
          <div className="section-tag tag-warm">Portafolio & Galería</div>
          <h2 className="section-title">Trabajos Realizados</h2>
          <p className="section-subtitle">
            Explora algunos de nuestros proyectos fabricados e instalados. 
            Cada espacio refleja la combinación perfecta entre diseño contemporáneo y máxima funcionalidad.
          </p>
        </div>

        {/* Barra de Filtros por Categoría */}
        <div className="trabajos-filter-bar" role="tablist" aria-label="Categorías de proyectos">
          {categoriasTrabajos.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${categoriaActiva === cat ? 'active' : ''}`}
              onClick={() => setCategoriaActiva(cat)}
              role="tab"
              aria-selected={categoriaActiva === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Proyectos */}
        <div className="trabajos-grid">
          {trabajosFiltrados.map((trabajo) => {
            const whatsappMsg = `¡Hola DecoMuebles LG! 👋 Vi el trabajo "${trabajo.titulo}" (${trabajo.categoria}) en su web y me gustaría consultar por algo similar.`;

            return (
              <article key={trabajo.id} className="trabajo-card">
                
                {/* Contenedor de la Imagen / Fallback */}
                <div 
                  className="trabajo-img-wrap"
                  onClick={() => setTrabajoSeleccionado(trabajo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setTrabajoSeleccionado(trabajo);
                    }
                  }}
                  aria-label={`Ver detalles de ${trabajo.titulo}`}
                >
                  <span className="trabajo-badge-cat">{trabajo.categoria}</span>

                  <img 
                    src={trabajo.imagen} 
                    alt={trabajo.titulo} 
                    className="trabajo-img"
                    loading="lazy"
                    onError={(e) => {
                      // Si la foto aún no ha sido agregada por el usuario en public/fotos/
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement.querySelector('.trabajo-placeholder-img');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* Fallback elegante cuando la foto aún está pendiente de subida */}
                  <div className="trabajo-placeholder-img" style={{ display: 'none' }}>
                    <div className="trabajo-placeholder-icon">
                      <ImageIcon size={28} />
                    </div>
                    <div className="trabajo-placeholder-title">{trabajo.titulo}</div>
                    <div className="trabajo-placeholder-hint">Sube tu foto a {trabajo.imagen}</div>
                  </div>

                  <div className="trabajo-overlay">
                    <span className="trabajo-zoom-badge">
                      <ZoomIcon size={16} />
                      <span>Ver Proyecto</span>
                    </span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="trabajo-body">
                  <h3 className="trabajo-title">{trabajo.titulo}</h3>
                  <p className="trabajo-desc">{trabajo.descripcion}</p>

                  {trabajo.materiales && (
                    <div className="trabajo-tags">
                      {trabajo.materiales.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="trabajo-tag-chip">{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="trabajo-actions">
                    <button 
                      type="button" 
                      className="btn-detail"
                      onClick={() => setTrabajoSeleccionado(trabajo)}
                    >
                      Ver Detalle
                    </button>
                    <a 
                      href={getWhatsAppUrl(whatsappMsg)}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-quote"
                      title="Cotizar este modelo por WhatsApp"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* Banner informativo para que el usuario sepa cómo subir sus fotos */}
        <div className="upload-help-banner">
          <div className="upload-help-content">
            <h4>📁 ¿Cómo subir tus propias fotos?</h4>
            <p>
              Simplemente guarda tus fotos en la carpeta <strong>public/fotos/</strong> de este proyecto 
              y actualiza los nombres en el archivo <strong>src/data/trabajos.js</strong>. ¡Se actualizarán al instante!
            </p>
          </div>
          <a href="#cotizador" className="btn btn-dark" style={{ whiteSpace: 'nowrap' }}>
            Ir al Cotizador
          </a>
        </div>

      </div>

      {/* Modal de Detalle */}
      <TrabajoModal 
        trabajo={trabajoSeleccionado} 
        onClose={() => setTrabajoSeleccionado(null)} 
      />
    </section>
  );
}
