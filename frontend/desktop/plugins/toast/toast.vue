<style lang="scss" scoped>
  $item-width: 300px;
  $pos-top-down: 12px;
  $pos-rig-left: 12px;
  $icon-size: 14px;

  @mixin transition ($opacity, $visibility, $left) {
    opacity: $opacity;
    visibility: $visibility;
    left: $left;
  }

  @mixin theme ($bg, $color, $border, $base64) {
    background-color: $bg;
    color: $color;
    border: 1px solid $border;

    &:hover, &:active {
      opacity: 1;
    }
    .toast-icon {
      background-image: $base64;
    }
  }

  #toast-container {
    position: fixed;
    pointer-events: none;
    // if you want to change position, rewrite here
    right: $pos-rig-left;
    top: $pos-top-down;

    .toast-item {
      padding: 15px 10px;
      font-size: 14px;
      font-weight: 700;
      font-family: sans-serif;
      line-height: 1.1;
      text-align: center;
      border-radius: 4px;
      position: relative;
      margin-bottom: 10px;
      pointer-events: auto;
      width: $item-width;
      display: flex;
      opacity: .8;
      transition: .25s ease-in-out, opacity 0s;
      left: 0;
      cursor: pointer;
    }

    .toast-content {
      word-wrap: break-word;
      flex: auto;
    }

    .toast-icon {
      width: $icon-size;
      height: $icon-size;
      background-size: $icon-size;
      background-position: center;
      background-repeat: no-repeat;
      margin: 0 5px;
    }

    .toast-close {
      width: $icon-size;
      height: $icon-size;
      margin: 0 5px;
    }

    .theme-info {
      @include theme(#d9edf7, #31708f, #bce8f1, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADaUlEQVRYR7VX4VnbMBB9NwFhgsIEVSYgnaAwQekEyF6gsEAsJmiYoGECwgQRExA2gAmu35PlWHGcyKZf9YuPyLp3d+/e3QlGHGOrSwDfAZwBmAhg+LkCHsA7gA1El74qH4c+K7mLxlY09gvApQCT3P0IiGCWAArvCv598BwFYGx1C+Bm17C+1R4LvU6Omjoi8qX5p9ZRcd4Vd4cQ9AIwtqKnT02Ia6/0ARA+1jG8+7SxlQHUCuRHAoTffOuLxh6A+oFgPIRboY+AWO+KzZDwN3fq1KkTCDlDnvD7q64DOwCi56+t8ZBDN8Zw966xlRWgSkBM00hsAXTDrsBP74rFvxhPonEtwO+mYrwrps1vKYBbqdnOcI3y3NjqGsAFRFe+Kh/6QHciceddQYIjAIiltmbomXPvStb7oMNKaYBH8AxxL1GNnS/JiVgd50xFBDBfNKxVgD8MJpyx85VALhLGk2jUgL1DRwV4barKu5KpAaZ2/g7ICUuN/xzkerzE8Lf51Wfvytmx742tnWUUvCtOhfIqwJ9c+I4/GkoXOY2I6aZgraO9K2kQAfq2diVld9CJvLkhheIHJO5RkWoeTiJ+TwAhh2PIZ+ycAkPj26PIh7+53JJRn2Vq59T1rwpsSyOTQwrTBJCFAE8t+cYAqCuHPUWmttKYjywAyrRAF2tXmjZ1NYQx2pGW7mgAse+zy20lOwI4zbXeNgWtdoxOQWTyVt/Tmh7E3lr4onjpy6dIOLXzTafvHxSfPlA7JEyEYeNdcZ7zwthqlpJvbPny/U4ZjhOiHukN5I0NiU6scqK1I0QdREelONXytvzAqM0EahUyyxExEb6PtSs52JIUw5rRfvhD+S0Fej7M+IFmxGFEoCTWCR/0rrjqJ0/7QCJA996VNsed6Ghox4B+KORs245jaQ0aSOrdQGeAsGUT7KDWfXQgSZpEkOUoLP9lJAP0hUra2NwbSptUBBCi1lfl/ZDwHrqTes6SVYjpHUoTmaTer8iHGIlmwxkU6uQdtvZKgDjeBeOXR8fy5GOSkiBCOiIQTsj3uZ4f9wpuU8lkpS+HqiS7mrG+m2hEIGxEFJvu8MG8UiWT/TGwndtUmID7zpDldFJvOAxlnZb8oWEup2Gj+vxy2jXUliA413EoiSliiMMiyipaHZqK+4D/BQyNBfAhGj+8AAAAAElFTkSuQmCC))
    }

    .theme-error {
      @include theme(#f2dede, #a94442, #ebccd1, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABiUlEQVRYR9WXTU7DMBCFZ6xWYkePwA3oEZxS1sCmghXlBnASuAHpqtANsKZqcoRyk7JDKvIgIyVqfj3jVDJkmdjvfR5nxmOEwA8G9ocKwIvWg20fj/tb+rhI082+AJt0CwCLUz0kgwkgDoBog4R3k9Uq7gqxGI2mhHSf6yqKJu/p2uoWAJ5PohgQr3cN0cBNF4hfcwWPu5oE9Ha5TM4rAE/j6BUBz8or9oWoM7fajQDzsdYKVFIXcilEk7nVNmCiq2WaViJgX7RN5EJINGrTUCJQjpZ0bmMdkAr5Rq+1EEkgJGMLWebKcY4wZ0yTD6sUtxkQQYwIU9/MYQG49tfXvDYN27akLRK+1ZMdgczABcGtFZne/wJwrT5fleAAY0eAay6FYAG0mhPNyke4BMIJwCkynDFehUgiLBnLKsU+gj5z/t5x7LOKLj1BIQLBW7LgTWnwtnyu9ZHqKXthOASATzRw2+VOUDrAHnJdNLr2YpJNsP/CwTes9301++rBsKzrrISulq3r9+AAP+vrYDBx5WG7AAAAAElFTkSuQmCC))
    }

    .theme-success {
      @include theme(#dff0d8, #3c763d, #d6e9c6, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACJUlEQVRYR+2WT07bQBTGv2c73VCpuUFzhCwhOMK9QTgB5ARQiUTsoLvKZpGeADhB6AmSyk5g13CDcgOQYBNiPzRuHE2M/4wBhw1ejt+895uZ730zhHf+6J3r4wNg5TuwfrheMwJjxwddX9ruxUoBGp1GXYM+AKEqtOfZLq0MIF4czH88x7NWArDRbbZ0xmm0cma+eXg06pPe8LZ0gEanuasRTqV2vwvYt8bOeCLGSgVIKA4E/M078YYRUGkAjY7Z04j2ZKMLGO2x457JY6UAbHabZwTsLBfnX2PH248775sDJBVn4Hxku7tJtv9mAPV9q/q5MuuDyJILMfj6YWpYQvGlAYjia5XZgIjqsSJ391O9llZ80QWRYJh54uuz7aufV/9Ub8ms4nK7peULj8DsNnkRwLj1CW3h03kQwt2I9D4BtXisD2yr5AgBkoQD8LFnez/SIJ5ZqxSY1G6ZOzDfxgkRfV0O5Iv7qdGOn2FW8SzFZ4owTEr633iQ0AUjaEfWmehu80nM+D1y3Fbe0aUakdk1jwE6epZgrgtiVGO+Lkknu90yj0D+aXbMIYi2iqwCQG67KQOEhvLJF234RRFi6XZTnLMIS3RC88C0oNFAJZlquynvQBSYqgcpEyP4PrJHPRXQwgChQWXooWi7vQjg/wu2Il4uy3qYv+des/Jobu5tGL7ngH40Ie92KwqVCyASRuYjivvarFXkssoDUgLIS/Ka/x8ATwoX+SE6YBZdAAAAAElFTkSuQmCC))
    }

    .theme-warning {
      @include theme(#fcf8e3, #8a6d3b, #faebcc, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC0klEQVRYR8WWsXLTQBCGd6UkRSjIG2A/AXaXyAXJGyRPgGkZeXCKSEOFUzESRZyxhhbzBJgniCmspENvEPMGpogLsLzMnSTPSdbpJBODGs9Yd7pv/9v9dxH+84N/c75rHr1h+y3v9nrT72wM4JhGDxHfRQfTK2vgDzeB2Ajgqts4+B0+uQeAg/jQ2a7+UD/vB7OqEBsBpKOPNSC6tD2/t3WA993Dmh7qLHogop/sFxGfAsAs1MPm2/7dtApEZQUcszVEhJcxwGUMwHOBCD7b3qS9NYAP5uExoX4T5R39sDy/xvNhsR8A4jP2d6iH9SoqVFLANVs3gHCczXy3Y7QB8FMEBmPLm5yUVaE0QCp6oG/WwI9BoqMcsxUgwnN+JRSeXHh34zIQpQGcjnGPgDXZAZnrCSzPbz4aQEpioK/WwD/N+7jbMcYA+KKKOSkVyJpOkmSsHLVQ4wm5p8+bzITc10YDdPwepQJN7YFfV6mgBBBNRywzUXLxzrNlqjKnQgAxemY6ezvzWmK3MgCuzEILEnNSWXQhQFE0MoCoIoRGRXRteX5XdhVSANFymens7swbYrMpAmDK/VrsT2MVCs1JCiAznSSSIgCuQqfVRYCr2LJHtuef5amQC5BnudnNKgC23jWNaWLRMnPKBRCjl20sA+CYR6eI2pcii14DyJjOmuUmSog1DyE1rY9+oDInouWZ7d2OxHVrAKLlFn2YS8yMh82EksPZO1GpPHNKAchMJy+ySF7k5YW07BU1n1Q5A5zbg0k/+eYKQGa5svqNfB+GRDRDxLasP7D9qZIGSM2PK4B09Or5jgGwyHmZodbLtucsuGsafUDkYzwJ8yMHyM55ouVKFeCNB6IhNIReUR6wJRlzWs2PHKDojlTdrMr7vBzDMqZT5RDVWtGcWJVh2nJV2x/5PcEYHdNgWczm+n/+sBaPzExIg9wRa9tEuISRciLaNsQfFAjn+xNADd0AAAAASUVORK5CYII=))
    }

    .toast-enter {
      opacity: 0;
      transform: translateY(30px);
      // if you want to change position, rewrite here
      left: $item-width;
    }
    .toast-leave-active {
      opacity: 0;
      position: absolute;
      transition-duration: .2s;
      // if you want to change position, rewrite here
      left: $item-width;
    }
  }
</style>

<template>
  <div id="toast-container"
       :style="{ zIndex : index }">
    <transition-group name="toast" tag="div">
      <div class="toast-item"
           v-for="item in list"
           :class="['theme-' + item.theme]"
           @click="close(item.id)"
           :key="item.id">
                <span class="toast-icon"
                      v-if="item.icon"
                      :class="['icon-' + item.theme]"></span>
        <span class="toast-content" v-text="item.content"></span>
        <span class="toast-close" v-if=" ! item.auto">&times;</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
  const fadeOutTime = 200

  export default {
    data () {
      return {
        theme: ['success', 'warning', 'error', 'info'],
        maxLen: 8,
        index: 999999,
        time: 5000,
        list: []
      }
    },
    methods: {
      show (opts) {
        let id = new Date().getTime() + Math.random().toString(36).substring(3, 6)
        let auto = !!opts.auto
        let time = opts.time || this.time
        if (this.maxLen && this.list.length > this.maxLen) {
          this.list.shift()
        }
        this.list.push({
          id: id,
          time: time,
          content: opts.content,
          icon: !!opts.icon,
          auto: !!opts.auto,
          clear: !!opts.clear,
          theme: opts.theme || 'info'
        })
        if (auto) {
          setTimeout(() => {
            this.close(id)
          }, this.time)
        } else {
          return new Promise((resolve) => {
            this.$on('toastSubmitEvent-' + id, () => {
              resolve()
            })
          })
        }
      },
      close (id) {
        for (let i = 0; i < this.list.length; ++i) {
          if (this.list[i].id === id) {
            this.list.splice(i, 1)
            this.$emit('toastSubmitEvent-' + id)
            if (!this.list.length) {
              setTimeout(() => {
                this.$destroy()
              }, fadeOutTime)
            }
            return
          }
        }
      },
      clear () {
        this.list = []
        setTimeout(() => {
          this.$destroy()
        }, this.time + fadeOutTime)
      }
    },
    destroyed () {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
</script>