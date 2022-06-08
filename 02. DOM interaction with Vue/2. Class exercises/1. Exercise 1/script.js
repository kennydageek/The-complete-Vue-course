new Vue({
    el: "#exercise",
    data: {
        myName: 'Kehinde Ajibade',
        age: 27,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },

    methods: {
        multiplyBy3() {
            return this.age * 3
        },

        randomFloat() {
            return Math.random();
        },
    }
})