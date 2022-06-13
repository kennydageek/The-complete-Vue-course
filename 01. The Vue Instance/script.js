new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'This is a product page for socks',
        image: '/images/socks_green.jpg',
        inStock: false,
        details: ['80% cotton', "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: '/images/socks_green.jpg',

            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: '/images/socks_blue.jpg',
            }
        ],
        cart: 0,
    },

    methods: {
        addToCart() {
            this.cart += 1;
        },

        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})