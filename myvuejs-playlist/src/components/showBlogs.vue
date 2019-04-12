<template>
    <div v-theme:column="'narrow'" id="show-blogs">
         <h1>All Blog Articles</h1>         
        
         <input type="text" style="width: 100%; padding: 5px" v-model="search" placeholder="search blogs" autofocus>
        
         <div v-for="blog in filteredBlogs" class="single-blog">            
             <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
             <article>{{ blog.body | snippet }} </article>
         </div>

    </div>
</template>

<script>

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
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
            // var a = Math.random().toString().slice(2,8);
            console.log(data);
            this.blogs = data.body.slice(0,100);            
        })
    },

    computed:{
        filteredBlogs: function (params) {
            return this.blogs.filter( (blog) => {
                console.log(blog.title.match(this.search));
                
                return blog.title.match(this.search);
            });
        }
    },
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