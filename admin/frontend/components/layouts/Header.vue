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
  }
</style>

<template>
  <el-menu class="header" :class="{ 'header-collapse': collapse }" mode="horizontal">
    <el-menu-item index="0">
      <button class="collapse-btn" :class="[ collapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left' ]" @click="toggleCollapse"></button>
    </el-menu-item>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
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
      }
    },
    mounted () {

    }
  }
</script>
