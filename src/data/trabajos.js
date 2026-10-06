/**
 * ARCHIVO DE DATOS: TRABAJOS REALIZADOS
 * 
 * 💡 INSTRUCCIONES PARA AGREGAR TUS PROPIAS FOTOS:
 * 1. Guarda tus fotos en la carpeta: 'public/fotos/' (por ejemplo: 'public/fotos/mi-cocina-1.jpg')
 * 2. En la propiedad 'imagen' escribe la ruta comenzando con '/fotos/...', por ejemplo: '/fotos/mi-cocina-1.jpg'
 * 3. Si aún no has subido la foto, ¡no te preocupes! La web mostrará una tarjeta elegante
 *    con el diseño y colores de tu marca mientras subes el archivo.
 */

export const categoriasTrabajos = [
  "Todos",
  "Cocinas",
  "Clósets & Vestidores",
  "Baños & Vanitorios",
  "Living & TV",
  "Diseños Especiales"
];

export const trabajosRealizados = [
  {
    id: 1,
    titulo: "Cocina Integral Roble Nórdico & Grafito",
    categoria: "Cocinas",
    subtitulo: "Diseño moderno con isla central y despensero oculto",
    descripcion: "Fabricación a medida con melamina de 18mm con cantos de PVC termofusionados, herrajes de extracción total con freno hidráulico y cubierta de cuarzo antibacteriano.",
    materiales: ["Melamina 18mm Roble", "Herrajes cierre suave", "Cubierta de cuarzo", "Tiradores perfil oculto"],
    imagen: "/fotos/cocina-roble-nordico.jpg",
    destacado: true,
    espacio: "Departamento / Casa",
    fecha: "2024"
  },
  {
    id: 2,
    titulo: "Walk-in Clóset con Iluminación LED",
    categoria: "Clósets & Vestidores",
    subtitulo: "Distribución personalizada para ropa larga, calzado y accesorios",
    descripcion: "Vestidor abierto fabricado en madera cálida con repisas ajustables, pantaloneros telescópicos, zapateros inclinados y tiras LED cálidas empotradas en perfil de aluminio.",
    materiales: ["Estructura melamina 18mm", "Iluminación LED cálida 3000K", "Cajones con correderas ocultas", "Zapatero extensible"],
    imagen: "/fotos/closet-vestidor-led.jpg",
    destacado: true,
    espacio: "Dormitorio Principal",
    fecha: "2024"
  },
  {
    id: 3,
    titulo: "Vanitorio Flotante en Madera Hidrófuga",
    categoria: "Baños & Vanitorios",
    subtitulo: "Mueble de baño suspendido con cajón en U para sifón",
    descripcion: "Mueble de baño a medida tratado para alta humedad, con frente ranurado en madera natural, cubierta de piedra sinterizada y organizadores interiores.",
    materiales: ["Madera tratada antihumedad", "Cajones push-to-open", "Cubierta de piedra", "Espejo retroiluminado"],
    imagen: "/fotos/vanitorio-flotante.jpg",
    destacado: true,
    espacio: "Baño Principal",
    fecha: "2024"
  },
  {
    id: 4,
    titulo: "Centro de Entretenimiento & Muro Ranurado",
    categoria: "Living & TV",
    subtitulo: "Panel acústico ranurado con rack flotante para cables ocultos",
    descripcion: "Revestimiento mural en listones de madera natural con consola flotante inferior, pasacables técnico oculto y repisas flotantes para elementos decorativos.",
    materiales: ["Muro ranurado acústico", "Consola flotante con abatibles", "Gestión oculta de cableado", "Iluminación indirecta"],
    imagen: "/fotos/centro-tv-living.jpg",
    destacado: true,
    espacio: "Living / Sala de Estar",
    fecha: "2024"
  },
  {
    id: 5,
    titulo: "Cocina Abierta con Isla y Desayunador",
    categoria: "Cocinas",
    subtitulo: "Ampliación de espacio y conectividad con el comedor",
    descripcion: "Proyecto integral que incluye muebles aéreos hasta cielo falso, torre de hornos empotrados, isla de preparación con mesón voladizo para comensales.",
    materiales: ["Melamina Olmo & Blanco Mate", "Bisagras Blumotion", "Cubierta Granito Negro", "Torre de hornos"],
    imagen: "/fotos/cocina-isla-desayunador.jpg",
    destacado: false,
    espacio: "Cocina abierta",
    fecha: "2024"
  },
  {
    id: 6,
    titulo: "Clóset Empotrado de Muro a Muro",
    categoria: "Clósets & Vestidores",
    subtitulo: "Aprovechamiento total de altura con puertas correderas silenciosas",
    descripcion: "Clóset a medida con sistema corredizo de piso a techo, cajonera interior con correderas telescópicas y gavetero para accesorios y joyas con vidrio templado.",
    materiales: ["Puertas correderas con freno", "Melamina Lino Cancún 18mm", "Perfiles de aluminio anodizado", "Cajones interiores"],
    imagen: "/fotos/closet-muro-a-muro.jpg",
    destacado: false,
    espacio: "Dormitorio Secundario",
    fecha: "2024"
  },
  {
    id: 7,
    titulo: "Vanitorio Doble Lavamanos para Suite",
    categoria: "Baños & Vanitorios",
    subtitulo: "Espacio amplio para dos personas con divisiones individuales",
    descripcion: "Fabricación de mueble doble con amplios cajones inferiores, estructura de melamina antimicrobiana con cantos gruesos sellados con adhesivo PUR para máxima impermeabilidad.",
    materiales: ["Melamina PUR resistente al agua", "Correderas de extracción total", "Tiradores tipo gola", "Organizador cosmético"],
    imagen: "/fotos/vanitorio-doble.jpg",
    destacado: false,
    espacio: "Baño en Suite",
    fecha: "2024"
  },
  {
    id: 8,
    titulo: "Home Office & Biblioteca a Medida",
    categoria: "Diseños Especiales",
    subtitulo: "Escritorio ergonómico con repisas flotantes y archivadores",
    descripcion: "Diseño personalizado de estación de trabajo en casa, con cubierta engrosada de 36mm, cajonera con llave, repisas reforzadas para libros y bandeja organizadora de cables.",
    materiales: ["Cubierta engrosada 36mm", "Melamina Roble Cava", "Archivador con cerradura", "Iluminación de trabajo"],
    imagen: "/fotos/home-office-biblioteca.jpg",
    destacado: false,
    espacio: "Estudio / Oficina",
    fecha: "2024"
  }
];
