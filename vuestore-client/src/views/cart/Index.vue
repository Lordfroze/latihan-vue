<template>
  <div>
    <div id="page-wrap">
      <h1>Shopping Cart</h1>
      <!-- perulangan setiap item di cartItems -->
      <ItemCart
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        v-on:remove-item = "removeFromCart($event)"
      />
      <h3 id="total-price">Total Price: Rp.{{ totalPrice }}</h3>
      <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // import axios library
import ItemCart from '../../components/ItemCart.vue' // import ItemCart component

export default {
  components: {
    ItemCart // register ItemCart component
  },
  data() {
    return {
      cartItems : [] // menyiapkan array kosong untuk menyimpan item-item di cart
    };
  },
  methods : {
    // method removeFromCart untuk menghapus item dari cart
    async removeFromCart(product){
      await axios.delete(
        `http://localhost:8000/api/orders/delete/user/1/product/${product}`
      )
      // menghapus item dari array cartItems
      let indexCart = this.cartItems.map(function(item){
        return item.code
      }).indexOf(product)
      this.cartItems.splice(indexCart, 1)
    }
  },
  computed: {
    // Membuat computed property totalPrice untuk menghitung total price dari item-item di cart
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0); 
    },
  },
  async created() {
    // mengambil data cartItems dari server
    const result = await axios.get('http://localhost:8000/api/orders/user/1')
    // membuat object data untuk mengubah respon cartItems dari db menjadi array of object
    let data = Object.assign({},
      ...(result.data.map)(
        result => ({
          cart_items : result.products
        })
      )
    )
    this.cartItems = data.cart_items // menyimpan array of object cartItems ke dalam data cartItems
  }
}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid #41B883;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }
  #total-price {
    padding: 16px;
    text-align: right;
  }
  #checkout-button {
    width: 100%;
  }
  
</style>
