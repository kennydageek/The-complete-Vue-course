new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0,
    },
    methods: {
        increase() {
            this.counter++;
        },

        updateCoordinate(event) {
            this.x = event.clientX;
            this.y = event.clientY;
            console.log(event)
        }
    }
});