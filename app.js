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
        resumen: "Centro ceremonial ceremonial en la cuenca.",
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
