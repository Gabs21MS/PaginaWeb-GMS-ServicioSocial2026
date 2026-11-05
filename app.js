// Estructura de Datos del Proyecto
const epocasData = [
  {
    id: "primeros-asentamientos",
    titulo: "Primeros Asentamientos",
    lugares: [
      {
        id: "laguna-zumpango",
        nombre: "Cuenca de la Laguna de Zumpango",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Ecosistema e hito prehispánico vital para la región.",
        descripcion: "Lugar sagrado e importante punto de recolección y pesca.",
        hitos: ["Centro de pesca", "Límite agrícola prehispánico"]
      },
      {
        id: "sitios-arqueologicos",
        nombre: "Montículos y Asentamientos de San Bartolo",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Restos de asentamientos antiguos.",
        descripcion: "Puntos estratégicos para las rutas comerciales de la cuenca.",
        hitos: ["Intercambio comercial", "Ruta de tránsito"]
      }
    ]
  },
  {
    id: "epoca-prehispanica",
    titulo: "Época Prehispánica",
    lugares: [
      {
        id: "teocalli-zumpango",
        nombre: "Templo Mayor Prehispánico",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Centro ceremonial en la cuenca.",
        descripcion: "Espacio dedicado a rituales agrícolas y tributarios.",
        hitos: ["Centro religioso", "Tributo Mexica"]
      }
    ]
  },
  {
    id: "virreinato-independencia",
    titulo: "Virreinato e Independencia",
    lugares: [
      {
        id: "parroquia-purisima",
        nombre: "Parroquia de la Purísima Concepción",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Iglesia colonial emblemática en San Pedro Zumpango.",
        descripcion: "Templo histórico construido durante el periodo novohispano.",
        hitos: ["Arquitectura barroca", "Evangelización colonial"]
      },
      {
        id: "capilla-san-pedro",
        nombre: "Capilla de San Pedro",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Santuario religioso con gran valor histórico.",
        descripcion: "Punto de reunión comunitaria e histórica del barrio de San Pedro.",
        hitos: ["Fiestas patronales", "Legado novohispano"]
      }
    ]
  },
  {
    id: "curiosidades-toponimia",
    titulo: "Curiosidades y Toponimia",
    lugares: [
      {
        id: "origen-tzompanco",
        nombre: "Denominación y Significado",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "El origen náhuatl de la palabra Zumpango y su relación con la sabiduría.",
        descripcion: "Zumpango deriva del náhuatl 'Tzompanco', que significa 'El lugar del tzompantli'. Un tzompantli era un monumento de cráneos que servía como reconocimiento póstumo a personalidades destacadas por su sabiduría y obras. También se asocia al árbol tzompancuahuitl (colorín), que en el pensamiento anahuaca representa el tiempo de la sabiduría humana.",
        hitos: [
          "Tzompanco: Lugar del tzompantli", 
          "Tzompancuahuitl: Tiempo de la sabiduría", 
          "Güachichil: Árbol colorín"
        ]
      },
      {
        id: "jeroglifico-municipal",
        nombre: "El Jeroglífico Municipal",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Los elementos visuales y el profundo significado de los colores del escudo.",
        descripcion: "El jeroglífico oficial es un cráneo humano ensartado en un palo horizontal sostenido por dos palos verticales (Tzompantli), enmarcado en una figura que dice 'co' (lugar). Cada color tiene un significado: el rojo es la sabiduría, el blanco es el principio y la luz, el azul del fondo evoca la laguna y la base negra simboliza el Mictlán o descanso eterno.",
        hitos: [
          "Cráneo rojo: Sabiduría", 
          "Fondo azul: La laguna de Zumpango", 
          "Base negra: Mictlán (Eterno reposo)"
        ]
      },
      {
        id: "toponimos-barrios",
        nombre: "Topónimos de Localidades",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "El significado original de los barrios y pueblos que conforman el territorio.",
        descripcion: "Diversos puntos geográficos conservan su raíz náhuatl, describiendo su entorno natural o histórico. Destacan lugares cercanos a la laguna y elementos del paisaje que fueron vitales para los antiguos pobladores.",
        hitos: [
          "Atenco: Lugar a la orilla del agua", 
          "Cuautlalpan: Tierra energizada por el sol", 
          "Coyocalco: Lugar de la casa del coyote", 
          "Zitlaltepec: Ciudad del firmamento nocturno"
        ]
      },
      {
        id: "localizacion-extension",
        nombre: "Localización y Extensión Geográfica",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Coordenadas exactas, límites territoriales y superficie total de Zumpango.",
        descripcion: "El municipio se localiza a 40 kilómetros al norte de la Ciudad de México. Limita con municipios como Tequixquiac, Hueypoxtla, Tecámac y Cuautitlán, y con Tizayuca (Hidalgo). Su extensión territorial abarca un total de 244.08 kilómetros cuadrados.",
        hitos: [
          "Superficie: 244.08 km²", 
          "Ubicación: 40 km al norte del D.F. (CDMX)", 
          "Límites: Colinda con Edomex y un municipio de Hidalgo (Tizayuca)"
        ]
      },
      {
        id: "topografia-relieve",
        nombre: "Topografía del Territorio",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Distribución del relieve entre lomas, mesas y llanuras planas.",
        descripcion: "El terreno de Zumpango está dividido en dos zonas principales. La mitad norte se caracteriza por lomas y formación de mesas, destacando una elevación llamada Cuaquemec al oriente. La mitad sur se transforma en un territorio llano con un ligero declive hacia el poniente, donde se asienta la laguna.",
        hitos: [
          "Norte: Lomas y mesas", 
          "Oriente: Elevación Cuaquemec", 
          "Sur/Poniente: Terreno plano y zona de laguna"
        ]
      },
      {
        id: "altitud-promedio",
        nombre: "Altitud sobre el Nivel del Mar",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "La altura promedio de la región plana y de la cuenca lacustre.",
        descripcion: "En general, la parte plana del municipio de Zumpango se encuentra a una altitud promedio de 2,250 metros sobre el nivel del mar (msnm). Específicamente, el vaso o cuenca de la laguna de Zumpango está a 2,245 msnm, mientras que las zonas de lomas tienen una altitud mayor.",
        hitos: [
          "Promedio en llanura: 2,250 msnm", 
          "Laguna de Zumpango: 2,245 msnm"
        ]
      },
      {
        id: "geologia-terciaria-cuaternaria",
        nombre: "Geología del Territorio",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Composición del suelo desde la provincia del eje neovolcánico.",
        descripcion: "Zumpango se asienta en la provincia del eje neovolcánico. El 80% de su territorio corresponde al periodo cuaternario con depósitos lacustres y sedimentos de aluvión. Al norte y poniente existen formaciones más antiguas del periodo terciario, incluyendo rocas clásticas y depósitos de basaltos colados (3%).",
        hitos: [
          "80% Periodo Cuaternario: Sedimentos de aluvión", 
          "Formaciones rocosas al norte (Cuevas y Tequixquiac)", 
          "Basaltos colados cerca de la laguna"
        ]
      },
      {
        id: "division-politica-actual",
        nombre: "División Política y Organización",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "La estructura territorial y las comunidades que conforman al municipio.",
        descripcion: "El municipio se compone de una ciudad cabecera, seis pueblos, una ranchería, colonias agrícolas, unidades habitacionales, granjas y ejidos. Destaca la presencia de la base aérea militar y las zonas de desagüe del valle de México. En total, suma 36 localidades principales que organizan la vida comunitaria y económica.",
        hitos: [
          "1 ciudad (Cabecera municipal)", 
          "6 pueblos y 1 ranchería", 
          "Incluye una base aérea militar"
        ]
      },
      {
        id: "orografia-cerros",
        nombre: "Orografía y Elevaciones Principales",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Los cerros y elevaciones que contrastan con la planicie de la laguna.",
        descripcion: "Aunque la mitad del territorio es plano con un ligero valle, la otra mitad norte presenta lomas importantes. Destacan el cerro Cuaqueméquez (2,350 msnm), el cerro Xóloc (2,470 msnm) y una serie de once mesas al poniente. La elevación mayor es el cerro Zitlaltepetl, que alcanza los 2,660 metros sobre el nivel del mar.",
        hitos: [
          "Cerro Zitlaltepetl: El punto más alto (2,660 msnm)", 
          "Cerro Xóloc: Frontera con Tecámac (2,470 msnm)", 
          "Cerro Cuaqueméquez (2,350 msnm)"
        ]
      }
    ]
  },
  {
    id: "edad-moderna",
    titulo: "Edad Moderna y Contemporánea",
    lugares: [
      {
        id: "plaza-principal",
        nombre: "Plaza Principal de Zumpango",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Corazón civil y cultural del municipio.",
        descripcion: "Espacio público donde convergen la cultura, eventos y vida diaria.",
        hitos: ["Kiosco municipal", "Eventos cívicos"]
      }
    ]
  }
];

