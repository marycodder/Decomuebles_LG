import React from 'react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { KitchenIcon, ClosetIcon, BathIcon, TvIcon, SparklesIcon, ToolsIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

export default function Services() {
  const servicios = [
    {
      id: "cocinas",
      icon: <KitchenIcon size={28} />,
      title: "Cocinas a Medida",
      desc: "Diseñamos y fabricamos la cocina de tus sueños, optimizando cada rincón para que cocinar y compartir sea un placer diario.",
      items: [
        "Muebles aéreos y bases a la medida",
        "Islas centrales y barras desayunadoras",
        "Torres de hornos empotrados y despenseros",
        "Cubiertas de cuarzo, granito y maderas"
      ],
      whatsappMsg: "¡Hola DecoMuebles LG! Me interesa cotizar una cocina a medida para mi hogar."
    },
    {
      id: "closets",
      icon: <ClosetIcon size={28} />,
      title: "Clósets & Vestidores",
      desc: "Organización perfecta para tu vestimenta y accesorios, con distribución personalizada según tus hábitos y espacio disponible.",
      items: [
        "Walk-in closets y vestidores abiertos",
        "Clósets empotrados con puertas correderas o abatibles",
        "Cajoneras con divisiones para joyas y accesorios",
        "Zapateros telescópicos e iluminación LED"
      ],
      whatsappMsg: "¡Hola DecoMuebles LG! Quiero cotizar un clóset o vestidor a medida."
    },
    {
      id: "banos",
      icon: <BathIcon size={28} />,
      title: "Baños & Vanitorios",
      desc: "Vanitorios modernos y muebles suspendidos elaborados con sustratos resistentes al vapor y humedad para una larga vida útil.",
      items: [
        "Vanitorios flotantes y sobre pedestal",
        "Cajones con diseño en 'U' para librar sifón",
        "Muebles botiquín con espejo y luz LED",
        "Materiales hidrófugos con cantos sellados"
      ],
      whatsappMsg: "¡Hola DecoMuebles LG! Quisiera cotizar un mueble de baño / vanitorio."
    },
    {
      id: "living",
      icon: <TvIcon size={28} />,
      title: "Living & Centros de TV",
      desc: "Muebles de entretenimiento que realzan tu sala de estar, con diseño contemporáneo y gestión inteligente para ocultar cables.",
      items: [
        "Paneles acústicos y listones de madera ranurada",
        "Racks flotantes con puertas abatibles push-to-open",
        "Repisas flotantes y vitrinas con cristal",
        "Muebles para equipos de audio y consolas"
      ],
      whatsappMsg: "¡Hola DecoMuebles LG! Me gustaría cotizar un rack o centro de TV para living."
    },
    {
      id: "especiales",
      icon: <SparklesIcon size={28} />,
      title: "Decoración & Muebles Especiales",
      desc: "Creamos piezas únicas para tus espacios de trabajo, estudio o locales comerciales con la identidad que buscas.",
      items: [
        "Estaciones de trabajo Home-Office y escritorios",
        "Bibliotecas murales y libreros de alta resistencia",
        "Recepciones y mobiliario para oficinas/locales",
        "Muebles bajo escala y gaveteros especiales"
      ],
      whatsappMsg: "¡Hola DecoMuebles LG! Quiero consultar por un diseño especial o mueble decorativo."
    },
    {
      id: "asesoria",
      icon: <ToolsIcon size={28} />,
      title: "Asesorías & Fabricación Integral",
      desc: "Te acompañamos desde la toma de medidas en tu domicilio hasta la instalación final y ajustes de herrajes.",
      items: [
        "Visita a terreno y levantamiento de medidas",
        "Asesoría técnica en colores, texturas y tiradores",
        "Elección de los mejores herrajes del mercado",
        "Garantía directa de fabricación e instalación"
      ],
      whatsappMsg: "¡Hola DecoMuebles LG! Me gustaría agendar una asesoría para evaluar mis espacios."
    }
  ];

  return (
    <section id="servicios" className="section services-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag tag-olive">Lo Que Hacemos</div>
          <h2 className="section-title">Soluciones Integrales en Mueblería</h2>
          <p className="section-subtitle">
            Cada mueble es confeccionado con precisión milimétrica y atención a los detalles, 
            garantizando durabilidad, estética y funcionalidad para tus ambientes.
          </p>
        </div>

        <div className="services-grid">
          {servicios.map((s) => (
            <div key={s.id} className="service-card">
              <div className="service-icon-box">
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              
              <ul className="service-list">
                {s.items.map((it, i) => (
                  <li key={i} className="service-list-item">
                    <CheckCircleIcon size={16} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={getWhatsAppUrl(s.whatsappMsg)}
                target="_blank" 
                rel="noopener noreferrer"
                className="service-cta"
              >
                <span>Cotizar este servicio</span>
                <ArrowRightIcon size={16} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
