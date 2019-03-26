var one = new Vue({
    //elements
    el:"#vue-app-one",
    
    data:{
        title: "Vue App one",
    }, 

    //all functions
    methods:{

    },

    computed:{
        greet: function() {
            return "Hello from app 1";
        }
    }
});

var two = new Vue({
    //elements
    el:"#vue-app-two",
    
    data:{
        title: "Vue App two",
    }, 

    //all functions
    methods:{
        changeTitle: function() {
            one.title = "title change from vue-app-two";
        }
    },

    computed:{
        greet: function () {
            return "Hello from app 2";
        }    
    }
});

two.title = "changed from outside";