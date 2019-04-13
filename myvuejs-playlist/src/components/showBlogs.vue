<template>
    <div v-theme:column="'narrow'" id="show-blogs">
         <h1>All Blog Articles</h1>         
        
         <input type="text" style="width: 100%; padding: 5px" v-model="search" placeholder="search blogs" autofocus>
        
         <div v-for="blog in filteredBlogs" class="single-blog"> 

             <router-link v-bind:to="'/blog/' + blog.id">
                <h2>{{ blog.title | to-uppercase }}</h2>
             </router-link>   
             <article>{{ blog.content | snippet }} </article>
         </div>

    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    components: {

    },

    data () {
        return {
            blogs:[],
            search:"",
        }
    },

    methods: {

    },

    created(){
        this.$http.get('https://mr-vue.firebaseio.com/posts.json').then(function(data) {
            
            return data.json();
        }).then(function(data) {
            var blogsArray = [];
            
            for(let key in data)
            {
                data[key].id = key;
                // console.log(data[key].ida);
                blogsArray.push(data[key]);
            }
            // console.log(blogsArray);
            this.blogs = blogsArray;
            
        })
    },

    computed:{

    },

    //register filters locally
    filters:{
        'to-uppercase': function (value) {
              return value.toUpperCase();
        }
    },

    directives:{
        
        'rainbow':{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString().slice(2, 8);
            }        
        
        
        
        },

    },

    mixins:[searchMixin]

}
</script>

<style>

    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }

    .single-blog{
        /* border: 1px solid rgba(20, 47, 197, 0.719); */
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background:#eee;
    }

</style>