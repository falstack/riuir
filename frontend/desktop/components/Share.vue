<script>
  export default {
    name: 'v-share',
    render: (createElement) => {
      return createElement('div')
    },
    data () {
      return {
        config: {
          disabled: ['google', 'twitter', 'facebook', 'linkedin', 'diandian']
        }
      }
    },
    watch: {
      '$route' () {
        console.log(this.$el); // eslint-disable-line
        new socialShare(document.querySelector('.share'), this.config) // eslint-disable-line
      }
    },
    mounted () {
      new socialShare(this.$el, this.config) // eslint-disable-line
    }
  }
</script>
