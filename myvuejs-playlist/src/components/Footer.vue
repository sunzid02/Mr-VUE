<template>
    <footer>
        <p> {{ copyrightTitle }} {{ title }} </p>
    </footer>
</template>

<script>
import { bus } from '../main';

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

        created(){
            bus.$on('titleChangedByBus', (data) => {
                this.title = data;
            })
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
