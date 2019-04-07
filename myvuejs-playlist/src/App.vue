<template>
  <div>

    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>

    <button @click="component='form-one' ">Show Form 1</button>
    <button @click="component='form-two' ">Show Form 2</button>
 
  </div>
</template>

<script>
  import formOne from './components/formOne.vue'
  import formTwo from './components/formTwo.vue'

  export default {
    components:{
      'form-one': formOne,
      'form-two': formTwo,
    },
    data () {
      return {
        component: 'form-two',
      }
    },

    methods:{
 
    },
  }
</script>

<style>
</style>
