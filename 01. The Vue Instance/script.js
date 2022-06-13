new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'This is a product page for socks',
        image: '/images/socks_green.jpg',
        inStock: true,
        details: ['80% cotton', "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue",
            }
        ],
    }
})