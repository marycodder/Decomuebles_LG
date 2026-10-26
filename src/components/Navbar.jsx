import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MapPinIcon, MenuIcon, CloseIcon } from './Icons';

export default function Navbar({ activeSection = 'inicio', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    closeMenu();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      window.location.hash = sectionId;
    }
  };

  return (
    <header className="navbar-wrapper">
      {/* Barra de ubicación superior */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-item">
            <MapPinIcon size={14} />
            <span>{siteConfig.location}</span>
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
        <a
          href="#inicio"
          className="brand-logo"
          onClick={(e) => handleNavClick('inicio', e)}
        >
          <img
            src="/logo.png"
            alt="Logo DecoMuebles LG"
            className="brand-logo-img"
          />
          <div className="brand-name">
            {siteConfig.brandName}
            <span>Muebles a medida</span>
          </div>
        </a>

        {/* Links de navegación */}
        <ul className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
          <li>
            <a
              href="#inicio"
              className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('inicio', e)}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('servicios', e)}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#trabajos"
              className={`nav-link ${activeSection === 'trabajos' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('trabajos', e)}
            >
              Trabajos realizados
            </a>
          </li>
          <li>
            <a
              href="#proceso"
              className={`nav-link ${activeSection === 'proceso' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('proceso', e)}
            >
              Proceso
            </a>
          </li>
          <li>
            <a
              href="#cotizador"
              className={`nav-link ${activeSection === 'cotizador' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('cotizador', e)}
            >
              Cotizador
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa para móvil */}
        <div className="nav-cta">
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
