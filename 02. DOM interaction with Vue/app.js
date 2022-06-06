new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
    },

    methods: {
        sayHello() {
            return this.title;
        }
    }
});