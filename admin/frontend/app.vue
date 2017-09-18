<style lang="scss">
  @import "~assets/css/global.scss";

  #__orz {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .view {
      padding: 30px;
      padding-left: $sidebar-width + 30;
      transition: $sidebar-transition;

      &.view-collapse {
        padding-left: $sidebar-collapse + 30;
      }
    }
  }
</style>

<template>
  <div id="__orz">
    <v-header :collapse.sync="isCollapse"></v-header>
    <v-side-bar :collapse="isCollapse"></v-side-bar>
    <router-view class="view" :class="{ 'view-collapse' : isCollapse }"></router-view>
  </div>
</template>

<script>
  import vSideBar from 'component/layouts/Sidebar'
  import vHeader from 'component/layouts/Header'

  export default {
    name: 'v-index',
    components: {
      vHeader, vSideBar
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
