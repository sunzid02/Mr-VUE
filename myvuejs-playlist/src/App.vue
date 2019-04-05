<template>
  <div>
      <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <ninja v-bind:ninjas="ninjas"></ninja>
        <!-- <hr>
        <ninja v-bind:ninjas="ninjas"></ninja> -->

      <app-footer v-bind:title="title"></app-footer>
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
              ],
              title: "Vue Ninjas "
    }
  },

  methods:{
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  },
}
</script>

<style>
</style>
