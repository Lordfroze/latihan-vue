<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <!-- perulangan untuk menampilkan data products dan mengirim prop data product ke ProductItem component -->
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>

</template>

<script>
import { products } from '../../data-seed' // import data-seed
import ProductItem from '../../components/ProductItem.vue' // import ProductItem component
import axios from 'axios' // import axios



export default {
  components: {
    ProductItem // register ProductItem component
  },
  data() {
    return {
      products : [] // menyiapkan array kosong untuk menampung data products
    }
  },
  async created(){
    const result = await axios.get('http://localhost:8000/api/products') // mengambil data products dari server
    // console.log(result.data);
    this.products = result.data; // assign data products ke array products

  }
}
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>