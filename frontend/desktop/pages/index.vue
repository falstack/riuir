<style lang="scss" scoped>
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .VueToNuxtLogo {
      flex: 1;
    }
  }
</style>

<template>
  <section>
    <v-header></v-header>
    <logo/>
    <h1 class="title">riuir</h1>
    <h2 class="subtitle">desktop</h2>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import vHeader from '~components/Header.vue'

export default {
  components: {
    Logo, vHeader
  },
  layout: 'index'
}
</script>
