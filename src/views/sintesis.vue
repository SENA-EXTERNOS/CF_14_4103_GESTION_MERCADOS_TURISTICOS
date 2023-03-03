<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .row.justify-content
      
        

      .col-lg-2
    
        

    .row.justify-content-center
      .col-lg-10.mb-5
        br
        p.mt-4 Estimado aprendiz, lo invitamos a ver el siguiente mapa conceptual, donde encontrará una síntesis de todos los elementos desarrollados en este componente formativo acerca de la configuración de plataformas digitales.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")

    .row.justify-content-center
      .col-lg-3
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Sintesis

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
