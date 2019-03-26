Vue.component('greeting', {
    
    template: '<p>Hey there I am {{ name }}<button @click ="changeName"> change name</button></p>',
    
    data: function () {
        return {
            name: "ZIA"
        }
    },

    methods:{
        changeName: function(params) {
            this.name = 'Mario'
        }
    }
});


new Vue({
    //elements
    el:"#vue-app-one",
});

new Vue({
    el: "#vue-app-two",
});


// Components- reuse this code in different vue instances
