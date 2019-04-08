<template>
    <div>
      <show-blogs></show-blogs>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';    // './' means current directory
import showBlogs from './components/showBlogs.vue';   

export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs,
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>