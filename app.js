// Banco de datos ampliado de las épocas y lugares específicos de Zumpango de Ocampo
const epocasData = [
  {
    id: "PrimerosAsentamientos",
    nombre: "Primeros Asentamientos",
    periodo: "1000 a.C. - 1520 d.C.",
    resumen: "Surgimiento de las primeras culturas a orillas de la Laguna de Zumpango.",
    imagen: "https://pymstatic.com/17224/conversions/culturas-mesoamericanas-wide_webp.webp",
    descripcion: "Época prehispánica marcada por el asentamiento de grupos otomíes y posteriormente mexicas/tepanecas que aprovecharon los recursos hídricos de la cuenca del Valle de México.",
    hitos: [
      "Fundación de la ribera lacustre de Tzompanco",
      "Sistemas de pesca y recolección de sal",
      "Tributo agrícola a las grandes capitales mesoamericanas"
    ],
    lugares: [
      {
        id: "laguna-zumpango-prehispánica",
        nombre: "Cuenca de la Laguna de Zumpango",
        imagen: "https://pymstatic.com/17224/conversions/culturas-mesoamericanas-wide_webp.webp",
        resumen: "Ecosistema vital para los primeros pobladores cazadores y recolectores.",
        descripcion: "Lugar sagrado y de sustento donde las tribus locales realizaban actividades de pesca, recolección de tule y sal. Sus orillas albergaban los primeros poblamientos otomíes.",
        hitos: ["Centro de pesca ancestral", "Límite norte de los lagos del Valle de México"]
      },
      {
        id: "sitios-arqueologicos",
        nombre: "Lugar 2",
        imagen: "https://ejemplo.com/imagen2.jpg",
        resumen: "Restos de algun lugar",
        descripcion: "Puntos ...",
        hitos: ["Intercambio ", "Ruta "]
      },
      {
        id: "sitios-arqueologicos",
        nombre: "Lugar 2",
        imagen: "https://ejemplo.com/imagen2.jpg",
        resumen: "Restos de algun lugar",
        descripcion: "Puntos ...",
        hitos: ["Intercambio ", "Ruta "]
      },
      {
        id: "sitios-arqueologicos",
        nombre: "Lugar 2",
        imagen: "https://ejemplo.com/imagen2.jpg",
        resumen: "Restos de algun lugar",
        descripcion: "Puntos ...",
        hitos: ["Intercambio ", "Ruta "]
      },
      {
        id: "sitios-arqueologicos",
        nombre: "Lugar 2",
        imagen: "https://ejemplo.com/imagen2.jpg",
        resumen: "Restos de algun lugar",
        descripcion: "Puntos ...",
        hitos: ["Intercambio ", "Ruta "]
      },
      {
        id: "sitios-arqueologicos",
        nombre: "Montículos y Asentamientos de San Bartolo",
        imagen: "https://lahistoriamexicana.mx/wp-content/uploads/independencia-mexico.jpg",
        resumen: "Restos arqueológicos de los antiguos barrios prehispánicos.",
        descripcion: "Puntos estratégicos donde se han hallado fragmentos cerámicos, artefactos de obsidiana y vestigios de la ocupación prehispánica de Zumpango.",
        hitos: ["Intercambio comercial de obsidiana", "Ruta de tránsito entre el norte y el centro del valle"]
      }
    ]
  },
  {
    id: "VirreinatoEIndependencia",
    nombre: "Virreinato e Independencia",
    periodo: "1521 - 1821",
    resumen: "Evangelización, construcción de templos y participación política.",
    imagen: "https://lahistoriamexicana.mx/wp-content/uploads/independencia-mexico.jpg",
    descripcion: "Transformación colonial con la llegada de los franciscanos y la construcción de obras hidráulicas claves para la Ciudad de México. Destaca la figura de Melchor Ocampo.",
    hitos: [
      "Inicio del Gran Desagüe del Valle de México en Huehuetoca/Zumpango",
      "Construcción del templo parroquial",
      "Declaración de Zumpango como municipio en 1820"
    ],
    lugares: [
      {
        id: "parroquia-purisima-concepcion",
        nombre: "Parroquia de la Purísima Concepción",
        imagen: "https://lahistoriamexicana.mx/wp-content/uploads/independencia-mexico.jpg",
        resumen: "Monumento arquitectónico de estilo barroco y neoclásico.",
        descripcion: "Ubicada en el corazón de Zumpango, su edificación inició en la época colonial tardía. Ha sido centro de la vida social, religiosa y cultural del municipio.",
        hitos: ["Arquitectura churrigueresca y barroca", "Centro ceremonial histórico"]
      },
     {
        id: "nuevo-lugar-ejemplo",
        nombre: "Nombre del Nuevo Lugar",
        imagen: "https://enlace-a-tu-imagen.jpg", // Pon la URL de tu imagen
        resumen: "Un breve resumen de este sitio histórico.",
        descripcion: "Una descripción más larga y detallada sobre por qué es importante.",
        hitos: ["Primer dato interesante", "Segundo dato interesante"]
      },
     {
        id: "nuevo-lugar-ejemplo",
        nombre: "Nombre del Nuevo Lugar",
        imagen: "https://enlace-a-tu-imagen.jpg", // Pon la URL de tu imagen
        resumen: "Un breve resumen de este sitio histórico.",
        descripcion: "Una descripción más larga y detallada sobre por qué es importante.",
        hitos: ["Primer dato interesante", "Segundo dato interesante"]
      },
      {
        id: "caja-del-agua",
        nombre: "Tajo de Nogales y Obras del Desagüe",
        imagen: "https://lahistoriamexicana.mx/wp-content/uploads/revolucion_mexicana.jpg",
        resumen: "Infraestructura virreinal para evitar inundaciones.",
        descripcion: "Ingeniosas construcciones hidráulicas virreinales diseñadas para desviar las aguas de la laguna y controlar las crecidas hacia la capital virreinal.",
        hitos: ["Proyecto de ingeniería colonial", "Ruta de trabajo de mano de obra indígena"]
      }
    ]
  },
  {
    id: "RevolucionEIndustrializacion",
    nombre: "Revolución y Siglo XX",
    periodo: "1850 - 1950",
    resumen: "Transformación del comercio, transporte y luchas agrarias.",
    imagen: "https://lahistoriamexicana.mx/wp-content/uploads/revolucion_mexicana.jpg",
    descripcion: "La llegada del ferrocarril y la consolidación del mercado municipal impulsaron el comercio regional, mientras que las dinámicas revolucionarias cambiaron la tenencia de la tierra.",
    hitos: [
      "Paso de rutas ferroviarias de carga y pasajeros",
      "Creación de ejidos y redistribución de tierras",
      "Apertura comercial del centro histórico"
    ],
    lugares: [
      {
        id: "estacion-ferrocarril",
        nombre: "Antigua Estación del Ferrocarril",
        imagen: "https://lahistoriamexicana.mx/wp-content/uploads/revolucion_mexicana.jpg",
        resumen: "Símbolo del progreso del transporte en Zumpango.",
        descripcion: "Edificio que fungió como punto de conexión entre las haciendas locales, el distrito de Zumpango y la capital durante el porfiriato y post-revolución.",
        hitos: ["Conexión mercantil", "Punto estratégico durante movimientos armados"]
      },
     {
        id: "nuevo-lugar-ejemplo",
        nombre: "Nombre del Nuevo Lugar",
        imagen: "https://enlace-a-tu-imagen.jpg", // Pon la URL de tu imagen
        resumen: "Un breve resumen de este sitio histórico.",
        descripcion: "Una descripción más larga y detallada sobre por qué es importante.",
        hitos: ["Primer dato interesante", "Segundo dato interesante"]
      },
     {
        id: "nuevo-lugar-ejemplo",
        nombre: "Nombre del Nuevo Lugar",
        imagen: "https://enlace-a-tu-imagen.jpg", // Pon la URL de tu imagen
        resumen: "Un breve resumen de este sitio histórico.",
        descripcion: "Una descripción más larga y detallada sobre por qué es importante.",
        hitos: ["Primer dato interesante", "Segundo dato interesante"]
      },
      {
        id: "mercado-tradicional",
        nombre: "Centro e Histórico Mercado de Zumpango",
        imagen: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg",
        resumen: "Punto neugrálgico del trueque y comercio regional.",
        descripcion: "Lugar donde convergen agricultores, artesanos y comerciantes de pueblos vecinos para abastecer la región con productos locales.",
        hitos: ["Consolidación del comercio municipal", "Tradición gastronómica local"]
      }
    ]
  },
  {
    id: "EdadModerna",
    nombre: "Edad Moderna y Contemporánea",
    periodo: "1951 - Actualidad",
    resumen: "Crecimiento urbano, industrialización e infraestructura estratégica.",
    imagen: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg",
    descripcion: "Período caracterizado por la expansión de unidades habitacionales, escuelas, conectividad carretera y la integración de megaproyectos metropolitanos.",
    hitos: [
      "Regeneración de la Laguna de Zumpango como parque ecológico",
      "Expansión universitaria y centros educativos",
      "Instalación del Aeropuerto Internacional Felipe Ángeles (AIFA)"
    ],
    lugares: [
      {
        id: "parque-ecologico-laguna",
        nombre: "Parque Ecológico Laguna de Zumpango",
        imagen: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg",
        resumen: "Área natural protegida y destino turístico actual.",
        descripcion: "Espacio ecoturístico que ofrece recorridos en lancha, avistamiento de aves migratorias y actividades recreativas familiares.",
        hitos: ["Refugio de aves migratorias", "Atractivo ecoturístico regional"]
      },
     {
        id: "nuevo-lugar-ejemplo",
        nombre: "Nombre del Nuevo Lugar",
        imagen: "https://enlace-a-tu-imagen.jpg", // Pon la URL de tu imagen
        resumen: "Un breve resumen de este sitio histórico.",
        descripcion: "Una descripción más larga y detallada sobre por qué es importante.",
        hitos: ["Primer dato interesante", "Segundo dato interesante"]
      },
     {
        id: "nuevo-lugar-ejemplo",
        nombre: "Nombre del Nuevo Lugar",
        imagen: "https://enlace-a-tu-imagen.jpg", // Pon la URL de tu imagen
        resumen: "Un breve resumen de este sitio histórico.",
        descripcion: "Una descripción más larga y detallada sobre por qué es importante.",
        hitos: ["Primer dato interesante", "Segundo dato interesante"]
      },
      {
        id: "aifa-zona",
        nombre: "Aeropuerto Internacional Felipe Ángeles (Santa Lucía)",
        imagen: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg",
        resumen: "Infraestructura moderna que transforma el desarrollo local.",
        descripcion: "Ubicado parcialmente en los límites del municipio, ha detonado la modernización vial, el comercio global y la conectividad de Zumpango con el resto del país.",
        hitos: ["Conexión internacional", "Desarrollo de infraestructura vial"]
      }
    ]
  }
];

