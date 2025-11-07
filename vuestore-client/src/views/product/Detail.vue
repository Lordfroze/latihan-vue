<template>
  <div>
    <div id="page-wrap" v-if="product"> <!-- menampilkan page ketika product ada product didapat dari data-seed -->
      <h4 v-if="notif" class="notif">Item added successfully</h4> <!-- menampilkan notif ketika notif true -->
      <div id="img-wrap">
        <img :src="`http://localhost:8000${product.imageUrl}`" alt=""> <!-- menampilkan image dari server-->
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp.{{ product.price }}</h3>
        <p>Average Rating: {{ product.averageRating }}</p>
        <button id="add-to-cart" @click="addToCart(product.code)">Add to Cart</button> <!-- menambahkan event click untuk addToCart -->
        <p>{{ product.description }}</p>
      </div>
    </div>
  <NotFound v-else/> <!-- menampilkan notfound ketika product tidak ada -->
  </div>
</template>

<script>
import axios from 'axios'; // import axios
import NotFound from '../errors/404.vue'

export default {
  components: {
    NotFound
  },

  data() {
    return {
      product : {}, // menyiapkan object kosong untuk menampung data product
      notif : false // menyiapkan variable notif false untuk menampilkan notifikasi sebelum add to cart
    }
  },

  // menambahkan method addToCart untuk menambahkan product ke cart
  methods: {
    async addToCart(product){
      await axios.post('http://localhost:8000/api/orders/user/1/add', { // menambahkan product ke cart
        product : product
      })
      this.notif = true // mengubah notif menjadi true setelah add to cart
    }
  },

  async created () {
    const code = this.$route.params.id // mendapatkan product.code dari url
    const result = await axios.get(`http://localhost:8000/api/products/${code}`) // mengambil data product berdasarkan code dari server
    // console.log(result.data);
    this.product = result.data; // assign data product ke object products diatas
  }
}
</script>

<style scoped>
 #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }

  .notif {
    text-align: center;
    color: white;
    background-color: #41b883;
    padding:3% ;
    border-radius: 8px;
  }
</style>
