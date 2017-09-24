<style lang="scss">
  $item-size: 50px;
  #side-bar {
    position: fixed;
    bottom: 80px;
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
      font-size: 30px;
      text-align: center;
      line-height: 50px;
      color: $color-white;
      cursor: pointer;
      font-family: 'iconfont' !important;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

<template>
  <transition name="fade">
    <div id="side-bar" v-show="show" :style="{ right: `${right}px` }">
      <div class="item icon-fanhuidingbu" aria-hidden="true" @click="$scrollY(0)"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'v-side-bar',
    data () {
      return {
        show: false,
        right: 0
      }
    },
    methods: {
      computeShow () {
        const result = window.screen.height < document.body.scrollTop
        if (result) {
          this.right = (document.body.offsetWidth - document.querySelector('.container').offsetWidth) / 2 + 18
        }
        return result
      }
    },
    mounted () {
      this.show = this.computeShow()
      document.addEventListener('scroll', () => {
        this.show = this.computeShow()
      })
      window.addEventListener('resize', () => {
        this.show = this.computeShow()
      })
    }
  }
</script>
