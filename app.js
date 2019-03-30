new Vue({
    //elements
    el:"#vue-app",

    data: {
        output:'My fav food '
    },

    methods: {
        readRefs: function() {   
            console.log(this.$refs);
         
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },
});


// Components- reuse this code in different vue instances
