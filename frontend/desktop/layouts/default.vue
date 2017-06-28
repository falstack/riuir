<template>
  <div id="main" class="font-hei">
    <v-banner></v-banner>
    <nuxt/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vBanner from '~components/Banner.vue'
  import vFooter from '~components/Footer.vue'

  export default {
    components: {
      vBanner, vFooter
    }
  }
</script>
