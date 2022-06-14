Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">

    <div class="product-image">
        <img :src="image">
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else> Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant,index) in variants" :key="variant.variantId" class="color-box"
            :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
        </div>

        <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to
            Cart</button>
        <button @click="decCart">Remove from Cart</buton>
    </div>
</div>
    `,

    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            description: 'This is a product page for socks',
            selectedVariant: 0,
            details: ['80% cotton', "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: '/images/socks_green.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: '/images/socks_blue.jpg',
                    variantQuantity: 0
                }
            ],
        }
    },

    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },

        decCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
        },

        updateProduct(index) {
            this.selectedVariant = index;
        }
    },

    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },

        image() {
            return this.variants[this.selectedVariant].variantImage
        },

        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },

        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return 2.99;
        }
    }
});

new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: [],
    },

    methods: {
        updateCart(id) {
            this.cart.push(id);
        },

        removeCart(id) {
            this.cart.pop();
        }
    }
});