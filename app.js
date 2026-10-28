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

// Muestra los lugares de una época específica
function mostrarEpoca(idEpoca) {
  // 2. Ocultar la sección introductoria al entrar a una época
  const intro = document.querySelector('.seccion-intro');
  if (intro) {
    intro.style.display = 'none';
  }

  const epoca = epocasData.find(e => e.id === idEpoca);
  if (!epoca) return;

  const contenedor = document.getElementById('app');
  let html = `
    <button class="btn-regresar" onclick="mostrarMenu()">← Volver a Menú de Épocas</button>
    <h2 style="margin-bottom: 20px;">${epoca.titulo}</h2>
    <div class="grid-lugares">
  `;

  epoca.lugares.forEach(lugar => {
    html += `
      <article class="card-lugar">
        <img src="${lugar.imagen}" alt="${lugar.nombre}">
        <h3>${lugar.nombre}</h3>
        <p>${lugar.resumen}</p>
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

// Renderiza los resultados encontrados por el buscador
function mostrarResultadosBusqueda(resultados, termino) {
  // 3. Ocultar introducción durante la visualización de resultados de búsqueda
  const intro = document.querySelector('.seccion-intro');
  if (intro) {
    intro.style.display = 'none';
  }

  const contenedorApp = document.getElementById('app');
  contenedorApp.innerHTML = '';

  if (resultados.length === 0) {
    contenedorApp.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <button class="btn-regresar" onclick="mostrarMenu()">← Volver a Menú de Épocas</button>
        <h3>No se encontraron resultados para "${termino}"</h3>
        <p>Prueba con términos como <strong>"iglesia"</strong>, <strong>"san pedro"</strong>, <strong>"laguna"</strong> o <strong>"templo"</strong>.</p>
      </div>
    `;
    return;
  }

  let htmlResultados = `
    <button class="btn-regresar" onclick="mostrarMenu()">← Volver a Menú de Épocas</button>
    <h2 style="text-align: center; margin-bottom: 20px;">
      Resultados de búsqueda para: "<em>${termino}</em>"
    </h2>
    <div class="grid-lugares">
  `;

  resultados.forEach(lugar => {
    htmlResultados += `
      <article class="card-lugar">
        <img src="${lugar.imagen}" alt="${lugar.nombre}">
        <h3>${lugar.nombre}</h3>
        <p>${lugar.resumen}</p>
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
