import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { WhatsAppIcon, SendIcon, ShieldCheckIcon } from './Icons';

export default function CotizadorWhatsApp() {
  const [tipoMueble, setTipoMueble] = useState("Cocina Integral");
  const [medidas, setMedidas] = useState("");
  const [comuna, setComuna] = useState("");
  const [detalles, setDetalles] = useState("");

  // Construcción del mensaje dinámico estructurado
  const generateMessage = () => {
    let msg = `¡Hola DecoMuebles LG! Vengo desde su página web y me gustaría cotizar un mueble a medida:\n\n`;
    msg += ` *Tipo de mueble:* ${tipoMueble}\n`;
    if (medidas.trim()) {
      msg += `*Medidas aproximadas / espacio:* ${medidas.trim()}\n`;
    }
    if (comuna.trim()) {
      msg += `*Ubicación:* ${comuna.trim()}\n`;
    }
    if (detalles.trim()) {
      msg += `*Detalles adicionales:* ${detalles.trim()}\n`;
    }
    msg += `\n¿Podrían darme una orientación o cotización? ¡Muchas gracias!`;
    return msg;
  };

  const previewMessage = generateMessage();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(previewMessage)}`;

  return (
    <section id="cotizador" className="section cotizador-section">
      <div className="container">

        <div className="section-header">
          <div className="section-tag tag-olive">Cotización inmediata</div>
          <h2 className="section-title">Cotiza tu proyecto por WhatsApp</h2>
          <p className="section-subtitle">
            Completa los datos de tu idea o envíanos un mensaje directo.
            Te responderemos a la brevedad con una asesoría personalizada.
          </p>
        </div>

        <div className="cotizador-box">
          <div className="cotizador-header">
            <div>
              <h3>Asistente de cotización rápida</h3>
              <p>Elige tu tipo de mueble y envíalo en un clic a nuestro WhatsApp</p>
            </div>
            <div className="cotizador-header-badge">
              <WhatsAppIcon size={18} />
              <span>Respuesta rápida</span>
            </div>
          </div>

          <form
            className="cotizador-form"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            <div className="form-grid">

              {/* Tipo de Mueble */}
              <div className="form-group">
                <label className="form-label" htmlFor="tipo-mueble">
                  ¿Qué tipo de mueble necesitas? *
                </label>
                <select
                  id="tipo-mueble"
                  className="form-select"
                  value={tipoMueble}
                  onChange={(e) => setTipoMueble(e.target.value)}
                >
                  <option value="Cocina Integral">Cocina integral a medida</option>
                  <option value="Clóset o Vestidor">Clóset - Walk-in closet</option>
                  <option value="Muebles de bañ o">Muebles de baño</option>
                  <option value="Muebles de TV o Living">Muebles para TV - Rack de Living</option>
                  <option value="Mueble de oficina - Home-Office">Estación de trabajo - Home-Office</option>
                  <option value="Diseños especiales">Diseños especiales</option>
                  <option value="Varios muebles">Varios Muebles</option>
                  <option value="Remodelación completa de varios espacios">Remodelación completa de varios espacios</option>
                </select>
              </div>

              {/* Medidas aproximadas */}
              <div className="form-group">
                <label className="form-label" htmlFor="medidas">
                  Medidas estimadas o espacio (opcional)
                </label>
                <input
                  type="text"
                  id="medidas"
                  className="form-input"
                  placeholder="Ej: Muro de 3.20m x 2.40m de alto"
                  value={medidas}
                  onChange={(e) => setMedidas(e.target.value)}
                />
              </div>

              {/* Comuna / Ciudad */}
              <div className="form-group">
                <label className="form-label" htmlFor="comuna">
                  Comuna o ciudad de instalación
                </label>
                <input
                  type="text"
                  id="comuna"
                  className="form-input"
                  placeholder="Ej: Las Condes, Maipú, Providencia, etc."
                  value={comuna}
                  onChange={(e) => setComuna(e.target.value)}
                />
              </div>

              {/* Detalles o requerimientos */}
              <div className="form-group">
                <label className="form-label" htmlFor="detalles">
                  Materiales o preferencias
                </label>
                <input
                  type="text"
                  id="detalles"
                  className="form-input"
                  placeholder="Ej: Melamina roble, cubierta de cuarzo blanco, tirador oculto..."
                  value={detalles}
                  onChange={(e) => setDetalles(e.target.value)}
                />
              </div>

            </div>

            {/* Vista previa del mensaje que se enviará */}
            <div className="cotizador-preview-box">
              <div className="preview-label">Vista previa del mensaje para WhatsApp:</div>
              <div className="preview-text" style={{ whiteSpace: 'pre-line' }}>
                {previewMessage}
              </div>
            </div>

            <div className="cotizador-submit-area">
              <div className="cotizador-guarantee">
                <ShieldCheckIcon size={20} />
                <span>Asesoría directa con el mueblista sin intermediarios</span>
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ padding: '16px 36px', fontSize: '1.05rem' }}
              >
                <WhatsAppIcon size={22} />
                <span>Enviar cotización a WhatsApp</span>
                <SendIcon size={18} />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
