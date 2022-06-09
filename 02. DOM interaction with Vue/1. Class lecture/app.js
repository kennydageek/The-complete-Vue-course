new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0,
    },

    computed: {
        output() {
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    },

    methods: {
        result() {
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }

});