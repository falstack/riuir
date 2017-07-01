<style lang="scss" scoped>
  $header-height: 45px;

  #header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: $header-height;
    z-index: 10;

    .container {
      height: 100%;
      line-height: $header-height;

      .header-left, .header-right {
        height: 100%;
        font-size: 16px;
        font-weight: bold;
      }

      .header-left {
        float: left;

        a {
          color: #fff;
          padding: 5px 20px;
          border-radius: 10px;
          transition: .4s;
          margin: 0 5px;

          &:hover {
            background-color: #fff;
            color: #00a1d6;
            transition: 0s;
          }
        }
      }

      .header-right {
        float: right;
      }
    }

    .mask {
      width: 100%;
      height: 100px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAABkCAYAAABOx/oaAAAAAXNSR0IArs4c6QAAAX5JREFUSA2llAtuwzAMQ5NtN9r9r9bUZP0I2VW7ATWQ2KZISv4k53Ecv+NZ2tcym5MOvDrwBLyKjZkCzvEQOH8mIGICkosBy0E8xTIwXpfkam+ZJiCvzAPQHrzIztxyEnkyI+0yW8/s0pJdngKybvlS0sLsQK99l3s/ZYPcPYkUoKUkAPd17ZJa3mbfwTA9QKq+y+5lVqbHbHINHDuoOnOXxIRt5m0A3BCNW7nByKYinlIp2MqdUCU5KupsuQwA6r12SiJhmABhLsBAfZoVbJkCn1b0IegruR+cKulPc2d+mF2JvEvOaLPHa8nOxmSX6neU6805mU2di69uMixy3WAKWBJVYPFEakKVC/CVBKROy/fvyDYwPeElJqXQP13vlyUtXxyW3k9N4qdJTaS52mvmI14s/pQnGUwBbEp+gM46zXOakSrwPR7JIhUoT7WF2YEXUuTq7QU7Nkr01CorQYE1s8c2HgF6sdtA/gxhaEBDTm98mcCsvQn/Y1XZ+/EdtDiR1Lr0wCcAAAAASUVORK5CYII=);
    }
  }
</style>

<template>
  <header id="header">
    <div class="container">
      <div class="header-left">
        <router-link to="/">riuir</router-link>
        <router-link to="/bangumi/news">番剧</router-link>
      </div>
      <div class="header-right"></div>
      <div class="mask" v-if="theme === 'default'"></div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'v-header',
    components: {

    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    data () {
      return {
        theme: 'default'
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
