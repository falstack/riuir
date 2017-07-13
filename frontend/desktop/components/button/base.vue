<style lang="scss" scoped>
  button {
    user-select: none;
    pointer-events: auto !important;
    cursor: pointer;

    * {
      pointer-events: none;
    }

    &:focus {
      outline-width: 0;
    }
  }
</style>

<template>
  <button :class="[{
            'normal': value === false,
            'toggle': value === true
          }, type]"
          @click="handleClick"
          @mouseover="handleMouseOver"
          @mouseout="handleMouseOut">
    <slot></slot>
  </button>
</template>

<script>
  /**
   * button 基础实现
   *
   * [样式：仅提供一些最基础的 reset 样式，和传递 class 的方法]
   *
   * [状态：hover、 click、 disabled]
   * 当按钮 hover 的时候，按钮会自动添加一个 hover 的类名，并且 emit 一个 hover 事件，参数是一个 Boolean]
   * 当按钮 click 之后，只要按钮绑定了 :bind 或 v-model 之一，按钮就会在点击之后自动添加一个 loading 的类名，
   *                    若 :bind 或 v-model 都不绑定，则不会提供 loading 类名和阻止 click emit，因为它不知道什么时候该添加 loading，什么时候该移除
   *                    loading 的时候，按钮的 click 事件无法 emit
   *                    当 v-model 或 :bind 的值变化之后，loading 类名会消除，按钮恢复可点击状态。
   * 当按钮上有 disabled 的 attr 时，自动为按钮添加一个 disabled 类名，并且按钮的 click 事件无法 emit
   *
   * [事件：它只是提供 helper function，供继承它的组件使用，并不会强制使用这些方法]
   * v-model {boolean}： 当按钮有两种状态，on / off 时，通过绑定 v-model 绑定
   *                     在 按钮 on 的时候自动添加一个 toggle 的类名，并移除 normal 类名；
   *                     按钮 off 的时候，自动添加一个 normal 的类名，并移除 toggle 类名
   * :bind   {number}:   当按钮需要对 response 的 success / error 提供不同样式的时候，可选择为 :bind 传入一个 int 值；
   *                     当 API 返回 success 的时候，需要显式的 bind++，此时按钮会自动添加一个 success 的类名，并移除 error 类名；
   *                     当 API 返回 error 的时候，需要显式的 bind--，此时按钮会自动添加一个 error 的类名，并移除 success 类名。
   *
   * :type  {string}
   */
  export default {
    name: 'button',
    props: {
      bind: {
        type: Number
      },
      value: {
        type: Boolean
      },
      type: {
        type: String,
        default: ''
      }
    },
    watch: {
      bind (val, oldVal) {
        if (val > oldVal) {
          this.type = 'success'
          this.$emit('input', !this.value)
        } else {
          this.type = 'error'
        }
      },
      value () {
        this.type = 'success'
      }
    },
    methods: {
      handleClick () {
        if (!this.type !== 'disabled' && this.type !== 'loading') {
          if (!(this.bind === undefined && this.value === undefined)) {
            this.type = 'loading'
          }
          this.$emit('click')
        }
      },
      handleMouseOver () {
        if (!this.type !== 'disabled') {
          this.$emit('hover', true)
        }
      },
      handleMouseOut () {
        this.$emit('hover', false)
      }
    }
  }
</script>
