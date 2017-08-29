<style lang="scss">

  $item-size: 50px;
  #side-bar {
    position: fixed;
    bottom: 80px;
    right: 18px;
    background-color: transparent;
    width: $item-size;

    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity .5s
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0
    }

    .item {
      background-color: gray;
      width: $item-size;
      height: $item-size;
      margin-bottom: 15px;
      border-radius: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

<template>
  <transition name="fade">
    <div id="side-bar" v-show="show">
      <div class="item" id="to-top">

      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'v-side-bar',
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
        show: false
      }
    },
    created () {

    },
    methods: {

    },
    mounted () {
      this.show = window.screen.height < document.body.scrollTop
      document.addEventListener('scroll', () => {
        this.show = window.screen.height < document.body.scrollTop
      })
    }
  }
</script>
