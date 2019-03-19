new Vue({
    //elements
    el:"#vue-app",
    
    data:{
        name: 'zia',
        job: 'Junior Developer',
        gitlink: 'https://github.com/sunzid02/',
        web: '<a href = "https://github.com/sunzid02/">PUTA</a>'
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