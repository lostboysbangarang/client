<template>
  <div class="container dark">
    <Nav />
    <BodyIndex />
    <!-- <Projects /> -->
  </div>
</template>

<script>
export default {
    name: 'Index',
    asyncData() {},
    data() {
        return {
        }
    },
    fetch() {},
    computed: {
    },
    async beforeCreate() {
        },
    created() {
        },
    beforeMount() {
        console.log(this)
    },
    mounted() {

    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {
        // fixHeight = () => {
        //     let height = this.$children[0].clientHeight;
        // }
    },
}
</script>

<style lang="scss">
  .container {
      background-color: whitesmoke;
      &.dark {
          background-color: $blue;
      }
  }
</style>