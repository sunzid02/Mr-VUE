<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of form</h3>
        <p>Information about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" name="" id="" placeholder="name" required>
        <input type="password" name="" id="" placeholder="password" required>
      </div>

      <div slot="form-controls">
        <button @click="handleSubmit"> Submit </button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './components/formHelper.vue'

  export default {
    components:{
      'form-helper': formHelper
    },
    data () {
      return {
        title:'I am the dynamic slot title',
      }
    },

    methods:{

    },
  }
</script>

<style >
</style>
