<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de la información digital


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        p Según #[b Arjonilla y Medina] (2013)
      
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p La gestión de la información es un asunto ejercido por un grupo de acciones que admiten el logro de los datos, de una forma oportuna, selecta y económica, para ser usados en los procesos y el éxito de una empresa, formando conocimientos nuevos (p. 12). Administrar la información tiene que ver con la búsqueda de nuevos significados con base en el análisis, para lograr un impacto positivo en el ambiente de toda empresa.
            i.fas.fa-quote-right

    p.mb-4 La gestión de información se compone por un grupo de acciones que deben estar presentes en todas las fases de la empresa; necesita de un plan de acción, una toma de decisiones y la realización de evaluaciones periódicas. A través de esta se suministran los recursos informáticos que son precisos para tomar buenas decisiones y desarrollar conocimientos nuevos que permitan la eficiencia y la calidad en los bienes y servicios de las empresas.
    p.mb-4 Los objetivos de la gestión de información los descubre tocando cada una de las siguientes  imágenes:

    .row.mb-5.p-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/slider1.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Mejorar la propuesta de valor y los beneficios que se derivan por usar la información.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/slider2.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Disminuir los costos de buscar, procesar y usar la información.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/slider3.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Establecer compromisos para la utilización efectiva, eficiente y económica de la información.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/slider4.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Certificar el abastecimiento permanente de la información (Arjonilla y Medina, 2013, p. 67).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        p Ahora bien, como dice López Carreño (2017).
      
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p La gestión de la información digital es una destreza vital para el éxito empresarial en la actualidad (p. 3), por eso, la siguiente información será de utilidad.
            i.fas.fa-quote-right

    p Muy a menudo se escucha que el poder lo tiene quien posee la información; no obstante, en realidad no existe ninguna garantía de que una empresa puede acceder a una cantidad grande de información, a menos de que puede darle un uso correcto al método de las 4S’s:
    br
    .row 
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="<em>Search</em>")
            p Efectuar búsquedas eficientes en Internet que logren hallar datos importantes para conseguir los objetivos de la empresa.
          
          div(titulo="<em>Select</em>")
            p Escoger los #[i datos] que sean más importantes, fiables y de calidad. 

          div(titulo="<em>Sense marketing</em>")
            p Ordenar los datos para darles un mejor sentido y generar valor.

          div(titulo="<em>Share</em>")
            p Conocer en dónde y cómo hallar, almacenar, recuperar y compartir los datos.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/g2.png', alt='').banner-principal-decorativo-3

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        p Entonces, no alcanza con poseer toda la informaciónn, hay que saber trabajarla y analizarla.
      
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Por eso, la gestión de la información es una destreza vital para quienes actúan en una economía digital. (#[b López Carreño,] 2013, p. 78).
            i.fas.fa-quote-right

        br

        p #[b Urreta Okeranza] (2020) menciona que:
      
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Hay una concepción generalizada en la que el turismo es reconocido como un fenómeno a nivel económico, social y cultural, el cual ocupa un lugar predilecto dentro de las normas de planeación territorial por establecer un eje transversal que contribuye al progreso local. La información que se orienta al estímulo del consumo turístico por parte del cliente para enriquecer la experiencia personal también es primordial, pues mejora el papel del turismo a nivel territorial, lo que finalmente puede prolongar su estadía y certificar su fidelización.
            i.fas.fa-quote-right

    p Ya se conoce que el turismo genera un gran impacto industrial, ahora se verá cómo los hábitos de compra podrían generar mayores aportes:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

    br

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center De acuerdo con lo anterior, en la siguiente infografía se encuentra información importante sobre la prestación del servicio y la atención informativa.

    p.mb-4 Tener en cuenta estos factores:

    figure
      img(src='@/assets/curso/temas/tema1/img7.svg', alt='') 

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Tipos de gestión de la información

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/g3.png', alt='').banner-principal-decorativo-3 
      .col-lg-9
        p La atención y la información suministradas mientras el turista disfruta su estadía, hacen parte del servicio turístico. Este puede ser personalizado o directo, a través de diferentes formas, como por ejemplo, las sedes de información turística, los sitios de recepción de visitantes, los hoteles, los museos, los parques de diversión, los centros educativos medioambientales, los lugares históricos y urbanos y cualquier entidad turística.
      p.mt-5 A continuación, se encuentran los tipos de gestión de la información digital.
      p Las solicitudes genéricas y específicas son los tipos de peticiones que se reciben en una sede de información turística. A continuación, se distingue la manera de brindar el servicio en cada una de ellas:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', alt='')

    p Al profundizar más sobre esta teoría, se encuentra que el acto de gestionar la información y los datos se puede clasificar de distintas maneras; a continuación, se enumeran las más significativas:

    .tarjeta.fondo-tarjeta.p-4.mb-4
      LineaTiempoC.color-acento-botones
        .row.justify-content-center(titulo="Gestión de datos relacionados")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/linea1.png', alt='Texto que describa la imagen')
          .col-md-6
            p También es fácil de usar. Es implementada para la configuración de un software, pues posee un lenguaje en formato binario.
            
        .row.justify-content-center(titulo="Gestión de datos planos")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/linea2.png', alt='Texto que describa la imagen')

          .col-md-6
            p También es fácil de usar. Usada para la configuración de un software pues posee un lenguaje en formato binario. 
        
          
        .row.justify-content-center(titulo="Gestión de datos jerárquicos")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/linea3.png', alt='Texto que describa la imagen')

          .col-md-6
            p Datos recolectados que describen información, como versos o canciones. No tienen utilidad al momento de solucionar problemas reales. 
        
          
        .row.justify-content-center(titulo="Gestión de datos en red")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/linea4.png', alt='Texto que describa la imagen')

          .col-md-6
            p Es complejo de usar, ya que para conseguir datos específicos se debe conocer toda la información que se encuentra agrupada o relacionada. 
        
          
        .row.justify-content-center(titulo="Gestión de datos dirigidos a objetos")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/linea5.png', alt='Texto que describa la imagen')

          .col-md-6
            p Son datos en los cuales la información es representada mediante objetos, lo cual la hace más accesible. Está presente en la programación orientada a objetos. 
        
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center Ahora, puede conocer las herramientas que existen en la gestión de la información digital.

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Herramientas

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        p Tal como lo afirma Castaño Carmona (2022).
      
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p La transformación digital ya es una realidad en muchos sectores, y el turismo no es la excepción, sobre todo durante y después del Covid-19, cuando la tecnología se convirtió en una aliada para lograr la recuperación empresarial (p. 15). 
            i.fas.fa-quote-right

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/g5.png', alt='Texto que describa la imagen').banner-principal-decorativo-3
        
        p Durante las fechas más críticas de la pandemia, la ONU (Organización de las Naciones Unidas) vaticinó pérdidas por más de USD 200 millones para el área del turismo, siendo esta una de las afectadas por la situación mundial. Pero con el uso de tecnologías disruptivas como, por ejemplo, la Internet de las cosas (IoT), el big data y la inteligencia artificial, se pudo hacer una revolución en la dinámica de los servicios turísticos, reactivando los viajes y accediendo a itinerarios más seguros.
 
        p El sector turístico ha evolucionado, y sin lugar a  duda, no es el mismo de antes del Covid-19, ni tampoco volverá a ser el mismo en el futuro. El turista de hoy busca experiencias de viaje hechas a su medida; por esta razón, requiere del uso de la tecnología para entregar, de manera personalizada, las experiencias de los clientes, teniendo en cuenta sus deseos, necesidades, predicciones y gustos específicos. La tecnología facilitó las reservaciones turísticas y poseer un mejor control de estas, tema que fue vital en tiempos de aforos limitados y de restricciones. La tecnología permitió además que el sector turístico pudiera mejorar la experiencia de consumo de los clientes y la gestión de los viajes, lo que fue posible gracias a unas dinámicas de negocio que facilitaron a las empresas conocer mejor las necesidades de los turistas, instaurar vínculos cercanos y certificar el bienestar y la seguridad de los clientes.

        p En cuanto a los ejemplos de herramientas, es de gran utilidad revisar los contenidos dispuestos en el Anexo 1.
       
        .tarjeta.tarjeta-color-verde.p-3.mb-5.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/min1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  b.texto-blanco Anexo 1- Siete herramientas de gestión de la información en el sector turístico
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center Después de lo anterior, ahora es posible hablar sobre los contenidos digitales.

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Contenidos digitales

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        p #[b Serrano et al.] (2019) mencionan que:
      
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p El #[i marketing] de contenidos digitales es vital para alcanzar al público objetivo, pues es una de las estrategias de #[i marketing] digital más importantes de posicionamiento y fidelización, ya que mejora el #[i branding] y el #[i engagement] (compromiso) con las marcas (p. 28).
            i.fas.fa-quote-right

    .row.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/min2.svg', alt='Texto que describa la imagen').banner-principal-decorativo-3
      .col-lg-10
        p Es la columna vertebral de lo que se conoce como <i>inbound marketing</i> (<i>marketing</i> de atracción), donde se plantean contenidos anhelados por clientes potenciales, entregando contenidos que aportan información de valor que servirá para que los clientes elijan la marca en un futuro cercano.

        p Los contenidos digitales son publicaciones permanentes que se exhiben en redes sociales, #[i blogs] y #[i landing pages.] Se diseñan en diferentes formatos y son vitales para toda estrategia de mercadeo que una marca se proponga crear, porque el contenido de calidad es una de las columnas fundamentales de todo proyecto digital.

        p Estos contenidos también se dividen en ciertos tipos, los cuales se detallan a continuación:

    br
    ol.lista-ol--cuadro
      li
        .lista-ol--cuadro__vineta
        h4 Tipos de contenidos digitales

    .row.align-items-center
      .col-lg-9
        p Un CMS es un sistema de gestión de contenidos, es decir, un #[i software] informático que admite establecer un ambiente de trabajo para crear y administrar contenidos, especialmente en páginas #[i web, landing pages, blog] y redes sociales. En la gestión hay roles, tales como administrador, editor, participantes y fanáticos. Es vital tener claro quién es el público objetivo y descubrir qué información demanda en todas las etapas comunicacionales que tenga con la marca; así se podrán elegir los diferentes tipos de contenidos o formatos digitales que se van a producir y a publicar. También es vital tener claro cuáles son los recursos (humanos, técnicos y tecnológicos) que la empresa posee para elegir los formatos de las publicaciones y en qué medios han de ser publicados. A continuación, se enumeran algunos de los tipos de contenidos digitales que pueden ser usados en toda estrategia de #[i marketing] de contenidos. Lo ideal es centrarse en dos o tres, lo que hará mucho más eficiente la labor:
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/g6.png', alt='Texto que describa la imagen').banner-principal-decorativo-3

    br
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tips.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="42%" y="21%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m1.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 Publicaciones de <i>blog</i>
                p Son oportunos para mostrar la personalidad de la marca, establecer su propio lenguaje y enlazar directamente con el cliente. Además, permiten el posicionamiento en los motores de búsqueda, siempre y cuando los contenidos sean cortos y coherentes con el contexto empresarial. Antes de publicar contenidos se deben responder las siguientes preguntas:

                p.mb-0 ¿Qué se espera lograr con el blog? 
                p.mb-0 ¿Qué tipo de contenido compartir?
                p.mb-0 ¿Quién va a ver el contenido?
                p ¿Cuál es la frecuencia con que voy a publicar? 

                p El objetivo de un blog no es vender sino fidelizar, creando confianza en la marca, por lo que se recomienda hacer publicaciones académicas, informativas y deseadas por el público objetivo.


          .tarjeta.color-acento-botones.p-3(x="34.5%" y="39%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m2.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 #[i E-book]
                p Es un libro en formato digital que se entrega al cliente, bien sea a través de un pago o de forma gratuita. El formato gratuito es vital para captar leads (clientes potenciales) y brindarles más información de valor, que sea coherente con sus deseos y necesidades de información. Para descargar <i>e-books</i> los leads deben ir a una <i>landing</i> page en la cual dejan sus datos de contacto; una vez se tengan estos datos, se pueden diseñar distintas estrategias y acciones para convertirlos en clientes habituales. Un e-book de turismo puede hablar de regiones, sitios turísticos, historias de las grandes ciudades, gastronomía, etc. 

          .tarjeta.color-acento-botones.p-3(x="34.5%" y="60%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m3.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 Infografías
                p Su objetivo es la transmisión de información de manera didáctica y visual, captando la atención de los clientes a través de un diseño con poco texto y mucho poder gráfico (ilustraciones, gráficos, fotos, diseño, etc.). Es un tipo de contenido muy usual en comunidades virtuales y foros, sirviendo para la obtención de #[i leads], mejorar el posicionamiento #[i web] y fortalecer la marca. Representan una de las maneras más sencillas y directas de compartir contenido dando valor a los clientes, ya que su finalidad es conseguir que los espectadores comprendan la información rápidamente.  

          .tarjeta.color-acento-botones.p-3(x="42.2%" y="79%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m4.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 Boletines
                p También conocido como #[i newsletter], es una publicación que se puede compartir a unos suscriptores, bien a través de un correo electrónico o a través del sitio #[i web], dando la oportunidad de descarga por parte del cliente. Su distribución se puede hacer con una periodicidad semanal, quincenal, mensual, bimestral o trimestral. Suelen estar conformados por diferentes artículos de valor para los suscriptores, con las noticias más relevantes de la empresa o del sector empresarial. Es posible que en un boletín se pueda integrar la oferta de un producto con el fin de convertir al suscriptor en #[i lead] y luego en cliente habitual.  

          .tarjeta.color-acento-botones.p-3(x="54.5%" y="79%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m5.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 #[i Podcast]
                p Es un contenido digital que tiene formato de audio o video, el cual se puede escuchar o descargar de la #[i web]. Puede estar diseñado al estilo de un programa radial, ya que en cada capítulo se puede hablar de temas actuales y de relevancia para los clientes potenciales. Se puede publicar en el sitio #[i web], en el #[i blog], en las redes sociales o en plataformas destinadas para ello, como por ejemplo SoundCloud, iVoox, YouTube, iTunes o Spotify, entre otras. El uso del #[i podcast] se enfoca más en la fidelización de los clientes potenciales y en la promoción de los contenidos. Es vital publicar contenidos que tengan temas atrayentes, como noticias, novedades del área, tendencias, etc. 

          .tarjeta.color-acento-botones.p-3(x="62%" y="60%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m6.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 Publicaciones en redes sociales
                p Son parecidas a los artículos publicados en el #[i blog], pero su extensión es menor, limitándose a contenidos que contienen una frase concisa con mucho valor para el cliente, acompañada de una imagen o video que complementa la información. La idea es lograr una interacción más directa con los fanáticos, teniendo la oportunidad de interactuar con la audiencia a través de contenidos informativos, educativos, de ocio, promocionales y de marca. Los objetivos de estas publicaciones son: 
                br  
                ul.lista-ul
                  li 
                    i.fas.fa-check 
                    p Conseguir #[i likes].
                ul.lista-ul
                  li 
                    i.fas.fa-check 
                    p Lograr que los fanáticos compartan y comenten la publicación.
                ul.lista-ul
                  li 
                    i.fas.fa-check 
                    p Acceder al #[i link].

          .tarjeta.color-acento-botones.p-3(x="62%" y="39%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m7.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 Videos
                p Tipo de contenido digital muy interesante, atractivo y buscado por los clientes, ya que posee un espacio particular dentro de la gestión de contenidos. 

                p Cada vez es más complejo captar la atención del cliente con publicaciones estáticas, esto ocurre porque la sociedad actual quiere encontrar contenidos simples y ágiles de comprender, y los videos son ideales para captar su atención. Un video bien elaborado y de calidad logra un mayor alcance e interacción a través de una búsqueda orgánica (SEO) en relación con otros formatos. Se puede publicar en distintas comunidades virtuales, en YouTube, en la landing page, en el blog y hasta se pueden compartir a través del correo electrónico. Estos formatos brindan la posibilidad de posicionarse en la web y lograr la fidelización del público objetivo. 

          .tarjeta.color-acento-botones.p-3(x="54.5%" y="21%" numero="")
            .row
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/m8.png', alt='Texto que describa la imagen')
              .col-md-8
                .h5.mb-2 #[i Webinars]
                p Es una reunión, conferencia, taller, seminario, charla o curso en directo por internet que se puede grabar en formato video. Esencialmente, es un ‘cara a cara’ en vivo con el cliente para crear proximidad y confianza con él; por consiguiente, ayuda a lograr una conexión con los clientes para crear más #[i engagement] (compromiso de marca) y lograr más visibilidad para la marca, de tal manera que pueda aportar nuevos #[i leads] o clientes potenciales. Suelen tener un enfoque educativo y de formación, pero con el fin básico de captar nuevos #[i leads]; se requiere la elaboración de una oferta particular o #[i lead magnet] para aquellos que se mantienen hasta el final de la reunión. La oferta puede ser una descarga o el descuento en un producto o servicio. (Serrano et al., 2019, p.103). 

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Fuentes de información

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.tarjeta-color-verde.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/min1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  b.texto-blanco Fuentes de información
                  p.text-small.texto-blanco En cuanto a las fuentes de información de la plataforma digital, revise los contenidos dispuestos en el #[b Anexo 2]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Fases

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.tarjeta-color-verde.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/min1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  b.texto-blanco Fases
                  p.text-small.texto-blanco Revise los contenidos dispuestos en el #[b Anexo 3]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Configuración de la plataforma digital

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.tarjeta-color-verde.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/min1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  b.texto-blanco Configuración de la plataforma virtual
                  p.text-small.texto-blanco Revise los contenidos dispuestos en el #[b Anexo 4]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
