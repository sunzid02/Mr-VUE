import Vue from 'vue'
import App from './App.vue'

// import Header from './components/Header.vue'
// Vue.component('Header', Header)

import VueResource from 'vue-resource'
Vue.use(VueResource);

// creating event bus
// export const bus = new Vue();

//creating globally custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});
Vue.directive('theme', {
  bind(el, binding, vnode) {

    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    }
    else if (binding.value == 'narrow') {
      el.style.maxWidth = '580px';
    }

    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }

  }
});


//Custom Filter
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
});



new Vue({
  el: '#app',
  render: h => h(App)
})
 