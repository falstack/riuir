<style lang="scss" scoped="">
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: $sidebar-color;
    width: $sidebar-collapse;
    overflow: hidden;
  }

  .sidebar:not(.el-menu--collapse) {
    width: $sidebar-width;
  }
</style>

<template>
  <el-menu class="sidebar"
           theme="dark"
           :collapse="collapse"
           :default-active="defaultActive"
           :router="true">

    <el-menu-item index="/dashboard">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <!--<el-menu-item index="2">-->
      <!--<i class="el-icon-picture"></i>-->
      <!--<span slot="title">头图</span>-->
    <!--</el-menu-item>-->

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-star-on"></i>
        <span slot="title">番剧</span>
      </template>
      <el-menu-item-group title="番剧">
        <el-menu-item index="/bangumi/list">番剧列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="标签">
        <el-menu-item index="/bangumi/tag">标签列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="视频">
        <el-menu-item index="/bangumi/video">视频列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <!--<el-menu-item index="4">-->
      <!--<i class="el-icon-share"></i>-->
      <!--<span slot="title">用户</span>-->
    <!--</el-menu-item>-->

    <!--<el-menu-item index="5">-->
      <!--<i class="el-icon-date"></i>-->
      <!--<span slot="title">统计</span>-->
    <!--</el-menu-item>-->

    <!--<el-menu-item index="6">-->
      <!--<i class="el-icon-setting"></i>-->
      <!--<span slot="title">设置</span>-->
    <!--</el-menu-item>-->
  </el-menu>
</template>

<script>
  export default {
    name: 'v-sideBar',
    components: {

    },
    props: ['collapse'],
    watch: {
      '$route' (val) {
        if (!this.defaultActive) {
          this.defaultActive = val.path
        }
      }
    },
    computed: {

    },
    data () {
      return {
        defaultActive: ''
      }
    },
    created () {

    },
    methods: {

    },
    mounted () {

    }
  }
</script>
