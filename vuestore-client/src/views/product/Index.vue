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



export default {
  components: {
    ProductItem // register ProductItem component
  },
  data() {
    return {
      products // return data products
    }
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