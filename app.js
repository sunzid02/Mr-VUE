new Vue({
    //elements
    el:"#vue-app",
    
    data:{
        name: 'zia',
        job: 'Junior Developer',
        gitlink: 'https://github.com/sunzid02/',
        web: '<a href = "https://github.com/sunzid02/">PUTA</a>',
        age: 24,
        x:0,
        y:0,
    },

    //all functions
    methods:{
      greet: function(time) {
          name = this.name; //getting name from data.name
          return 'Good ' + time + ' '+ name;
      },
      
      addition: function( num1, num2 ) {
          return num1 + num2;
      },

      add:function(inc) {
          this.age += inc;
      },

      subtract:function(dec) {
          this.age -= dec;
      },

    //   event func
      updateXY:function(event) {
          this.x = event.offsetX;
          this.y = event.offsetY;
      },

      click:function() {
        alert("youtube a ja");  
      },

    }
})