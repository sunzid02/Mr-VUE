export default{
    
    computed:{
        
        filteredBlogs: function (params) {
            return this.blogs.filter((blog) => {
                // console.log(blog.title.match(this.search));

                return blog.title.match(this.search);
            });
        }
    }
}