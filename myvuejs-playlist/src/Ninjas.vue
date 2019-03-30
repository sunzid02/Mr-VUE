<template>
    <div>
        <h1>Hello ninja component</h1>
        <ul>
            <li v-for="ninja in ninjas"> {{ ninja }} </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Zia', 'Zayed', 'Zunayed']
    }
  },
}
</script>


<style scoped>
  h1 {
    color:coral
  }
</style>
