import React from 'react';
import { RulerIcon, ShieldCheckIcon, ToolsIcon, SparklesIcon } from './Icons';

export default function Pillars() {
  const pillars = [
    {
      icon: <RulerIcon size={24} />,
      title: "Diseño 100% a Medida",
      subtitle: "Aprovechamos cada milímetro de tu espacio disponible."
    },
    {
      icon: <ShieldCheckIcon size={24} />,
      title: "Melaminas & Cantos Sellados",
      subtitle: "Tableros de 18mm y tapacantos termofusionados duraderos."
    },
    {
      icon: <ToolsIcon size={24} />,
      title: "Herrajes de Cierre Suave",
      subtitle: "Bisagras hidráulicas y correderas silenciosas de alta gama."
    },
    {
      icon: <SparklesIcon size={24} />,
      title: "Instalación Profesional",
      subtitle: "Montaje limpio, seguro y con garantía de satisfacción."
    }
  ];

  return (
    <section className="pillars-bar">
      <div className="container">
        <div className="pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="pillar-item">
              <div className="pillar-icon-wrap">
                {item.icon}
              </div>
              <div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
