export default {
  global: {
    componenteFormativo: 'Configuración de la plataforma digital',
    descripcionCurso:
      'La configuración de una plataforma digital es vital para los intereses económicos y sociales de una empresa, porque de ella dependerá el nivel de interacción con los miembros y la satisfacción de las necesidades para las que sea creada. Los recursos que tenga la plataforma deberán ser empleados a favor de los objetivos comerciales que se proponga la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de la información digital',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medición de contenidos digitales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
        desarrolloContenidos: true,
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
        desarrolloContenidos: true,
      },
    ],
  },
  complementario: [
    {
      tema: 'Contenidos digitales',
      referencia:
        'Tomas, D. [Cyberclick, Marketing Digital]. (13 de julio de 2021). <em>¿Qué es un CMS? Mejores Plataformas de Contenido </em>[Archivo de video]. YouTube. https://www.youtube.com/watch?v=36U_JOJQYUw',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=36U_JOJQYUw',
    },
    {
      tema: 'Fuentes de información',
      referencia:
        'Educar Portal [Educar Portal]. (11 de julio de 2019). <em>Microaprendizaje: ¿Qué son las fuentes de información? </em>[Archivo de video]. YouTube. https://www.youtube.com/watch?v=5MBHGpXap64',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5MBHGpXap64',
    },
    {
      tema: 'Medición de contenidos digitales',
      referencia:
        'Grillo, C., Ramírez, D., Segovia, N. y Rojas, L. (2020). <em>Análisis de contenidos digitales y su contribución a la identidad a través de redes sociales de los restaurantes de comida rápida en la ciudad de Bogotá. </em>',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/publication/347943407_ANALISIS_DE_CONTENIDOS_DIGITALES_Y_SU_CONTRIBUCION_A_LA_IDENTIDAD_A_TRAVES_DE_REDESSOCIALES_DE_LOS_RESTAURANTES_DE_COMIDA_RAPIDAS_EN_LA_CIUDAD_DE_BOGOTA',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'grupo de operaciones en los sistemas de información (herramientas <em>web</em>) que posibilitan desarrollar cálculos con el fin de ofrecer la solución a algún problema.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'también llamados datos masivos, macrodatos,  inteligencia de datos o datos a gran escala, es un grupo de datos tan grandes y confusos que requieren de aplicaciones informáticas alternativas (no convencionales) de proceso de datos para trabajarlos de forma adecuada.',
    },
    {
      termino: '<em>Customer journey</em>',
      significado:
        'es el grupo de interacciones que realiza un cliente con una marca, principalmente durante el proceso de compra. Puede suceder también durante el proceso de registro, suscripción, descarga de un archivo gratuito o pagado, etc.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'es un concepto psicológico que se relaciona con la conexión emocional de un cliente y que hace referencia al nivel de compromiso que tiene con una marca.',
    },
    {
      termino: '<em>Keywords</em>',
      significado:
        'son palabras claves que representan identificadores que poseen un significado específico para un lenguaje de programación. Se usa cuando se desea que una marca se posicione en los motores de búsqueda.',
    },
    {
      termino: 'KPI',
      significado:
        'los <em>Key Performance Indicator </em> (KPI) son indicadores clave de rendimiento que son usados para analizar el éxito de las operaciones, procesos y acciones con relación a los objetivos pactados, para observar si están dando buenos resultados o si se requiere algún tipo de ajuste.',
    },
    {
      termino: '<em>Lead</em>',
      significado:
        'es un individuo o empresa que ha expresado algún interés en una marca, los bienes o servicios.',
    },
    {
      termino: '<em>Lead magnet</em>',
      significado:
        'es un prototipo de contenido que se utiliza para acceder a datos claves de los clientes que visitan el sitio <em>web</em>. Técnica usada en sitios <em>web, landing pages y blogs.</em>',
    },
    {
      termino: 'SEM',
      significado:
        '<em>Search Engine Marketing</em> es una técnica que se define como el posicionamiento en motores de búsqueda que una marca puede lograr a través de campañas publicitarias pagadas.',
    },
    {
      termino: 'SEO',
      significado:
        '<em>Search Engine Optimization</em> es una técnica que se define como el posicionamiento en motores de búsqueda que una marca puede lograr a través de un trabajo natural u orgánico, es decir, sin inversión publicitaria.',
    },
    {
      termino: '<em>Time decay</em>',
      significado:
        'se conoce como el detrimento de valor de las oportunidades a causa del paso del tiempo, siendo esta una de sus más relevantes características.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arjonilla, S. J., & Medina, J. A. (2013). <em>La gestión de los sistemas de información de la empresa. </em>Madrid: Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Castaño Carmona, M. A. (2022). 7 <em>herramientas tecnológicas para la gestión de viajes y turismo. </em>El Espectador.',
      link:
        'https://www.elespectador.com/turismo/siete-herramientas-tecnologicas-que-contribuyen-con-la-gestion-de-los-viajes/',
    },
    {
      referencia:
        'Almeida Vidal, J. et al. (2020). <em>Plataformas Digitales En Los Alquileres Vacacionales. </em>Madrid: Reus.',
      link: '',
    },
    {
      referencia:
        'Hernández, M. Á., Estrade, J. M., y Jordán, D. (2017). <em>Marketing Digital: Mobile Marketing, SEO Y Analítica Web. </em>Madrid: Ediciones Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'López Carreño, R. (2017). <em>Fuentes de Información: Guía Básica y Nueva Clasificación. </em>Barcelona: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Maidana, J., Galain, C., y Mariño, S. (2020). <i>Accesibilidad web integrada en aplicaciones móviles. Validación en un contexto de APPS turísticas</i>. Mikarimin. Revista Científica Multidisciplinaria.',
      link: '',
    },
    {
      referencia:
        'Revista	Moreno Calvo, M. (2019). <em>La Máscara Sobre La Realidad: La Información En La Era Digital. Estudios sobre el Mensaje Periodístico, </em>Web.',
      link: '',
    },
    {
      referencia:
        'Libro	Ponjuán, G. (2007). <em>Gestión de la información.</em> Gijón: Ediciones Trea.',
      link: '',
    },
    {
      referencia:
        'Libro	Serrano, E., et al. (2019). <em>Medios de Comunicación, Contenidos Digitales y Derecho de Autor. </em>Primo.',
      link: '',
    },
    {
      referencia:
        'Libro	Urreta Okeranza, E. (2020). <em>Gestión de la información y documentación turística local. </em>España: Ediciones Paraninfo, S.A.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
