<template>
    <footer>
        <p> {{ copyrightTitle }} </p>
    </footer>
</template>

<script>
    export default {
    data () {
            return {
                copyrightTitle: '@All right reserved to Sunzid'
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
