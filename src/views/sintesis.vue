<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .row.justify-content-center
      .col-lg-8.sm-8
        .titulo-sexto.color-acento-contenido
          b Gestión de mercados de productos turísticos
          p Síntesis: Configuración de la plataforma digital

      .col-lg-2
        figure
        img(src="@/assets/curso/temas/ssena.svg" width='89,61' height='86,7')

    .row.justify-content-center
      .col-lg-10.mb-5
        br
        p.mt-4 Estimado aprendiz, lo invitamos a ver el siguiente mapa conceptual, donde encontrará una síntesis de todos los elementos desarrollados en este componente formativo acerca de la configuración de plataformas digitales.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
