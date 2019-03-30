<template>
    <div>
        <h2>Hello ninja component</h2>
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