// Muestra el menú principal con las épocas
function mostrarMenu() {
  // 1. Mostrar la sección introductoria al volver al menú principal
  const intro = document.querySelector('.seccion-intro');
  if (intro) {
    intro.style.display = 'flex'; 
  }

  const contenedor = document.getElementById('app');
  let html = `<div class="grid-epocas">`;

  epocasData.forEach(epoca => {
    html += `
      <article class="card-epoca" onclick="mostrarEpoca('${epoca.id}')">
        <h3>${epoca.titulo}</h3>
        <p>Explorar lugares históricos (${epoca.lugares.length})</p>
      </article>
    `;
  });

  html += `</div>`;
  contenedor.innerHTML = html;
}

// Muestra los lugares de una época específica con diseño amplio
function mostrarEpoca(idEpoca) {
  const intro = document.querySelector('.seccion-intro');
  if (intro) intro.style.display = 'none';

  const epoca = epocasData.find(e => e.id === idEpoca);
  if (!epoca) return;

  const contenedor = document.getElementById('app');
  let html = `<div class="contenedor-detalles">`;

  // Iteramos sobre cada lugar para crear una tarjeta ancha por cada uno
  epoca.lugares.forEach((lugar, index) => {
    html += `
      <article class="tarjeta-detalle">
        <!-- El botón de regresar solo se muestra en la primera tarjeta -->
        ${index === 0 ? `<button class="btn-azul" onclick="mostrarMenu()">← Volver al Menú</button>` : ''}
        
        <h2>${lugar.nombre}</h2>
        <p class="subtitulo">${lugar.resumen}</p>
        
        <!-- Muestra la imagen si existe -->
        <img src="${lugar.imagen}" alt="${lugar.nombre}" class="img-detalle">
        
        <p class="descripcion">${lugar.descripcion}</p>
        
        <h3>Hitos Destacados</h3>
        <ul>
          ${lugar.hitos ? lugar.hitos.map(hito => `<li>${hito}</li>`).join('') : ''}
        </ul>
      </article>
    `;
  });

  html += `</div>`;
  contenedor.innerHTML = html;
}

