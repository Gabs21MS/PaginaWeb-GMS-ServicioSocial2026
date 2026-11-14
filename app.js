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
        nombre: "1567 d.C.: Concesión de una usadera para el hospital de la comunidad",
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
    id: "independencia-reforma-porfiriato",
    titulo: "Independencia, Reforma y Porfiriato",
    lugares: [
      {
        id: "intro-independencia",
        nombre: "De la Independencia al Porfiriato en Zumpango",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Transformaciones políticas, luchas armadas y modernización en la región.",
        descripcion: "Durante los siglos XIX y principios del XX, Zumpango experimentó profundos cambios: desde la participación de sus pobladores en el movimiento insurgente y la defensa frente a la invasión norteamericana y francesa, hasta la creación del Estado de México, la llegada del ferrocarril y las grandes obras de desagüe del Valle de México.",
        hitos: [
          "Intensificación del movimiento insurgente entre 1810 y 1821",
          "Creación del Estado de México en 1824",
          "Obras monumentales como el Gran Canal del Desagüe"
        ]
      },
      {
        id: "fecha-1810-1821",
        nombre: "1810 - 1821: Movimiento Insurgente y Acciones Preventivas",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1812",
        nombre: "18 de marzo de 1812: Firma de la Constitución Política de la Monarquía Española",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1820",
        nombre: "31 de julio de 1820: Erección del Ayuntamiento Constitucional de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1821",
        nombre: "1821: Declaración de México como país libre e independiente",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1824",
        nombre: "2 de marzo de 1824: Creación del Estado de México (Decreto número 2)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1825",
        nombre: "9 de febrero de 1825: Decreto número 36 de reorganización de ayuntamientos",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1847",
        nombre: "14 de septiembre de 1847: Asedio y defensa patriótica ante tropas norteamericanas",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1862",
        nombre: "3 de agosto de 1862: Zumpango se incorpora en tres distritos militares",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1866",
        nombre: "1866: Separación de municipios y libertad de poblaciones ante la intervención francesa",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1877",
        nombre: "23 de abril de 1877: Decreto 10 del Congreso del Estado (Zumpango se eleva a Ciudad)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1886",
        nombre: "9 de febrero de 1886: Inicio de los trabajos del Gran Canal del Desagüe",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1894",
        nombre: "22 de diciembre de 1894: Término del túnel de Tequixquiac",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1900",
        nombre: "17 de marzo de 1900: Inauguración oficial de las obras del desagüe por Porfirio Díaz",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1917",
        nombre: "1917: Promulgación de la Constitución Política de los Estados Unidos Mexicanos",
        imagen: "https://via.placeholder.com/300x180"
      }
    ]
  },
  {
    id: "revolucion-epoca-moderna",
    titulo: "Revolución y Época Moderna",
    lugares: [
      {
        id: "intro-revolucion-moderna",
        nombre: "Revolución Mexicana y Desarrollo Moderno en Zumpango",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Transformación política, reparto agrario y auge económico en el siglo XX.",
        descripcion: "La cabecera municipal y sus comunidades participaron activamente en la Revolución Mexicana, dando paso posteriormente a la reorganización constitucional, la dotación de ejidos y grandes obras hidráulicas como el nuevo túnel del Gran Canal del Desagüe.",
        hitos: [
          "Promulgación de la Constitución de 1917 y fin de las jefaturas políticas",
          "Dotación y ampliación de ejidos en las comunidades del municipio",
          "Construcción del nuevo túnel del Gran Canal del Desagüe (1936 - 1946)"
        ]
      },
      {
        id: "fecha-1910",
        nombre: "1910: Pedro Campa se levanta en armas por un ideal agrarista y se une al zapatismo",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1917",
        nombre: "1917: Promulgación de la Constitución Política; se cancela el cargo de jefe político y Pedro Campa asume como primer presidente municipal constitucional",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1920",
        nombre: "1920: Muere el gobernador Agustín Millán y surge como gobernador Abundio Gómez con apoyo de Álvaro Obregón",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1925",
        nombre: "1925: Creación del Partido Socialista del Trabajo (PST) del Estado de México en Toluca",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1929",
        nombre: "1929: Creación del Partido Nacional de la Revolución (PNR)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1929-1933",
        nombre: "1929 - 1933: Periodo de gobierno de Filiberto Gómez en el Estado de México",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1933",
        nombre: "16 de marzo de 1933: Decreto 64 que eleva el barrio de San Sebastián a la categoría de pueblo",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1934",
        nombre: "1934: Se debilita el grupo político local al ser suprimido el Partido Socialista del Trabajo (PST)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1936-tunel",
        nombre: "1936: Inician los trabajos del nuevo túnel destinado al Gran Canal del Desagüe del Valle de México",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1936-bocanegra",
        nombre: "31 de diciembre de 1936: Decreto 63 que eleva a San Miguel Bocanegra a la categoría de pueblo con el nombre de Bocanegra",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1937-1940",
        nombre: "1937 - 1940: Periodo de Wenceslao Labra como gobernador del Estado de México",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1940",
        nombre: "1940: Wenceslao Labra impone como presidente municipal a Leonardo García (primer campesino en el cargo desde 1820) y se emplean más de mil trabajadores en las obras del túnel",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1942",
        nombre: "8 de marzo de 1942: Muere el gobernador Alfredo Zárate Albarrán y Manuel Ávila Camacho nombra a Isidro Fabela como gobernador interino",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1946",
        nombre: "1946: Concluyen los trabajos del nuevo túnel del Gran Canal del Desagüe, propiciando un auge social y económico en Zumpango",
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
      },
      {
        id: "Zitlaltepetl",
        nombre: "Cerro Zitlaltepetl: El punto más alto (2,660 msnm)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "Xóloc",
        nombre: "Cerro Xóloc: Frontera con Tecámac (2,470 msnm)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "Cuaqueméquez",
        nombre: "Cerro Cuaqueméquez (2,350 msnm)",
        imagen: "https://via.placeholder.com/300x180"
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
      },
      {
        id: "transformacion-urbana-siglo-xx",
        nombre: "Desarrollo Urbano, Industrial y Social (Siglo XX)",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Del desmantelamiento del ferrocarril a la industria textil y la planeación urbana.",
        descripcion: "Durante la segunda mitad del siglo XX, Zumpango transitó de una economía centrada en el transporte ferroviario hacia el desarrollo industrial con la fábrica textil 'La Hortensia', la perforación de pozos de riego y la creación de planes estratégicos de crecimiento poblacional.",
        hitos: [
          "1948: Dotación de siete pozos profundos de riego para los barrios de Zumpango",
          "1952: Apertura de la fábrica textil 'La Hortensia' en los antiguos talleres del ferrocarril",
          "1987 - 1993: Creación y reforma del Plan del Centro de Población Estratégico de Zumpango"
        ]
      },
      {
        id: "fecha-1942-1945",
        nombre: "1942 - 1945: Conflictos laborales y políticos provocan el cierre (1942) y desmantelamiento total (1945) del sistema ferroviario",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1944-1945",
        nombre: "1944 - 1945: Bartolo Bautista asume la presidencia municipal; inicia la hegemonía política del 'grupo Atlacomulco' en Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1948",
        nombre: "1948: Por gestión de Julio Osorno, el gobierno federal otorga siete pozos profundos de agua para riego en los barrios de la ciudad",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1949",
        nombre: "19 de octubre de 1949: Decreto 60 que eleva al barrio de San Pedro al rango de pueblo con el nombre de San Pedro de la Laguna",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1952",
        nombre: "1952: Se acondiciona la fábrica textil 'La Hortensia', S.A. en el inmueble de los antiguos talleres del ferrocarril",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1958-1960",
        nombre: "1958 - 1960: Durante la gestión del Lic. Alfredo Garza se incinera el archivo histórico municipal anterior a 1940",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1960",
        nombre: "1960: Durante excavaciones en la ciudad de Zumpango se halla un cráneo fosilizado con una antigüedad estimada de 12,000 años",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1964",
        nombre: "22 de diciembre de 1964: Decreto 38 que eleva a la categoría política de congregación al poblado de Santa María de Guadalupe",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1969",
        nombre: "1969: El Comité Geográfico Municipal elabora la carta geográfica de Zumpango preparatoria para los censos de 1970",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1983-1985",
        nombre: "1983 - 1985: El Dr. Pastor Oropeza impulsa el proyecto de un hospital regional de especialidades paramunicipal, inaugurado en 1985",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1987",
        nombre: "16 de febrero de 1987: Decreto 181 que crea el Plan del Centro de Población Estratégico de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1992",
        nombre: "2 al 10 de octubre de 1992: Arribo a pie de contingentes indígenas de Alaska a Argentina ('Jornadas de Paz y Dignidad') en reconocimiento histórico al pueblo tzompanteca",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1993",
        nombre: "19 de agosto de 1993: Se reforma el Plan del Centro de Población Estratégico de Zumpango en la Gaceta del Estado (Tomo CLVI, N° 36)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-1997-2000",
        nombre: "1997 - 2000: Primera alternancia partidista en el Ayuntamiento de Zumpango con el triunfo del PRD tras décadas de gobiernos del PST, PNR, PRM y PRI",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "encuentro-continental-1992",
        nombre: "Reconocimiento Continental en Zumpango (1992)",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Encuentro de los pueblos originarios de América a 500 años de resistencia.",
        descripcion: "En el marco de las carreras de relevos de las Jornadas de Paz y Dignidad (de Alaska y Argentina hacia Teotihuacán y el Zócalo de la Ciudad de México), diversos grupos étnicos acordaron visitar y pernoctar en Zumpango en agradecimiento por haber recibido y alojado a la familia tenochca-mexica en el año 1216.",
        hitos: [
          "2 de octubre de 1992: Llegada a pie de delegaciones de Alaska, EE. UU. y el norte/centro de México a la Casa de Cultura",
          "9 de octubre de 1992: Arribo de corredores de relevos de Centroamérica y el sur de México",
          "10 de octubre de 1992: Partida hacia Teotihuacán para culminar el 12 de octubre en la Ciudad de México"
        ]
      },
      {
        id: "presidentes-municipales-xx",
        nombre: "Cronología de Presidentes Municipales (1912 - 2000)",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Registro histórico de los gobernantes del municipio desde el periodo revolucionario hasta el cierre del siglo XX.",
        descripcion: "Tras la quema del archivo anterior a 1940, se reconstruyó la lista de autoridades municipales iniciando con Pedro García en 1912. Destacan figuras revolucionarias como Pedro Campa (1918), la primera presidenta municipal en el Estado de México, María Isabel Vargas Ocaris (1964-1966), y la transición democrática hacia el año 2000.",
        hitos: [
          "1912 - 1920: Pedro García (1912), Agustín Ferardo, Genaro Sánchez (1913), Milburgo González (1914), Enrique C. Rojas (1915-1916), Enrique Tesillo (1917), Pedro Campa (1918), Enrique Moreno y J. Guadalupe Meléndez (1919), J. Jesús García y César Infante (1920)",
          "1921 - 1939: Daniel Hernández (1921), Abel M. Domínguez (1922, 1930-1931, 1934), J. Guadalupe Meléndez (1923), Enrique Moreno y Emilio Moreno (1924), Manuel Bazauri Salazar (1925), Juan Legaspi (1926, 1928-1929), Adrián Legaspi y Fidencio Atepaneca (1927), Willebaldo Vargas y Enrique Moreno (1931), Agustín Rivero Domínguez (1934), Abel Domínguez J. R. (1935), Amado Casasola (1935-1936), José Rodríguez Infante (1936-1938), Leonardo García (1938-1939)",
          "1940 - 1963: Luciano García (1940-1941), Leonardo García (1942-1943, con interinatos de Tiburcio Delgado y Ascención Vázquez), Bartolomé Bautista (1944-1945), Ascención Vázquez (1946), Luis Martínez (1947-1948), José Trinidad Mercado (1949-1951), Francisco Zermeño (1952-1953), Enrique de la Torre (1954), Ignacio Santillán (1955-1957), Lic. Alfredo García Bravo (1958-1960, interinato de Francisco García), Gumersindo Rivero Domínguez (1961-1963)",
          "1964 - 2000: María Isabel Vargas Ocaris (1964-1966, primera presidenta municipal), Bartolo Ramírez López (1967), Adolfo Sánchez Montaño (1967-1969), Francisco Vargas García (1970-1972, interinato de Faustino Parra), Jorge Domínguez Rivero (1973-1975), Prof. Juan Ramos Arenas (1976-1978, interinato de Luciano Gálvez García), Eulogio Aguirre Leonardo (1979-1981, interinato de Beatriz Rodríguez Leonardo), Arturo Ávila Rodríguez (1982-1984), Ing. Cecilio Barrera Reyes (1985-1987), Ing. Enrique Rojas Fragoso (1988-1990), Leonel Domínguez Rivero (1991-1993), Ing. José Luis Ramos (1994-1996), Ing. Armando Vargas Gaspar (1997-2000)"
        ]
      }
    ]
  },
{
    id: "referencias-historicas-poblaciones",
    titulo: "Referencias Históricas de las poblaciones",
    lugares: [
      {
        id: "intro-poblaciones",
        nombre: "Origen y Evolución de las Poblaciones de Zumpango",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Cronología de fundaciones, decretos y cambios territoriales de los pueblos y colonias del municipio.",
        descripcion: "A lo largo de los siglos, las comunidades que integran Zumpango pasaron de ser antiguos calpullis, estancias y haciendas a consolidarse como pueblos, rancherías y colonias agrarias mediante diversos decretos estatales y dotaciones ejidales.",
        hitos: [
          "De Tzompanco (hace 2,000 años) a Ciudad Zumpango de Ocampo (1877)",
          "Elevación a categoría de pueblo de localidades como Cuevas, San Sebastián, Bocanegra y San Pedro de la Laguna",
          "Formación de colonias agrarias y establecimientos como la Base Aérea Militar N° 1 en Santa Lucía"
        ]
      },
      // --- ZUMPANGO DE OCAMPO ---
      {
        id: "fecha-tzompanco-fundacion",
        nombre: "Hace 2,000 años (Zumpango): Fundación original bajo el nombre de Tzompanco",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-zumpango-1595",
        nombre: "1595 (Zumpango): Ostenta la distinción de cabecera de partido y cabeza de doctrina",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-zumpango-1820",
        nombre: "1820 (Zumpango): Se constituye en cabecera de municipio del mismo nombre",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-zumpango-1861",
        nombre: "1861 (Zumpango): Es nombrado cabeza de distrito judicial y rentístico",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-zumpango-1877",
        nombre: "21 y 23 de abril de 1877 (Zumpango): Se eleva al rango de ciudad como Zumpango de Ocampo en honor a Melchor Ocampo",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- SAN JUAN ZITLALTÉPEC ---
      {
        id: "fecha-zitlaltepec-1350-1521",
        nombre: "1350 - 1521 (San Juan Zitlaltépec): Establecimiento del pueblo durante la expansión azteca (con antecedentes teotihuacanos)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-zitlaltepec-1595",
        nombre: "1595 (San Juan Zitlaltépec): Pasa a pertenecer al partido de Zumpango de la Laguna",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-zitlaltepec-1955",
        nombre: "9 de octubre de 1955 (San Juan Zitlaltépec): Se erige en parroquia",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- CUEVAS ---
      {
        id: "fecha-cuevas-1567",
        nombre: "1567 (Cuevas): Don Vicente Cuevas recibe un sitio de tierras para caleras entre Zumpango y Hueypoxtla",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-cuevas-1884",
        nombre: "8 de octubre de 1884 (Cuevas): Decreto 69 que declara que el pueblo de Cuevas se agrega al municipio de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- SAN BARTOLO CUAUTLALPAN ---
      {
        id: "fecha-san-bartolo-1520",
        nombre: "1520 (San Bartolo Cuautlalpan): Pertenecía a México-Tenochtitlan; tras la conquista quedó como estancia de Tlatelolco",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-san-bartolo-1861",
        nombre: "1861 (San Bartolo Cuautlalpan): Pasa a pertenecer definitivamente al municipio de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- SAN PEDRO DE LA LAGUNA ---
      {
        id: "fecha-san-pedro-1949",
        nombre: "19 de octubre de 1949 (San Pedro de la Laguna): Decreto 60 que concede el rango de pueblo a San Pedro de la Laguna (antes barrio Atenco)",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- SAN SEBASTIÁN ---
      {
        id: "fecha-san-sebastian-1595-1604",
        nombre: "1595 - 1604 (San Sebastián): Queda despoblado por la Ley de Congregación de Pueblos (antiguo hueycalpulli Atlautenco)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-san-sebastian-1596-1619",
        nombre: "1596 - 1619 (San Sebastián): Los jesuitas se apoderan de 3,600 hectáreas al este y norte de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-san-sebastian-1933",
        nombre: "16 de marzo de 1933 (San Sebastián): Decreto 64 que eleva el barrio de San Sebastián al rango de pueblo",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- BOCANEGRA ---
      {
        id: "fecha-bocanegra-1929-sept",
        nombre: "19 de septiembre de 1929 (Bocanegra): Campesinos de Zitlaltépec solicitan dotación de ejido para San Miguel Bocanegra",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-bocanegra-1929-nov",
        nombre: "5 de noviembre de 1929 (Bocanegra): Ocupación de 70 ha en el rancho Las Palomas para formar el censo del pueblo",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-bocanegra-1930",
        nombre: "23 de enero de 1930 (Bocanegra): El ejido de San Miguel Bocanegra obtiene su resolución presidencial",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-bocanegra-1935",
        nombre: "30 de octubre de 1935 (Bocanegra): Se verifica la ejecución oficial del ejido de San Miguel Bocanegra",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-bocanegra-1936",
        nombre: "31 de diciembre de 1936 (Bocanegra): Decreto 63 que eleva a San Miguel Bocanegra a la categoría de pueblo de Bocanegra",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- SAN JOSÉ LA LOMA, LÁZARO CÁRDENAS, SANTA MARÍA DE GUADALUPE Y WENCESLAO LABRA ---
      {
        id: "fecha-lazaro-cardenas-1938",
        nombre: "1938 (Lázaro Cárdenas): Fundación de la comunidad agraria por don Porfirio Flores en terrenos del antiguo rancho de los Castro",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-santa-maria-guadalupe-1964",
        nombre: "1964 (Santa María de Guadalupe): Don Celedonio Bautista encabeza la fundación de esta comunidad agraria",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-wenceslao-labra-1976",
        nombre: "1976 (Wenceslao Labra / San Isidro): Creación de la comunidad en terrenos disputados en la antigua hacienda de Bocanegra",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-wenceslao-labra-1985",
        nombre: "1985 (Wenceslao Labra / San Isidro): Vecinos solicitan auxilio de agua potable a las autoridades de Tequixquiac",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- COLONIA PRIMERO DE MAYO ---
      {
        id: "fecha-primero-mayo-1941",
        nombre: "1941 (Colonia Primero de Mayo): Inauguración de la colonia campesina (65 ha) por el presidente general Lázaro Cárdenas",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- COLONIAS SANTA LUCÍA Y XÓLOC ---
      {
        id: "fecha-xoloc-1861",
        nombre: "1861 (Santa Lucía y Xóloc): Las ex-haciendas de Santa Lucía y San Juan de la Labor pasan al municipio de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-santa-lucia-colonia-1930",
        nombre: "Hacia 1930 (Santa Lucía): Inicia la colonización con ejidatarios del ejido de San Lucas Xóloc",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-xoloc-1950",
        nombre: "1950 (Colonia Ejidal de Xóloc): Ejidatarios comienzan a poblar la Colonia Ejidal de Xóloc",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-lopez-mateos-1969",
        nombre: "1969 - 1970 (Colonia Xóloc): El Comité Geográfico Municipal la denomina oficialmente Licenciado Adolfo López Mateos",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- BASE AÉREA MILITAR NÚMERO UNO ---
      {
        id: "fecha-base-aerea-1576",
        nombre: "1576 (Santa Lucía): El Colegio Máximo de los jesuitas adquiere la estancia de Santa Lucía",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-base-aerea-1861",
        nombre: "1861 (Santa Lucía): Decreto N° 25 por el cual la hacienda de Santa Lucía pasa al municipio de Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-base-aerea-1946-1952",
        nombre: "1946 - 1952 (Base Aérea Militar N° 1): Durante el gobierno de Miguel Alemán se destinan ~2,000 ha del casco de Santa Lucía para la base aérea",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- BUENAVISTA ---
      {
        id: "fecha-buenavista-1564",
        nombre: "28 de febrero de 1564 (Buenavista): Los naturales de Zumpango de la Laguna logran la adjudicación de sus ejidos",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-buenavista-1713",
        nombre: "1713 (Buenavista): Reconocimiento de límites del ejido colindando con la hacienda de Buenavista (propiedad de don Marcos Bautista)",
        imagen: "https://via.placeholder.com/300x180"
      },
      // --- PUEBLO NUEVO DE MORELOS ---
      {
        id: "fecha-pueblo-nuevo-1893",
        nombre: "4 de mayo de 1893 (Pueblo Nuevo de Morelos): Don Juan Galindo Pimentel dona 270 ha (Cuatro Caballerías) a San Sebastián y Zumpango",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "fecha-pueblo-nuevo-1925-1930",
        nombre: "1925 - 1930 (Pueblo Nuevo de Morelos): Moradores se separan del barrio de San Sebastián y fundan Pueblo Nuevo de Morelos",
        imagen: "https://via.placeholder.com/300x180"
      }
    ]
  },
  {
    id: "ciudadanos-ilustres",
    titulo: "Ciudadanos Ilustres",
    lugares: [
      {
        id: "intro-ciudadanos-ilustres",
        nombre: "Ciudadanos Ilustres y Distinguidos de Zumpango",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Biografías y fechas clave de personajes históricos, revolucionarios, educadores y gobernantes oriundos de Zumpango.",
        descripcion: "A lo largo de su historia, Zumpango ha sido cuna de figuras trascendentales en distintos ámbitos: desde señoríos prehispánicos y teólogos novohispanos, hasta líderes revolucionarios, gobernadores y mujeres pioneras en la política y la educación del Estado de México.",
        hitos: [
          "Origen de la dinastía tlahtoani mexica en Tzompanco (1216 - 1361)",
          "Participación destacada en la Revolución Mexicana y la política estatal",
          "Pioneras en la educación magisterial y primeras mujeres en cargos públicos del Estado de México"
        ]
      },
      {
        id: "ciudadano-tochpanehecatl",
        nombre: "Alrededor de 1200 d.C. - 1361: Tochpanehecatl, Tlahtoani de Tzompanco; en 1216 une a su hija Tlacapatzin con el mexica Ilhuicatl, dando origen a la dinastía tlahtoani mexica (1361 con Acamapichtli)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-juan-de-dios-castro",
        nombre: "1 de febrero de 1651: Nace en Zumpango de la Laguna Juan de Dios Castro, jesuita, escritor y catequista entre los naturales otomíes a fines del siglo XVII",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-antonio-peralta",
        nombre: "16 de abril de 1668 - 1736: Antonio Peralta, nacido en Zumpango de la Laguna; teólogo, escritor y superior de casas de provincias jesuitas",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-luis-malanco",
        nombre: "19 de agosto de 1831 - 5 de marzo de 1888: Luis Malanco, nacido en Zumpango de la Laguna; abogado, presidente del ayuntamiento de la capital, diplomático en Italia y magistrado del Tribunal Superior de Justicia",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-pedro-campa",
        nombre: "20 de noviembre de 1910 - 1918: Pedro Campa inicia la gesta revolucionaria en Zumpango de Ocampo uniéndose al maderismo y zapatismo; fue presidente municipal en 1918",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-francisca-embarcadero",
        nombre: "29 de enero de 1893 - 10 de mayo de 1979: Francisca Embarcadero García, nacida en Zumpango de Ocampo; profesora desde 1910 y destacada educadora en su ciudad natal hasta su fallecimiento",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-wenceslao-labra",
        nombre: "19 de mayo de 1895 - 10 de diciembre de 1974: Wenceslao Labra, nacido en Zumpango de Ocampo; teniente coronel, diputado, senador y gobernador del Estado de México (16 de septiembre de 1937 al 15 de septiembre de 1941)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-maria-isabel-vargas",
        nombre: "8 de julio de 1906 - 9 de marzo de 1984: María Isabel Vargas Ocaris, nacida en Zumpango de Ocampo; fundadora del primer jardín de niños en Zumpango (1941) y primera mujer presidenta municipal en la historia de Zumpango y del Estado de México (1964 - 1966)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-alfredo-ramirez-luna",
        nombre: "6 de marzo de 1907 - 1970: Alfredo Ramírez Luna, nacido en Zumpango de Ocampo; tesorero (1940-41), presidente municipal de San Juan Teotihuacán (1943-45), diputado local (1955-57) y defensor de los mantos acuíferos de Texcoco",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "ciudadano-luz-maria-larralde",
        nombre: "21 de abril de 1915 - 23 de marzo de 1998: Luz María Larralde Belmont, nacida en Zumpango; recibió la medalla 'Belisario Domínguez' por 50 años de labor docente y fue diputada local (1957 - 1960), segunda mujer en contestar un informe de gobierno en el Estado de México",
        imagen: "https://via.placeholder.com/300x180"
      }
    ]
  },
  {
    id: "patrimonio-cultural",
    titulo: "Patrimonio Cultural",
    lugares: [
      {
        id: "intro-patrimonio-cultural",
        nombre: "Expresiones Artísticas, Arquitectónicas y Tradiciones",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Legado histórico en artes plásticas, arquitectura civil y religiosa, música, danza y artesanías de Zumpango.",
        descripcion: "El patrimonio cultural del municipio abarca desde templos y cruces atriales del siglo XVI, retablos barrocos y obras hidráulicas monumentales del siglo XIX, hasta murales del siglo XX, talleres artesanales y danzas tradicionales como los Santiagueros de San Bartolo Cuautlalpan.",
        hitos: [
          "Artes plásticas: Murales al fresco, óleos y escultura en madera y colorín",
          "Arquitectura: Compuertas del Gran Canal del Desagüe y templos históricos",
          "Tradiciones vivas: Danzas de Moros y Cristianos, Huehuenches y artesanías locales"
        ]
      },
      {
        id: "patrimonio-siglo-xvi-templos",
        nombre: "Segunda mitad del siglo XVI: Antecedentes arquitectónicos de los nueve templos católicos del municipio",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-siglo-xvi-cruz",
        nombre: "Siglo XVI: Cruz atrial orientada de norte a sur, vinculada por su diseño y sobriedad con el Mictlán",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-siglo-xvii",
        nombre: "Siglo XVII: Altar de madera acabado en oro conservado en el templo de la Purísima Concepción",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-siglo-xviii-religioso",
        nombre: "Siglo XVIII: Esplendor arquitectónico de los templos; puertas, púlpito, órgano y esculturas de colorín en La Concepción",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-siglo-xviii-civil",
        nombre: "Siglo XVIII: Construcción del casco de la exhacienda Bocanegra y la casa de la familia Espinosa",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-siglo-xix",
        nombre: "Siglo XIX: Edificio de la escuela primaria en el centro, casa Bonfil-Rivera y torre campanario de San Juan Bautista",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-epoca-haciendas",
        nombre: "Época de las haciendas: Origen de la vestimenta tradicional utilizada en la danza 'El cuero' en San Juan Zitlaltepec",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-1894-danza",
        nombre: "1894 (104 años cumplidos en 1998): Inicio de las presentaciones ininterrumpidas de la danza de 'Moros y cristianos' en San Bartolo Cuautlalpan",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-1895-1900",
        nombre: "1895 - 1900: Construcción de la compuerta más antigua del Gran Canal del Desagüe (estilos medieval y neoclásico francés)",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-1940",
        nombre: "1940: El gobernador Wenceslao Labra funda la cooperativa de mosaicos 'Zumex', origen de los talleres actuales",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-1941",
        nombre: "1941: Rigo Iglesias pinta el mural al fresco en la escuela 'Pedro Rodríguez Vargas' sobre el Zumpango de Wenceslao Labra",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "patrimonio-antes-1995",
        nombre: "Antes de 1995: Restauración de la casa cural Parroquial de la Concepción encabezada por el cura Juan Manuel Elías Linares",
        imagen: "https://via.placeholder.com/300x180"
      }
    ]
  },
  {
    id: "tradicion-oral-patrimonio-intangible",
    titulo: "Tradición Oral y Patrimonio Intangible",
    lugares: [
      {
        id: "intro-tradicion-oral",
        nombre: "Mitos, Leyendas, Cancionero y Costumbres de Zumpango",
        imagen: "https://via.placeholder.com/300x180",
        resumen: "Riqueza cultural en narraciones, música, creencias, dichos y tradiciones comunitarias.",
        descripcion: "Zumpango conserva una abundante tradición oral que abarca mitos, leyendas prehispánicas y virreinales, compositores de diversos géneros musicales, creencias populares, refranes y costumbres vigentes como el tianguis de los viernes y el tequio comunitario.",
        hitos: [
          "Cancionero tradicional: Compositores como Gelacio Castro, Valente Choreño Luna, Aurelio de la Cruz Martínez, Hipólito Luna Silva, Manuel Díaz Trejo, Juan Choreño Oropeza, Erasmo Ortega P. y Juan Hernández Santillán",
          "Creencias y dichos: Relatos de aparecidos, nahuales y el refrán 'Por Tizayuca sale el sol, por Teoloyucan la luna, para mujeres bonitas, Zumpango de la Laguna'",
          "Costumbres vivas: Solidaridad comunitaria en sepelios de Zitlaltepec y vigencia del tequio en obras colectivas"
        ]
      },
      {
        id: "tradicion-1035",
        nombre: "1035 d.C.: Tras la muerte de Mitl, sexto hueytecuhtli tlahtoani tolteca, su viuda Xiutlaltzin le sucede en el gobierno y sueña en Tzompanco que su esposo pide ser enterrado en la loma junto a la laguna",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "tradicion-1039",
        nombre: "Antes de finalizar 1039: Se cumplen los deseos de Mitl y muere Xiutlaltzin; ambos son sepultados juntos en Tzompanco bajo una pirámide alrededor de la cual se establecen familias allegadas",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "tradicion-1521",
        nombre: "A partir de 1521: Origen histórico de la costumbre del 'día de plaza' todos los viernes en el tianguis de Zumpango de Ocampo",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "tradicion-1885",
        nombre: "1885: Leyenda de la renovación milagrosa del lienzo de la Virgen de Guadalupe en San Pedro de la Laguna, motivo por el cual el cura Juan Climaco Ramírez impulsa la construcción de un nuevo templo",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "tradicion-peso-bautizado",
        nombre: "Hace más de 100 años (24 de junio): Leyenda de 'Juan peso' en San Juan Zitlaltepec, quien bautizó una moneda de a peso durante la fiesta de San Juan para que siempre regresara a su bolsillo",
        imagen: "https://via.placeholder.com/300x180"
      },
      {
        id: "tradicion-1938",
        nombre: "Hacia 1938: Mito de don Saturnino, pastor de Xilotzingo, y la aparición de tres seres encapuchados en el montículo 'El Mogote' sobre un tesoro oculto de barriles de oro y plata",
        imagen: "https://via.placeholder.com/300x180"
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
