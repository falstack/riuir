<style lang="scss" scoped="">
  .header {
    padding-left: $sidebar-width;
    transition: $sidebar-transition;

    &.header-collapse {
      padding-left: $sidebar-collapse;
    }

    .collapse-btn {
      width: 20px;
      height: 60px;
    }

    .user-panel {
      float: right;
    }
  }
</style>

<template>
  <el-menu class="header" :class="{ 'header-collapse': collapse }" mode="horizontal">
    <el-menu-item index="0">
      <button class="collapse-btn" :class="[ collapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left' ]" @click="toggleCollapse"></button>
    </el-menu-item>
    <el-submenu class="user-panel" index="9">
      <template slot="title">我</template>
      <el-menu-item @click="logout" index="9-1">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'v-header',
    components: {

    },
    props: ['collapse'],
    watch: {

    },
    computed: {

    },
    data () {
      return {

      }
    },
    created () {

    },
    methods: {
      toggleCollapse () {
        this.$emit('update:collapse', !this.collapse)
      },
      logout () {
        this.$http.post('/auth/logout').then(() => window.location.reload())
      }
    },
    mounted () {

    }
  }
</script>
