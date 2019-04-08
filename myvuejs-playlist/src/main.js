import Vue from 'vue'
import App from './App.vue'

// import Header from './components/Header.vue'
// Vue.component('Header', Header)

import VueResource from 'vue-resource'
Vue.use(VueResource);

// creating event bus
// export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
 