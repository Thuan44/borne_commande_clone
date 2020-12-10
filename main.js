// Component : product-sheet
Vue.component('product-sheet', {
    template: '#productSheetTemplate', // Je cible le template créée dans mon html
    props: ['name', 'role'], // la props 'name' et 'role' me permettent de les utiliser dans mon template
    methods: {
        passer_commande: function (product) {
            this.$emit("commande-passee", product)
        }
    }
})

// Main instance
let vm = new Vue ({
    el: '#app',
    data: {
        user : 'Thuan',
        products: ["Pizza", "Hamburger", "Cheesburger", "Tacos"],
        orders: []
    },
    methods: {
        addToOrders(product) {
            this.orders.push(product)
        }
    }
})