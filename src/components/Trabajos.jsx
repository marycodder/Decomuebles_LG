import React, { useState } from 'react';
import { categoriasTrabajos, trabajosRealizados } from '../data/trabajos';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, ZoomIcon, ImageIcon } from './Icons';
import TrabajoModal from './TrabajoModal';

// Subcomponente de tarjeta de trabajo para manejar estado local de imagen (ej: cerrado/abierto)
function TrabajoCard({ trabajo, onOpenModal }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const hasMultipleImages = trabajo.imagenes && trabajo.imagenes.length > 1;
  const currentImg = hasMultipleImages ? trabajo.imagenes[activeImgIndex].src : trabajo.imagen;
  const currentLabel = hasMultipleImages ? trabajo.imagenes[activeImgIndex].label : trabajo.titulo;

  const whatsappMsg = `¡Hola DecoMuebles LG! 👋 Vi el trabajo "${trabajo.titulo}" (${trabajo.categoria}) en su web y me gustaría consultar por algo similar.`;

  return (
    <article className="trabajo-card">
      {/* Contenedor de la Imagen */}
      <div
        className="trabajo-img-wrap"
        onClick={() => onOpenModal(trabajo)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onOpenModal(trabajo);
          }
        }}
        aria-label={`Ver detalles de ${trabajo.titulo}`}
      >
        <span className="trabajo-badge-cat">{trabajo.categoria}</span>

        {/* Indicador / Selector si tiene 2 fotos (como el closet cerrado y abierto) */}
        {hasMultipleImages && (
          <div
            className="trabajo-photo-switcher"
            onClick={(e) => e.stopPropagation()}
          >
            {trabajo.imagenes.map((imgItem, idx) => (
              <button
                key={idx}
                type="button"
                className={`photo-switch-btn ${activeImgIndex === idx ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex(idx);
                }}
                title={imgItem.label}
              >
                {idx === 0 ? 'Cerrado' : 'Abierto'}
              </button>
            ))}
          </div>
        )}

        <img
          src={currentImg}
          alt={currentLabel}
          key={currentImg}
          className="trabajo-img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.parentElement.querySelector('.trabajo-placeholder-img');
            if (fallback) fallback.style.display = 'flex';
          }}
        />

        {/* Fallback elegante */}
        <div className="trabajo-placeholder-img" style={{ display: 'none' }}>
          <div className="trabajo-placeholder-icon">
            <ImageIcon size={28} />
          </div>
          <div className="trabajo-placeholder-title">{trabajo.titulo}</div>
          <div className="trabajo-placeholder-hint">Foto: {currentImg}</div>
        </div>

        <div className="trabajo-overlay">
          <span className="trabajo-zoom-badge">
            <ZoomIcon size={16} />
            <span>Ver Proyecto {hasMultipleImages ? '(2 Fotos)' : ''}</span>
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
            onClick={() => onOpenModal(trabajo)}
          >
            Ver Detalle {hasMultipleImages ? '(2 Fotos)' : ''}
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
}

export default function Trabajos({ onNavigate }) {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);

  // Filtrado de proyectos
  const trabajosFiltrados = categoriaActiva === "Todos"
    ? trabajosRealizados
    : trabajosRealizados.filter(t => t.categoria === categoriaActiva);

  return (
    <section id="trabajos" className="section trabajos-section">
      <div className="container">

        {/* Barra superior con navegación de regreso si aplica */}
        {onNavigate && (
          <div className="section-breadcrumb-bar">
            <button
              type="button"
              className="breadcrumb-back-btn"
              onClick={() => onNavigate('inicio')}
            >
              ← Volver al inicio
            </button>
          </div>
        )}

        <div className="section-header">
          <div className="section-tag tag-warm">Portafolio y galería</div>
          <h2 className="section-title">Trabajos realizados</h2>
          <p className="section-subtitle">
            Explora algunos de nuestros proyectos fabricados e instalados a medida.
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
          {trabajosFiltrados.map((trabajo) => (
            <TrabajoCard
              key={trabajo.id}
              trabajo={trabajo}
              onOpenModal={(t) => setTrabajoSeleccionado(t)}
            />
          ))}
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
