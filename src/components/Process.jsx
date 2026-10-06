import React from 'react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Asesoría y levantamiento",
      desc: "Conversamos sobre tus necesidades, estilo preferido y tomamos las medidas exactas de tu espacio o revisamos tus planos."
    },
    {
      num: "02",
      title: "Diseño y cotización",
      desc: "Definimos la distribución óptima, tipos de melamina, colores, cubiertas y te entregamos un presupuesto claro sin costos ocultos."
    },
    {
      num: "03",
      title: "Fabricación a medida",
      desc: "Mecanizamos y ensamblamos cada módulo con tableros de 18mm, cantos de PVC termofusionados y herrajes hidráulicos de alta duración."
    },
    {
      num: "04",
      title: "Instalación en tu hogar",
      desc: "Instalamos en la fecha acordada con sumo cuidado, nivelación perfecta, limpieza total y ajuste fino de cada puerta y cajón."
    }
  ];

  return (
    <section id="proceso" className="section process-section">
      <div className="container">

        <div className="section-header">
          <div className="section-tag tag-olive">Método de trabajo</div>
          <h2 className="section-title">De la idea a tu espacio soñado</h2>
          <p className="section-subtitle">
            Un proceso claro, confiable y transparente para que tu experiencia sea cómoda de inicio a fin.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((st) => (
            <div key={st.num} className="process-card">
              <div className="process-number">{st.num}</div>
              <h3 className="process-step-title">{st.title}</h3>
              <p className="process-step-desc">{st.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
