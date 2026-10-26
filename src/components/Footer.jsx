import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, MailIcon, ClockIcon, InstagramIcon } from './Icons';

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
        <div className="footer-top footer-simplified">

          {/* Logo, Marca e Íconos de Redes Sociales */}
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img
                src="/logo.png"
                alt="Logo DecoMuebles LG"
                className="brand-logo-img"
                style={{ width: '48px', height: '48px' }}
              />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#FFFFFF' }}>
                  {siteConfig.brandName}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--clr-warm-wood)', fontWeight: 600, letterSpacing: '0.5px' }}>
                  Muebles a medida
                </span>
              </div>
            </div>

            {/* Íconos sociales */}
            <div className="footer-socials" style={{ marginTop: '20px' }}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram de DecoMuebles LG"
                title="Síguenos en Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
                title="Escríbenos a WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-social-link"
                aria-label="Correo electrónico"
                title="Envíanos un correo"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>

          {/* Contacto directo con acceso a Instagram */}
          <div className="footer-col">
            <h4>Contacto directo</h4>
            <div className="footer-contact-items">

              {/* Acceso directo a Instagram */}
              <div className="footer-contact-item">
                <InstagramIcon size={18} />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-instagram-link"
                  title="Visitar cuenta de Instagram"
                >
                  Instagram: <strong>{siteConfig.instagram}</strong> ↗
                </a>
              </div>

              {/* WhatsApp directo */}
              <div className="footer-contact-item">
                <WhatsAppIcon size={18} />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </div>

              {/* Correo */}
              <div className="footer-contact-item">
                <MailIcon size={18} />
                <a href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>

              {/* Horario de atención */}
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
