<template>
  <div>
    <div id="page-wrap" v-if="product"> <!-- menampilkan page ketika product ada product didapat dari data-seed -->
      <div id="img-wrap">
        <img :src="`http://localhost:8000${product.imageUrl}`" alt=""> <!-- menampilkan image dari server-->
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp.{{ product.price }}</h3>
        <p>Average Rating: {{ product.averageRating }}</p>
        <button id="add-to-cart">Add to Cart</button>
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
      product : {} // menyiapkan object kosong untuk menampung data product
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
</style>
