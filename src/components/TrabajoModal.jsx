import React, { useEffect, useRef } from 'react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, CloseIcon, CheckCircleIcon, ImageIcon } from './Icons';

export default function TrabajoModal({ trabajo, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (trabajo) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    // Fallback de "light-dismiss" para navegadores antiguos que no soportan closedby="any"
    const handleBackdropClick = (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInside) {
        onClose();
      }
    };

    dialog.addEventListener('click', handleBackdropClick);
    return () => dialog.removeEventListener('click', handleBackdropClick);
  }, [trabajo, onClose]);

  if (!trabajo) return null;

  const quoteMessage = `¡Hola DecoMuebles LG! Vi en su página web el proyecto "${trabajo.titulo}" (${trabajo.categoria}) y me gustaría cotizar un mueble similar para mi hogar. ¿Podrían orientarme?`;

  return (
    <dialog
      ref={dialogRef}
      className="trabajo-modal"
      closedby="any"
      aria-labelledby="modal-trabajo-title"
      onClose={onClose}
    >
      <div className="modal-header-bar">
        <div className="modal-title-wrap">
          <span>{trabajo.categoria}</span>
          <h3 id="modal-trabajo-title">{trabajo.titulo}</h3>
        </div>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <CloseIcon size={20} />
        </button>
      </div>

      <div className="modal-content-grid">
        {/* Imagen del trabajo o fallback si aún no la ha subido */}
        <div className="modal-img-area">
          <img
            src={trabajo.imagen}
            alt={trabajo.titulo}
            onError={(e) => {
              // Si la foto no existe aún en public/fotos/, mostrar un reemplazo limpio
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="trabajo-placeholder-img" style={{ display: 'none' }}>
            <div className="trabajo-placeholder-icon">
              <ImageIcon size={32} />
            </div>
            <div className="trabajo-placeholder-title">{trabajo.titulo}</div>
            <div className="trabajo-placeholder-hint">Espacio para tu foto en: {trabajo.imagen}</div>
          </div>
        </div>

        {/* Información y especificaciones */}
        <div className="modal-info-area">
          <p className="modal-desc">{trabajo.descripcion}</p>

          {trabajo.materiales && trabajo.materiales.length > 0 && (
            <div>
              <h4 className="modal-materials-title">Materiales y componentes:</h4>
              <ul className="modal-materials-list">
                {trabajo.materiales.map((m, idx) => (
                  <li key={idx}>
                    <CheckCircleIcon size={16} />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-cta-box">
            <p>¿Te gustaría un diseño similar adaptado a las medidas de tu espacio?</p>
            <a
              href={getWhatsAppUrl(quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <WhatsAppIcon size={20} />
              <span>Cotizar este mueble por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
