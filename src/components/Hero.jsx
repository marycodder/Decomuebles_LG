import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import {
  WhatsAppIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RulerIcon,
  ShieldCheckIcon,
  ToolsIcon,
  SparklesIcon
} from './Icons';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* Contenido textual del Hero */}
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-pill-indicator"></span>
              <span>Mueblería y carpintería a medida en Chile</span>
            </div>

            {/* Mensaje cálido principal solicitado por el usuario */}
            <div className="hero-quote-box">
              <h1 className="hero-message">
                "{siteConfig.heroMessage}"
              </h1>
            </div>

            <p className="hero-description">
              Transformamos tus espacios en lugares funcionales, elegantes y duraderos.
              Trabajamos con materiales de primera calidad, cantos termofusionados y herrajes
              de cierre suave para que disfrutes de tu hogar con la máxima comodidad.
            </p>

            <div className="hero-actions">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '16px 32px', fontSize: '1.05rem' }}
              >
                <WhatsAppIcon size={22} />
                <span>Cotizar por WhatsApp</span>
              </a>

              <a href="#trabajos" className="btn btn-outline" style={{ padding: '16px 28px' }}>
                <span>Ver trabajos realizados</span>
                <ArrowRightIcon size={18} />
              </a>
            </div>

            {/* Badges de confianza */}
            <div className="hero-badges-row">
              <div className="hero-badge-item">
                <CheckCircleIcon size={18} className="hero-badge-icon" />
                <span>Fabricación 100% a medida</span>
              </div>
              <div className="hero-badge-item">
                <CheckCircleIcon size={18} className="hero-badge-icon" />
                <span>Bisagras y correderas de cierre suave</span>
              </div>
              <div className="hero-badge-item">
                <CheckCircleIcon size={18} className="hero-badge-icon" />
                <span>Instalación limpia y precisa</span>
              </div>
            </div>
          </div>

          {/* Tarjeta Visual de Presentación con los Pilares de Calidad */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-pattern"></div>

              <div className="hero-card-header">
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--clr-dark-wood)' }}>Estándares de calidad</h3>
                  <p style={{ fontSize: '0.85rem' }}>Compromiso y excelencia en cada detalle</p>
                </div>
              </div>

              {/* Pilares integrados en la tarjeta visual */}
              <div className="hero-card-features">
                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <RulerIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Diseño 100% a tu medida</h4>
                    <p className="hero-feature-desc">Aprovechamos cada milímetro de tu espacio disponible con precisión.</p>
                  </div>
                </div>

                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <ShieldCheckIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Melaminas & cantos sellados</h4>
                    <p className="hero-feature-desc">Tableros de 18mm y tapacantos termofusionados de alta durabilidad.</p>
                  </div>
                </div>

                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <ToolsIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Bisagras y correderas con sistema de cierre suave</h4>
                    <p className="hero-feature-desc">Bisagras hidráulicas y correderas silenciosas de alta gama.</p>
                  </div>
                </div>

                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <SparklesIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Instalación profesional</h4>
                    <p className="hero-feature-desc">Montaje limpio, seguro, nivelación perfecta y entrega garantizada.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