const appContainer = document.getElementById("app");

// 1. RENDERIZA EL MENÚ PRINCIPAL (ÉPOCAS)
function mostrarMenu() {
  let html = `
    <section class="menu-container">
      <h2>Épocas Históricas de Zumpango de Ocampo</h2>
      <div class="grid-epocas">
  `;

  epocasData.forEach(epoca => {
    html += `
      <article class="card-epoca" onclick="mostrarEpoca('${epoca.id}')">
        <img src="${epoca.imagen}" alt="${epoca.nombre}">
        <div class="card-content">
          <span class="tag-periodo">${epoca.periodo}</span>
          <h3>${epoca.nombre}</h3>
          <p>${epoca.resumen}</p>
        </div>
      </article>
    `;
  });

  html += `
      </div>
    </section>
  `;

  appContainer.innerHTML = html;
}

// 2. RENDERIZA LA ÉPOCA SELECCIONADA CON SUS CUADROS DE LUGARES
function mostrarEpoca(idEpoca) {
  const epoca = epocasData.find(e => e.id === idEpoca);

  if (!epoca) return;

  let html = `
    <article class="detalle-container">
      <button class="btn-volver" onclick="mostrarMenu()">← Volver a Épocas</button>
      
      <div class="detalle-header">
        <h2>${epoca.nombre}</h2>
        <p class="tag-periodo">${epoca.periodo}</p>
      </div>

      <img class="imagen-banner" src="${epoca.imagen}" alt="${epoca.nombre}">

      <div class="detalle-body">
        <p class="descripcion-extensa">${epoca.descripcion}</p>
        
        <h3>Hitos Históricos del Periodo</h3>
        <ul>
          ${epoca.hitos.map(hito => `<li>${hito}</li>`).join('')}
        </ul>

        <h3 class="subtitulo-seccion">Selecciona un lugar emblemático de esta época:</h3>
        <div class="grid-lugares">
  `;

  // Genera las tarjetas/cuadros para los lugares específicos de esta época
  epoca.lugares.forEach(lugar => {
    html += `
      <article class="card-lugar" onclick="mostrarDetalleLugar('${epoca.id}', '${lugar.id}')">
        <img src="${lugar.imagen}" alt="${lugar.nombre}">
        <div class="card-content">
          <h3>${lugar.nombre}</h3>
          <p>${lugar.resumen}</p>
        </div>
      </article>
    `;
  });

  html += `
        </div>
      </div>
    </article>
  `;

  appContainer.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. RENDERIZA EL DETALLE ESPECÍFICO DE UN LUGAR SELECCIONADO
function mostrarDetalleLugar(idEpoca, idLugar) {
  const epoca = epocasData.find(e => e.id === idEpoca);
  if (!epoca) return;

  const lugar = epoca.lugares.find(l => l.id === idLugar);
  if (!lugar) return;

  const html = `
    <article class="detalle-container">
      <button class="btn-volver" onclick="mostrarEpoca('${epoca.id}')">← Volver a ${epoca.nombre}</button>
      
      <div class="detalle-header">
        <h2>${lugar.nombre}</h2>
        <span class="tag-periodo">Época: ${epoca.nombre}</span>
      </div>

      <img class="imagen-banner" src="${lugar.imagen}" alt="${lugar.nombre}">

      <div class="detalle-body">
        <p class="descripcion-extensa">${lugar.descripcion}</p>
        
        <h3>Puntos Relevantes del Lugar</h3>
        <ul>
          ${lugar.hitos.map(hito => `<li>${hito}</li>`).join('')}
        </ul>
      </div>
    </article>
  `;

  appContainer.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar cargando el menú principal
document.addEventListener("DOMContentLoaded", mostrarMenu);