<template>
  <div>
      <app-header></app-header>
      <ninja></ninja>
      <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
// Vue.component('Header', Header)

export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'ninja': Ninjas,
  },
  data () {
    return {

    }
  },
}
</script>

<style>
</style>
