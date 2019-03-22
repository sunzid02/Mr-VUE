new Vue({
    //elements
    el:"#vue-app",
    
    data:{
        name: 'zia',
        job: 'Junior Developer',
        gitlink: 'https://github.com/sunzid02/',
        web: '<a href = "https://github.com/sunzid02/">PUTA</a>',
        age: 24,
        x: 0,
        y: 0,
        write:'',
        a: 0,
        b: 0,
        fruit: 20,
        available:false,
        nearby:false,
    },

    //all functions
    methods:{
    //   addToA: function() {
    //     console.log('addToA has been called');
    //     return this.a + this.fruit;  
    //   },

    //   addToB: function() {
    //     console.log('addToB has been called');
    //     return this.b + this.fruit;  
    //   },

      greet: function(time) {
        //   console.log('greet has been called');

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

      logName:function() {
          console.log("U typed your name");
      }

    },

    computed:{

        compClasses:function() {
          return  {
              available: this.available,
              nearby: this.nearby
          }
        },

        addToA: function () {
            console.log('addToA has been called');
            return this.a + this.fruit;
        },

        addToB: function () {
            console.log('addToB has been called');
            return this.b + this.fruit;
        },
    }
})