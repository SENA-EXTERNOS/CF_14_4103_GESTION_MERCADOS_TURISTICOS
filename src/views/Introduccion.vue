<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción  

    .row.mb-5.justify-content-center.align-items-center
      .col-md-11
        img(src="@/assets/curso/temas/introduccion.png", alt="").banner-principal-decorativo-3
        br
        p Estimado aprendiz, bienvenido a este recurso educativo, a continuación conocerá sobre la #[b configuración de la plataforma digital.] Al finalizar este recurso esperamos que logre configurar el entorno de la plataforma digital conociendo el procedimiento técnico y la política organizacional más idónea, con el fin de que, a futuro, pueda estructurar comunidades virtuales de acuerdo a las técnicas de #[i marketing] digital y tipo de negocio. Con los recursos que aprenderá aquí, podrá aportar a los objetivos comerciales y los intereses económicos y sociales que se proponga la empresa, pues estos serán vitales para la configuración de una plataforma digital, la interacción que se tenga con los miembros y la satisfacción de necesidades por las cuales esté creada.
        
      b En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo.
      
      br
      br
      
      b ¡Muchos éxitos en este proceso de aprendizaje!

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
