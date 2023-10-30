let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
      anotherMessage: "Noooo"
    }
  },

  beforeCreate() {
    console.log('beforeCreated() function called!', this.message)
  },

  created() {
    console.log('created() function called!', this.message)
  },

  beforeMount() {
    console.log('beforeMount() function called!', this.$el, this.message);
  },

  mounted() {
    console.log('mounted() function called!', this.$el, this.message);
  },
})

vm.mount('#app');