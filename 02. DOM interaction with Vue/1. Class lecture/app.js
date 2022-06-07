new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
    },

    methods: {
        sayHello() {
            this.title = 'Hello!';
            return this.title;
        },
    }
});