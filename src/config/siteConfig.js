// Configuración general del sitio DecoMuebles LG
// ¡Aquí puedes cambiar fácilmente tu número de WhatsApp, nombre, correo y redes sociales!

export const siteConfig = {
  // INFORMACIÓN DE CONTACTO
  brandName: "DecoMuebles LG",
  slogan: "Mueblería y Carpintería de Alta Calidad a Medida",
  
  // NÚMERO DE WHATSAPP (código de país + número, sin espacios ni símbolos)
  // Ejemplo para Chile: "56912345678" o para otro país: "54911..."
  whatsappNumber: "56912345678", 
  whatsappDisplay: "+56 9 1234 5678",
  
  // MENSAJE PREDETERMINADO GENERAL PARA WHATSAPP
  defaultWhatsAppMessage: "¡Hola DecoMuebles LG! 👋 Vengo desde su página web y me gustaría solicitar una asesoría o cotizar un mueble a medida para mi hogar.",

  // OTROS DATOS DE CONTACTO
  email: "contacto@decolmuebleslg.cl",
  instagram: "@decolmuebleslg",
  instagramUrl: "https://instagram.com",
  location: "Santiago y comunas aledañas",
  horario: "Lunes a Sábado: 09:00 a 19:00 hrs",

  // MENSAJE DE BIENVENIDA PRINCIPAL (Texto solicitado)
  heroMessage: "Asesorías, diseño, fabricación e instalación de todo tipo de muebles: cocinas, closet, baños y decoración general de tus espacios.",

  // PALETA DE COLORES OFICIAL DEL PROYECTO
  palette: {
    sky: "#C9DFF2",       // Azul cielo suave
    olive: "#475907",     // Verde oliva bosque
    mustard: "#D9BE36",   // Ocre mostaza dorado
    darkWood: "#592D05",  // Madera oscura café profundo
    warmWood: "#F2A663",  // Madera cálida albaricoque
  }
};

/**
 * Función para generar el enlace directo a WhatsApp con mensaje codificado
 */
export function getWhatsAppUrl(customMessage) {
  const text = encodeURIComponent(customMessage || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
