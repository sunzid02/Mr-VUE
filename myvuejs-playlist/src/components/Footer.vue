<template>
    <footer>
        <p> {{ copyrightTitle }} {{ title }} </p>
    </footer>
</template>

<script>
    export default {
    props:{
        title:{
            type: String
        }
    },
    data () {
            return {
                copyrightTitle: '@All right reserved to'
            }
        },
    }
</script>

<style scoped>
    
    footer{
        background: #222;
        padding: 10px;
    }

    p{
        color: lightgreen;
        text-align: center;
    }
</style>
