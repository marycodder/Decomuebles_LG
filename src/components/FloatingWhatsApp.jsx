import React from 'react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <aside className="floating-whatsapp" aria-label="Contacto por WhatsApp">
      <div className="floating-whatsapp-tooltip">
        ¿Cotizamos tu proyecto? ¡Escríbenos!
      </div>
      <a 
        href={getWhatsAppUrl()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-btn"
        aria-label="Contactar a DecoMuebles LG por WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </aside>
  );
}
