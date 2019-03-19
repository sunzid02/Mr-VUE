new Vue({
    //elements
    el:"#vue-app",
    
    data:{
        name: 'zia',
        job: 'Junior Developer',
    },

    //all functions
    methods:{
      greet: function(time) {
          name = this.name; //getting name from data.name
          return 'Good ' + time + ' '+ name;
      },
      
      addition: function( num1, num2 ) {
          return num1 + num2;
      }
    }
})