import React, { useEffect, useRef, useState } from 'react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, CloseIcon, CheckCircleIcon, ImageIcon } from './Icons';

export default function TrabajoModal({ trabajo, onClose }) {
  const dialogRef = useRef(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [trabajo]);

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

  const currentImageSrc = trabajo.imagenes && trabajo.imagenes[activeImgIndex]
    ? trabajo.imagenes[activeImgIndex].src
    : trabajo.imagen;

  const currentImageLabel = trabajo.imagenes && trabajo.imagenes[activeImgIndex]
    ? trabajo.imagenes[activeImgIndex].label
    : trabajo.titulo;

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
        {/* Imagen del trabajo y selector de fotos múltiples */}
        <div className="modal-img-area">
          <div className="modal-main-img-wrap">
            <img
              src={currentImageSrc}
              alt={currentImageLabel}
              key={currentImageSrc}
              className="modal-active-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextSibling) {
                  e.currentTarget.nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="trabajo-placeholder-img" style={{ display: 'none' }}>
              <div className="trabajo-placeholder-icon">
                <ImageIcon size={32} />
              </div>
              <div className="trabajo-placeholder-title">{trabajo.titulo}</div>
              <div className="trabajo-placeholder-hint">Espacio para tu foto en: {currentImageSrc}</div>
            </div>

            {currentImageLabel && (
              <div className="modal-img-caption">
                {currentImageLabel}
              </div>
            )}
          </div>

          {/* Miniaturas interactivas si tiene más de 1 foto (ej. el clóset cerrado y abierto) */}
          {trabajo.imagenes && trabajo.imagenes.length > 1 && (
            <div className="modal-thumbnails-bar">
              {trabajo.imagenes.map((imgItem, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`modal-thumb-btn ${activeImgIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(idx)}
                >
                  <img src={imgItem.src} alt={imgItem.label} className="modal-thumb-img" />
                  <span className="modal-thumb-text">{imgItem.label}</span>
                </button>
              ))}
            </div>
          )}
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
