import React, { useState } from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, PhoneIcon, MapPinIcon, MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      {/* Barra de contacto superior */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-item">
            <MapPinIcon size={14} />
            <span>{siteConfig.location}</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="top-bar-item">
              <PhoneIcon size={14} />
              <a href={`tel:${siteConfig.whatsappNumber}`}>{siteConfig.whatsappDisplay}</a>
            </div>
            <div className="top-bar-item">
              <WhatsAppIcon size={14} />
              <a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Atención rápida vía WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Franja con los colores de la paleta */}
      <div className="palette-strip">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navegación principal */}
      <nav className="container navbar">
        <a href="#inicio" className="brand-logo" onClick={closeMenu}>
          <div className="brand-mark" aria-label="Logo DecoMuebles LG">
            {/* Símbolo geométrico de carpintería */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="6" rx="1" fill="#F2A663" />
              <rect x="3" y="11" width="8" height="10" rx="1" fill="#D9BE36" />
              <rect x="13" y="11" width="8" height="10" rx="1" fill="#C9DFF2" />
            </svg>
          </div>
          <div className="brand-name">
            {siteConfig.brandName}
            <span>Muebles a Medida</span>
          </div>
        </a>

        {/* Links de escritorio y móvil */}
        <ul className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
          <li>
            <a href="#inicio" className="nav-link" onClick={closeMenu}>Inicio</a>
          </li>
          <li>
            <a href="#servicios" className="nav-link" onClick={closeMenu}>Servicios</a>
          </li>
          <li>
            <a href="#trabajos" className="nav-link" onClick={closeMenu}>Trabajos Realizados</a>
          </li>
          <li>
            <a href="#proceso" className="nav-link" onClick={closeMenu}>Proceso</a>
          </li>
          <li>
            <a href="#cotizador" className="nav-link" onClick={closeMenu}>Cotizador</a>
          </li>
          <li className="mobile-only" style={{ marginTop: '12px' }}>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp" 
              style={{ width: '100%' }}
              onClick={closeMenu}
            >
              <WhatsAppIcon size={18} />
              <span>Cotizar por WhatsApp</span>
            </a>
          </li>
        </ul>

        {/* CTA en Desktop */}
        <div className="nav-cta">
          <a 
            href={getWhatsAppUrl()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            <WhatsAppIcon size={18} />
            <span>Cotizar en WhatsApp</span>
          </a>

          {/* Botón hamburguesa móvil */}
          <button 
            type="button" 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
