<template>
  <div>
      <app-header></app-header>
        <ninja v-bind:ninjas="ninjas"></ninja>
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
              ninjas:[
                  {
                      name: 'ZIA',
                      speciality:'Vue Components',
                      show: false
                  },
                  {
                      name: 'ZAYED',
                      speciality:'HTML Wizardry',
                      show: false
                  },
                  {
                      name: 'ZUNAYED',
                      speciality:'Click Events',
                      show: false
                  },
                  {
                      name: 'SHAHRIN',
                      speciality:'Conditionals',
                      show: false
                  },
                  {
                      name: 'RUPOL',
                      speciality:'Webpack',
                      show: false
                  },
                  {
                      name: 'RAKHAL',
                      speciality:'Data Mining',
                      show: false
                  }
              ]
    }
  },
}
</script>

<style>
</style>
