import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MapPinIcon, MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

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
        <a href="#inicio" className="brand-logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Logo DecoMuebles LG"
            className="brand-logo-img"
          />
          <div className="brand-name">
            {siteConfig.brandName}
            <span>Muebles a Medida</span>
          </div>
        </a>

        {/* Links de navegación */}
        <ul className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
          <li>
            <a href="#inicio" className="nav-link" onClick={closeMenu}>Inicio</a>
          </li>
          <li>
            <a href="#servicios" className="nav-link" onClick={closeMenu}>Servicios</a>
          </li>
          <li>
            <a href="#trabajos" className="nav-link" onClick={closeMenu}>Trabajos realizados</a>
          </li>
          <li>
            <a href="#proceso" className="nav-link" onClick={closeMenu}>Proceso</a>
          </li>
          <li>
            <a href="#cotizador" className="nav-link" onClick={closeMenu}>Cotizador</a>
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
