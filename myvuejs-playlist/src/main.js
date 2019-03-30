import Vue from 'vue'
import App from './App.vue'

// register globally
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas)

new Vue({
  el: '#app',
  render: h => h(App)
})
