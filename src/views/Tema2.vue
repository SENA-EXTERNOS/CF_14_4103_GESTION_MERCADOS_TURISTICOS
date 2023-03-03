<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Medición de contenidos digitales

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        p #[b Moreno Calvo] (2019) menciona que:
      
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto
            
            p Es vital conocer y hacer medición sobre la calidad de los contenidos compartidos con los clientes y cómo ellos los reciben. Para esto es útil analizar si ellos tienen en cuenta las sugerencias que se hacen, qué acciones toman y si lo hacen a menudo o no, datos que son fáciles de medir observando los comentarios sobre cada publicación, las interacciones en las redes sociales y el tiempo de duración en el sitio web, indicadores que se extraen del #[i blog], redes sociales y Google Analytics (entrega métricas a partir de la conducta del usuario en el sitio web).
            

    .tarjeta.fondo-panel.p-4.mb-4
      SlyderB.mb-5(:datos="datosSlyder")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center Revise a continuación los otros tipos de medición.

    p Cuando se habla de la capacidad de generar #[i leads] se hace énfasis en que el incremento en el número de #[i leads] hace parte de la estrategia.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Generación de <em>leads</em>" :icono="require('@/assets/curso/temas/tema2/mm1.svg')")
        .row.align-items-center
          .col-md-6
            figure
              img(width="200" height="200" src='@/assets/curso/temas/tema2/m1.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            br
            h4 Generación de #[i leads] 
            p Hay diversas operaciones y automatizaciones que generan <em>leads</em>, puede ser a través de <em>landing pages</em> con formularios donde el individuo deje sus datos, actividades de correo electrónico, <em>webinars</em> o incluso recursos de atracción de <em>leads</em> con publicaciones en el <em>blog</em>. 

      .py-4.py-md-5(titulo="CRM" :icono="require('@/assets/curso/temas/tema2/mm2.svg')")
        .row.align-items-center
          .col-md-6
            figure
              img(width="200" height="200" src='@/assets/curso/temas/tema2/m2.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            br
            h4 CRM
            p Para analizar la eficacia de esas operaciones se debe contar con métricas o indicadores para conocer, a ciencia cierta, cuánto ha aumentado el número de #[i leads] y si estos se pueden convertir en clientes potenciales. En un CRM (#[i software] de gestión de clientes), por ejemplo, se puede conocer cuántos de los #[i leads] que brindaron sus correos electrónicos en un formulario llegaron al sitio web y desde qué medio (red social, #[i blog], correo electrónico, etc.).
        
      .py-4.py-md-5(titulo="Indicadores de conversión" :icono="require('@/assets/curso/temas/tema2/mm3.svg')")
        .row.align-items-center
          .col-md-6
            figure
              img(width="200" height="200" src='@/assets/curso/temas/tema2/m3.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            br
            h4 Indicadores de conversión
            p Los ingresos generados por los contenidos se relacionan con los indicadores de conversión, debido a esto es importante preguntarse cuántos #[i leads] se convirtieron en clientes reales, Si la estrategia desarrollada no produce ventas se puede calcular el número de #[i leads] generados por la estrategia y programar los ajustes que se deban hacer, con el fin de comprender las desviaciones (objetivos no cumplidos). 

            p Por ello, es vital continuar seduciendo a los clientes fieles a través de experiencias significativas. Para conseguirlo, se requiere conocer qué tipos de contenidos son los más adecuados para cada cliente. 

      .py-4.py-md-5(titulo="El ROI (Retorno de la inversión) del <em>marketing</em>" :icono="require('@/assets/curso/temas/tema2/mm4.svg')")
        .row.align-items-center
          .col-md-6
            figure
              img(width="200" height="200" src='@/assets/curso/temas/tema2/m4.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            br
            h4 El ROI (Retorno de la inversión) del #[i marketing]
            p Los contenidos se puede medir a través de las siguientes estadísticas:
            tabla
              tr
                td 
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Ingresos promedio que cada cliente genera.
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Tráfico natural u orgánico.
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Vistas en el sitio web.
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Porcentaje promedio de visitantes diario.

                td 
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Porcentaje promedio de duración en el sitio por visitante.
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Radio de rebote.
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Visitantes únicos.
                  ul.lista-ul.mb-3
                    li 
                      i.fas.fa-check
                      | Conversión de #[i leads] en clientes, etc.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center Cualquier tipo de empresa va a necesitar que su estrategia de mercadeo digital esté integrada en la estrategia de #[i marketing]. Estudie a continuación los tipos de indicadores.
          
    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Tipos de indicadores

    .row.align-items-center
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/g1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-3
      .col-lg-9
        p Cualquier clase de empresa va a necesitar que su estrategia de mercadeo digital esté integrada en la estrategia de #[i marketing], publicidad o comunicación, según como la desarrollen al interior de cada organización. Una de las estrategias más usadas en la actualidad es la gestión de contenidos digitales, la cual tiene como finalidad compartir publicaciones de valor, con contenidos de calidad, atractivos, interesantes y deseados por el cliente. Con estos contenidos se puede llamar la atención del cliente, bien sea a través de redes sociales, #[i blog], correo electrónico y #[i landing page], además de los #[i leads] que lleguen por medio de las búsquedas realizadas en Google. 

    br
    p Para analizar el trabajo de los diferentes esfuerzos realizados en <em>marketing</em> digital, existen diversas métricas. Los siguientes son seis aspectos que toda empresa debe medir para determinar el desempeño de cualquier esfuerzo desarrollado a través del <em>marketing</em> digital:

    br
    .row 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='').banner-principal-decorativo-3
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--blanco")
          div(titulo="Métricas de consumo")
            p Valoran la interacción de los clientes con cada contenido publicado (alcance, clics, visitantes de una vez, visitantes que repiten, etc.).
          
          div(titulo="Métrica de compartición")
            p Exponen el número de veces que se compartieron los contenidos publicados por la marca, lo cual es una excelente señal que evidencia el buen trabajo realizado. También están los "me gusta" y los comentarios. Estas tres métricas juntas, conforman el número de interacciones que una publicación obtuvo con los clientes, y sirven para que la empresa llame la atención de otros clientes potenciales.

          div(titulo="Métricas de participación")
            p Valoran el nivel de compromiso (#[i engagement]) que poseen los clientes por los contenidos. Se evalúa el tipo de comentarios recibidos por cada publicación, cuánto tiempo permanecen los clientes en el sitio web, #[i blog] y demás canales digitales, cuántos contenidos fueron visitados por cada cliente, etc.
          
          div(titulo="Métricas de <em>leads</em>")
            p Valoran el proceso desde el momento en que el #[i lead] fue alcanzado por alguna de las publicaciones, hasta que compró el producto o adquirió el servicio. Este proceso se hace más cómodo y fácil si la empresa cuenta con una tienda virtual.
          
          div(titulo="Métricas de ventas")
            p Analiza el aumento y porcentaje de las ventas. Las operaciones de mercadeo se deben encaminar a la consecución de resultados que con anterioridad fueron establecidos, en factores como ingresos y ventas. Por lo tanto, deben existir conversiones, es decir, un porcentaje de clientes que terminaron comprando. Si no hubo un incremento en las ventas, la campaña no logró su objetivo.
            
          div(titulo="Métricas de producción/costos")
            p Analizan la rentabilidad lograda por la inversión en cada esfuerzo de #[i marketing] digital, por cada uno de los medios o contenidos publicados. Esta inversión, además de monetaria, también se relaciona con el tiempo invertido en cada publicación.

    br
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center Y esto, ¿para qué sirve?

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Importancia

    .row.justify-content-center.align-items-center
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen').banner-principal-decorativo-3
      .col-lg-5
        p La analítica #[i web] es un método que se requiere para establecer si una empresa cumple o no con los objetivos pactados para su sitio #[i web], redes sociales, #[i blog], y en sí, para toda la empresa; por esto es considerada una estrategia del #[i marketing] digital que toda empresa debería tener en cuenta para hacer un estudio juicioso sobre las estrategias y acciones desarrolladas por la marca.

    .tarjeta.fondo-tarjeta.p-4.mb-4
      SlyderA(tipo="b")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p Su importancia no radica en hacer una medición sobre todo lo que se pueda. El éxito radica en elegir cuáles son los KPI (#[i Key Performance Indicator] - Indicadores Clave de Desempeño) más relevantes, según el contexto empresarial y los esfuerzos de #[i marketing] digital realizados. De esa elección dependerá el nivel de éxito y la calidad de las operaciones. Una vez realizado el análisis de todos los indicadores, se puede elaborar un plan de mejoramiento, que servirá para ajustar las acciones de la estrategia de #[i marketing] digital y la creación de futuras estrategias.
       
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/ww.png', alt='Texto que describa la imagen')

        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p La analítica web es un proceso constante que va ligado con la evolución y optimización de Internet, por lo que se hace vital el análisis y la documentación constante de la conducta del cliente y los cambios que sufra, para luego desarrollar un plan de mejoramiento. Ahora, hablando de la gestión de contenidos digitales, se debe recordar que pueden estar integrados a través de otras operaciones de publicidad y mercadeo como, por ejemplo, plataformas virtuales o portales digitales donde se publican contenidos.
       
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/ww2.png', alt='Texto que describa la imagen')

        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            p La importancia de un buen análisis sobre cada uno de estos esfuerzos de #[i marketing] digital radica en conocer cuáles de ellos es el más oportuno para la marca. No se trata de trabajarlos todos, sino de elegir los más afines con la marca. El análisis sobre los contenidos digitales ayudará a comprender mejor cuáles son los formatos para usar. (Moreno Calvo, 2019).
       
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/ww3.png', alt='Texto que describa la imagen')

    br
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center Por último, revise la gestión de datos en plataformas digitales.

    .row.mt-5
      ul.lista-ul
        li
          i.fa.fa-square
          h3 Gestión de datos en plataformas digitales

    p Para lograr el desarrollo de un análisis coherente de las operaciones o esfuerzos de mercadeo y sus resultados, hay que tener en cuenta las diferentes plataformas digitales y las herramientas de analítica, además de tener claros conceptos muy importantes. 

    p En cuanto a la gestión de datos, puede revisar los contenidos dispuestos en el #[b Anexo 5].

    br
    .row.mb-3.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.tarjeta-color-verde.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/min1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  b.texto-blanco Anexo 5 - Gestión de datos en plataformas digitales
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'SEO (<em>Search Engine Optimization</em>)',
        texto:
          '(Optimizaciones para motores de búsqueda) es el grupo de acciones realizadas en un <em>blog</em> o <em>landing page</em> para posicionarse en Google. Al área técnica del SEO (títulos, subtítulos, negrillas, viñetas, pie de fotos, vínculos, descripciones, tags, etc.) se le puede hacer medición a través de distintas herramientas que certifican cual ha sido la calidad del trabajo realizado en las publicaciones, todo a partir de indicadores que servirán para hacer el análisis respectivo.',
        imagen: require('@/assets/curso/temas/tema2/s1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El <em>marketing</em> de contenidos',
        texto:
          'No se enfoca en lograr ventas sino en brindar valor al cliente. Con las publicaciones se puede ayudar a resolver dificultades o dudas, conocer nuevos conceptos o temas, o simplemente compartir datos valiosos, como lo son las tendencias, los <em>rankings</em>, las historias y las recetas. Es muy importante que los contenidos sean coherentes con la empresa, por ejemplo, que una empresa de tecnología comparta datos que tengan que ver con tecnología.',
        imagen: require('@/assets/curso/temas/tema2/s2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Venta',
        texto:
          'La venta viene siendo el resultado de todo un proceso, donde primero se interactúa con el cliente, luego se influencia a una acción de compra y posteriormente es posible fidelizar. El concepto de <em>landing</em> page es relevante porque puede ofrecer contenidos desde el sitio <em>web</em> que tengan descargas gratuitas para el cliente, a partir del diligenciamiento de datos en un formulario dado al cliente. ',
        imagen: require('@/assets/curso/temas/tema2/s3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
