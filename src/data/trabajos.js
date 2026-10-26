/**
 * ARCHIVO DE DATOS: TRABAJOS REALIZADOS
 * Proyectos y fotografías oficiales fabricados e instalados por DecoMuebles LG.
 */

export const categoriasTrabajos = [
  "Todos",
  "Clósets",
  "Cocinas",
  "Vanitorios"
];

export const trabajosRealizados = [
  {
    id: 1,
    titulo: "Clóset Familiar Triple en Roble Claro",
    categoria: "Clósets",
    subtitulo: "Distribución en 3 cuerpos con bauleras superiores abatibles y cajonera",
    descripcion: "Elegante clóset y ropero de tres cuerpos fabricado a medida en tono roble claro texturado. Incorpora 3 bauleras superiores con apertura asistida por pistones a gas, módulos para colgar ropa larga y corta, repisas intermedias y 6 amplios cajones inferiores de extracción suave.",
    materiales: [
      "Melamina Roble Claro texturada 18mm",
      "Bauleras superiores con pistones a gas hidráulicos",
      "Tiradores de barra en acero inoxidable",
      "Barras colgadoras metálicas reforzadas",
      "6 cajones con correderas telescópicas de alta carga",
      "Cantos de PVC termofusionados"
    ],
    imagen: "/fotos/closet2.1.jpg",
    imagenes: [
      { src: "/fotos/closet2.1.jpg", label: "Vista frontal (Cerrado)" },
      { src: "/fotos/closet2.2.jpg", label: "Distribución interior (Abierto)" }
    ],
    destacado: true,
    espacio: "Dormitorio Principal",
    fecha: "2024"
  },
  {
    id: 2,
    titulo: "Cocina Moderna Grafito con Isla e Iluminación LED",
    categoria: "Cocinas",
    subtitulo: "Diseño contemporáneo con isla en cascada y perfiles de luz cálida",
    descripcion: "Cocina integral de alta gama en tono grafito y negro mate. Destaca su mesón isla central con cubierta en cascada, iluminación LED integrada en zócalo y bajo mesada, gabinetes superiores e inferiores de gran capacidad y espacio para encimera y campana.",
    materiales: [
      "Melamina Grafito / Negro Mate 18mm",
      "Iluminación perimetral LED cálida",
      "Cubierta de cuarzo blanco en cascada",
      "Tiradores de perfil gola / apertura oculta",
      "Bisagras y correderas con cierre suave"
    ],
    imagen: "/fotos/cocina2.1.jpg",
    imagenes: [
      { src: "/fotos/cocina2.1.jpg", label: "Cocina integral con isla e iluminación LED" }
    ],
    destacado: true,
    espacio: "Cocina Integral",
    fecha: "2024"
  },
  {
    id: 3,
    titulo: "Vanitorio Flotante en Madera con Cubierta de Cuarzo",
    categoria: "Vanitorios",
    subtitulo: "Mueble de baño suspendido con repisero inferior y cubierta en cuarzo blanco",
    descripcion: "Vanitorio suspendido con veta de madera natural y tratamiento para humedad. Incluye cubierta de cuarzo blanco con lavamanos bajo cubierta, grifería moderna y estante inferior abierto tipo deck para toallas y elementos de baño.",
    materiales: [
      "Melamina con resistencia a la humedad (RH)",
      "Cubierta de cuarzo blanco antibacterial",
      "Lavamanos bajo cubierta cerámico",
      "Estructura reforzada para anclaje flotante",
      "Frentes lisos con cantos sellados"
    ],
    imagen: "/fotos/vanitorio.jpg",
    imagenes: [
      { src: "/fotos/vanitorio.jpg", label: "Vanitorio flotante y cubierta de cuarzo" }
    ],
    destacado: true,
    espacio: "Baño Principal",
    fecha: "2024"
  }
];
