new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com'
    },

    methods: {
        sayHello() {
            this.title = 'Hello!';
            return this.title;
        },
    }
});