<template>
  <section class="container">
    <logo/>
    <h1 class="title">riuir</h1>
    <h2 class="subtitle">mobile</h2>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container
{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 64px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 28px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
