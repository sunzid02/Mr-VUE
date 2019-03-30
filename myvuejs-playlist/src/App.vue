<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <h2> {{ greetings() }} </h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'My first VUE FILEs'
    }
  },
  methods:{
    greetings: function (params) {
      return 'Good afternoon';
    }
  },
}
</script>

<style>

</style>
