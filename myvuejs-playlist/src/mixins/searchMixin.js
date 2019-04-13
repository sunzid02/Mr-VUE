export default{
    
    computed:{
        
        filteredBlogs: function (params) {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    }
}