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
      },
      {
        id: "cronologia-poblamiento",
        nombre: "Cronología de los Primeros Pobladores",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Fases de ocupación sedentaria y desarrollo cultural al oriente de la laguna.",
        descripcion: "Las investigaciones del arqueólogo Jeffrey R. Parsons indican que la ocupación inicial de la región se localizó al oriente de la laguna de Zumpango. Los primeros grupos de ocupación sedentaria se establecieron durante la fase Petlachique-Tzacualli. A partir de ahí, el poblamiento fue continuo a través de diversas etapas culturales hasta la época Azteca.",
        hitos: [
          "Fase Petlachique-Tzacualli: 200 a.C. - 100 d.C.",
          "Periodo Clásico: 100 - 700 d.C.",
          "Coyotlatelco: 700 - 900 d.C.",
          "Mazapan: 900 - 1110 d.C.",
          "Azteca: 1150 - 1520 d.C."
        ]
      },
      {
        id: "fase-petlachique",
        nombre: "Fase Petlachique-Tzacualli: 200 a.C. - 100 d.C.",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fase-clasico",
        nombre: "Periodo Clásico: 100 - 700 d.C.",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fase-coyotlatelco",
        nombre: "Coyotlatelco: 700 - 900 d.C.",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fase-mazapan",
        nombre: "Mazapan: 900 - 1110 d.C.",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fase-azteca",
        nombre: "Azteca: 1150 - 1520 d.C.",
        imagen: "https://via.placeholder.com/300x180"
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
      },
      {
        id: "cronologia-prehispanica",
        nombre: "Cronología y Organización Prehispánica",
        imagen: "https://via.placeholder.com/300x180", 
        resumen: "Línea del tiempo y estructura sociopolítica del Zumpango prehispánico.",
        descripcion: "La época prehispánica en Tzompanco se caracterizó por la organización en calpullis y señoríos. Destaca el asentamiento de la familia tenochca y la consolidación política de la región bajo el dominio mexica y posteriormente la dominación española.",
        hitos: [
          "1216 d.C.: Asentamiento de la familia tenochca en el territorio de Tzompanco",
          "1362 d.C.: Origen de la dinastía tlahtoani de los mexica (unión de Iluicaltl y Tlacapatzin)",
          "1520 d.C.: Límite de la tradición oral anahuaca y asedio de la soldadesca española a Tzompanco"
        ]
      },
      {
        id: "1216",
        nombre: "1216 d.C.: Asentamiento de la familia tenochca en el territorio de Tzompanco",
        imagen: "https://via.placeholder.com/300x180"
      }, 
      {
        id: "1362",
        nombre: "1362 d.C.: Origen de la dinastía tlahtoani de los mexica (unión de Iluicaltl y Tlacapatzin)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1520",
        nombre: "1520 d.C.: Límite de la tradición oral anahuaca y asedio de la soldadesca española a Tzompanco",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "cronologia-historica-zumpango",
        nombre: "De Tzompanco al Virreinato",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Línea del tiempo que abarca el señorío prehispánico, la conquista y el desarrollo colonial.",
        descripcion: "Los documentos registran una transición profunda en la región: desde los asentamientos tenochcas regidos por calpullis y señoríos, hasta la drástica reestructuración política, eclesiástica y territorial impuesta durante la dominación española a lo largo de casi tres siglos.",
        hitos: [
          "1521 d.C.: Caída de Tenochtitlan; Zumpango contaba entonces con unos 30,000 habitantes"
        ]
      }
    ]
  },
  {
    id: "virreinato-independencia",
    titulo: "Virreinato e Independencia",
    lugares: [
      {
        id: "1524",
        nombre: "1524 d.C.: Llegada de los primeros 12 religiosos franciscanos a México",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1526",
        nombre: "1526 d.C.: Inicia el proceso de evangelización en Tzompanco",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1530",
        nombre: "1530 d.C.: Aparición del corregimiento como autoridad española",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1536",
        nombre: "1536 d.C.: División del territorio en alcaldías mayores bajo el virrey Antonio de Mendoza",
        imagen: "https://via.placeholder.com/300x180"
      },  
      {
        id: "1540",
        nombre: "1540 d.C.: Zumpango y sus sujetos son encomendados a Gil González de Benavides",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1550",
        nombre: "1550 d.C.: Surgimiento de los ayuntamientos de república",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1554",
        nombre: "1554 d.C.: Diligencias de la Inquisición contra Hernando de Castilla por realizar ritos antiguos",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1555",
        nombre: "1555 d.C.: Alonso de Ávila Alvarado modera la tasa de tributo a 19 pesos de oro",
        imagen: "https://via.placeholder.com/300x180"
      },
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
      },
      {
        id: "1564",
        nombre: "1564 d.C.: Otorgamiento de licencia para tierras ejidales por don Luis de Velasco",
        imagen: "https://via.placeholder.com/300x180"
      },  
      {
        id: "1565",
        nombre: "1565 d.C.: La tasación de tributos se eleva a 2,807 pesos",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1566",
        nombre: "3 de agosto 1566 d.C.: Ejecución de los encomenderos Alonso y Gil González de Ávila por conspiración",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1567",
        nombre: "1567 d.C.: Concesión de una usadera para el hospital de la comunidads",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1576",
        nombre: "1576 d.C.: Los jesuitas establecen una estancia en Santa Lucía",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1579",
        nombre: "1579 d.C.: Antonio de Galdó envía un informe destacando la dulzura y provecho de la laguna",
        imagen: "https://via.placeholder.com/300x180"
      },  
      {
        id: "1593",
        nombre: "1593 d.C.: Zumpango es considerado alcaldía mayor y cabeza de partido",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1595",
        nombre: "1595 - 1604 d.C.: Desalojo de naturales del barrio de San Sebastián por expansión jesuita",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1596",
        nombre: "1596 d.C.: La mitad del barrio de Santiago Tlilac se transforma en hacienda",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1604",
        nombre: "1604 d.C.: Conclusión de la congregación de pueblos, barrios y estancias alrededor de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1607",
        nombre: "1607 - 1608 d.C.: Trabajos de desagüe de la laguna mediante la desviación del río Cuautitlán",
        imagen: "https://via.placeholder.com/300x180"
      },  
      {
        id: "1696",
        nombre: "1696 d.C.: Naturales de Zumpango logran comprar la hacienda a don Agustín de San Cristóbal",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1698",
        nombre: "1698 d.C.: San Andrés Jaltenco es transferido a pueblo con gobierno propio",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1707",
        nombre: "1707 - 1722 d.C.: Ampliación de la nave mayor del templo parroquial en forma de cruz latina",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1711",
        nombre: "1711 d.C.: Edictos para el reconocimiento territorial; la población de Zumpango era de 2,012 personas",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1712",
        nombre: "1712 d.C.: Avalúo de los bienes de Juan Marcos Bautista",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1713",
        nombre: "1713 d.C.: Reconstrucción del templo del barrio de Santa María y levantamiento de su torre",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1746",
        nombre: "1746 d.C.: La población alcanza las 554 familias de naturales y 3,450 habitantes en total",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1750",
        nombre: "1750 d.C.: Se agregan dos cuerpos y un remate al campanario del templo de la Purísima Concepción",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "1786",
        nombre: "4 de diciembre del 1786 d.C.: Zumpango ostenta el rango de subdelegación de intendencia",
        imagen: "https://via.placeholder.com/300x180"
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
        ${index === 0 ? `<button class="btn-azul" onclick="mostrarMenu()">← Volver al Menú</button>` : ''}
        
        <h2>${lugar.nombre}</h2>
        
        ${lugar.resumen ? `<p class="subtitulo">${lugar.resumen}</p>` : ''}
        
        <img src="${lugar.imagen}" alt="${lugar.nombre}" class="img-detalle">
        
        ${lugar.descripcion ? `<p class="descripcion">${lugar.descripcion}</p>` : ''}
        
        ${lugar.hitos && lugar.hitos.length > 0 ? `
          <h3>Información Destacada</h3>
          <ul>
            ${lugar.hitos.map(hito => `<li>${hito}</li>`).join('')}
          </ul>
        ` : ''}
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
        (lugar.resumen || "") + " " + 
        (lugar.descripcion || "") + " " + 
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
        
        ${lugar.resumen ? `<p class="subtitulo">${lugar.resumen}</p>` : ''}
        
        <img src="${lugar.imagen}" alt="${lugar.nombre}" class="img-detalle">
        
        ${lugar.descripcion ? `<p class="descripcion">${lugar.descripcion}</p>` : ''}
        
        ${lugar.hitos && lugar.hitos.length > 0 ? `
          <h3>Información Destacada</h3>
          <ul>
            ${lugar.hitos.map(hito => `<li>${hito}</li>`).join('')}
          </ul>
        ` : ''}
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
