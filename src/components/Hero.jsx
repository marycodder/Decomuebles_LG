import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon, ArrowRightIcon, CheckCircleIcon, KitchenIcon, ClosetIcon, BathIcon, SparklesIcon } from './Icons';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* Contenido textual del Hero */}
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-pill-indicator"></span>
              <span>Mueblería y Carpintería a Medida en Chile</span>
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
                <span>Ver Trabajos Realizados</span>
                <ArrowRightIcon size={18} />
              </a>
            </div>

            {/* Badges de confianza */}
            <div className="hero-badges-row">
              <div className="hero-badge-item">
                <CheckCircleIcon size={18} className="hero-badge-icon" />
                <span>Fabricación 100% a Medida</span>
              </div>
              <div className="hero-badge-item">
                <CheckCircleIcon size={18} className="hero-badge-icon" />
                <span>Herrajes de Cierre Suave</span>
              </div>
              <div className="hero-badge-item">
                <CheckCircleIcon size={18} className="hero-badge-icon" />
                <span>Instalación Limpia y Precisa</span>
              </div>
            </div>
          </div>

          {/* Tarjeta Visual de Presentación con los Servicios Clave */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-pattern"></div>
              
              <div className="hero-card-header">
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--clr-dark-wood)' }}>Especialistas en Espacios</h3>
                  <p style={{ fontSize: '0.85rem' }}>Diseño y fabricación sin límites</p>
                </div>
                <span className="hero-card-badge">Calidad LG</span>
              </div>

              <div className="hero-card-features">
                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <KitchenIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Cocinas Integrales & Islas</h4>
                    <p className="hero-feature-desc">Muebles aéreos, torres de hornos, cubiertas de cuarzo y despensas organizadas.</p>
                  </div>
                </div>

                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <ClosetIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Clósets & Walk-in Dressing</h4>
                    <p className="hero-feature-desc">Optimización total de altura, zapateros, pantaloneros e iluminación LED.</p>
                  </div>
                </div>

                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <BathIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Vanitorios & Muebles de Baño</h4>
                    <p className="hero-feature-desc">Materiales resistentes a la humedad, modelos flotantes y frentes ranurados.</p>
                  </div>
                </div>

                <div className="hero-feature-box">
                  <div className="hero-feature-icon">
                    <SparklesIcon size={24} />
                  </div>
                  <div>
                    <h4 className="hero-feature-title">Muebles de Living & TV</h4>
                    <p className="hero-feature-desc">Racks modernos, paneles acústicos y repisas a la medida exacta de tu muro.</p>
                  </div>
                </div>
              </div>

              <div className="hero-contact-quick">
                <div className="hero-contact-text">
                  <h4>¿Tienes un proyecto en mente?</h4>
                  <p>Te asesoramos y enviamos cotización rápida</p>
                </div>
                <a 
                  href={getWhatsAppUrl("¡Hola DecoMuebles LG! Quiero consultar por un proyecto para mi casa:")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  <span>Escríbenos</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