// Búsqueda por Palabra Clave
function buscarPorPalabraClave() {
  const input = document.getElementById('input-busqueda');
  const texto = input.value.toLowerCase().trim();
  
  if (!texto) {
    mostrarMenu();
    return;
  }

  const resultados = [];

  epocasData.forEach(epoca => {
    epoca.lugares.forEach(lugar => {
      const contenidoCompleto = (
        lugar.nombre + " " + 
        lugar.resumen + " " + 
        lugar.descripcion + " " + 
        (lugar.hitos ? lugar.hitos.join(" ") : "")
      ).toLowerCase();

      if (contenidoCompleto.includes(texto)) {
        resultados.push(lugar);
      }
    });
  });

  mostrarResultadosBusqueda(resultados, texto);
}

// Renderiza los resultados encontrados por el buscador con diseño amplio
function mostrarResultadosBusqueda(resultados, termino) {
  const intro = document.querySelector('.seccion-intro');
  if (intro) intro.style.display = 'none';

  const contenedorApp = document.getElementById('app');
  contenedorApp.innerHTML = '';

  if (resultados.length === 0) {
    contenedorApp.innerHTML = `
      <div class="tarjeta-detalle" style="text-align: center;">
        <button class="btn-azul" onclick="mostrarMenu()">← Volver al Menú</button>
        <h3 style="margin-top: 20px;">No se encontraron resultados para "${termino}"</h3>
        <p>Prueba con términos como "iglesia", "san pedro", "laguna" o "templo".</p>
      </div>
    `;
    return;
  }

  let htmlResultados = `
    <div class="contenedor-detalles">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2>Resultados para: "<em>${termino}</em>"</h2>
      </div>
  `;

  resultados.forEach((lugar, index) => {
    htmlResultados += `
      <article class="tarjeta-detalle">
        ${index === 0 ? `<button class="btn-azul" onclick="mostrarMenu()">← Volver al Menú</button>` : ''}
        
        <h2>${lugar.nombre}</h2>
        <p class="subtitulo">${lugar.resumen}</p>
        
        <img src="${lugar.imagen}" alt="${lugar.nombre}" class="img-detalle">
        
        <p class="descripcion">${lugar.descripcion}</p>
        
        <h3>Hitos Destacados</h3>
        <ul>
          ${lugar.hitos ? lugar.hitos.map(hito => `<li>${hito}</li>`).join('') : ''}
        </ul>
      </article>
    `;
  });

  htmlResultados += `</div>`;
  contenedorApp.innerHTML = htmlResultados;
}

// Inicialización de Eventos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarMenu();

  const btnBuscar = document.getElementById('btn-buscar');
  const inputBusqueda = document.getElementById('input-busqueda');

  if (btnBuscar) {
    btnBuscar.addEventListener('click', buscarPorPalabraClave);
  }

  if (inputBusqueda) {
    inputBusqueda.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        buscarPorPalabraClave();
      }
    });
  }
});
