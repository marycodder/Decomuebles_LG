import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon, ClockIcon, InstagramIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Franja de la paleta oficial */}
      <div className="palette-strip" style={{ position: 'absolute', top: 0, left: 0 }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="container">
        <div className="footer-top">

          {/* Marca y Presentación */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div className="brand-mark" style={{ width: '38px', height: '38px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="18" height="6" rx="1" fill="#F2A663" />
                  <rect x="3" y="11" width="8" height="10" rx="1" fill="#D9BE36" />
                  <rect x="13" y="11" width="8" height="10" rx="1" fill="#C9DFF2" />
                </svg>
              </div>
              <h3 style={{ margin: 0 }}>{siteConfig.brandName}</h3>
            </div>

            <p>
              Especialistas en asesoría, diseño, fabricación e instalación de muebles
              100% personalizados para cocinas, clósets, baños y remodelaciones integrales.
            </p>

            <div className="footer-socials">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-social-link"
                aria-label="Correo"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>

          {/* Menú Rápido */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#trabajos">Trabajos Realizados</a></li>
              <li><a href="#proceso">Cómo Trabajamos</a></li>
              <li><a href="#cotizador">Cotizador Online</a></li>
            </ul>
          </div>

          {/* Especialidades */}
          <div className="footer-col">
            <h4>Especialidades</h4>
            <ul className="footer-links">
              <li><a href="#trabajos">Cocinas Integrales</a></li>
              <li><a href="#trabajos">Clósets & Vestidores</a></li>
              <li><a href="#trabajos">Vanitorios Flotantes</a></li>
              <li><a href="#trabajos">Centros de TV & Living</a></li>
              <li><a href="#trabajos">Muebles Comerciales</a></li>
            </ul>
          </div>

          {/* Datos de Contacto */}
          <div className="footer-col">
            <h4>Contacto Directo</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <WhatsAppIcon size={18} />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  {siteConfig.whatsappDisplay}
                </a>
              </div>
              <div className="footer-contact-item">
                <MailIcon size={18} />
                <a href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <MapPinIcon size={18} />
                <span>{siteConfig.location}</span>
              </div>
              <div className="footer-contact-item">
                <ClockIcon size={18} />
                <span>{siteConfig.horario}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra inferior de derechos */}
        <div className="footer-bottom">
          <div>
            © {currentYear} <strong>{siteConfig.brandName}</strong>. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
