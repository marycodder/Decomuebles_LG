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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img
                src="/logo.png"
                alt="Logo DecoMuebles LG"
                className="brand-logo-img"
                style={{ width: '40px', height: '40px' }}
              />
              <h3 style={{ margin: 0 }}>{siteConfig.brandName}</h3>
            </div>

            <p>
              Especialistas en asesoría, diseño, fabricación e instalación de todo tipo de muebles,
              100% personalizados para cocinas, clósets, baños, centros de mesa, libreros, estanterías, repisas
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
              <li><a href="#trabajos">Trabajos realizados</a></li>
              <li><a href="#proceso">Cómo trabajamos</a></li>
              <li><a href="#cotizador">Cotizador online</a></li>
            </ul>
          </div>

          {/* Especialidades */}
          <div className="footer-col">
            <h4>Especialidades</h4>
            <ul className="footer-links">
              <li><a href="#trabajos">Cocinas integrales</a></li>
              <li><a href="#trabajos">Clósets y vestidores</a></li>
              <li><a href="#trabajos">Muebles de baño y vanitorios</a></li>
              <li><a href="#trabajos">Centros de TV y living</a></li>
              <li><a href="#trabajos">Muebles comerciales y oficinas</a></li>
            </ul>
          </div>

          {/* Datos de Contacto */}
          <div className="footer-col">
            <h4>Contacto directo</h4>
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
