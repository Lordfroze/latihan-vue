<script setup>
import products from "../data/product.json"; // mengimport data product.json
import { RouterLink } from "vue-router"; // mengimport RouterLink dari vue-router
</script>

<template>
  <div>
    <h1>Home</h1>
    <div class="product">
      <!-- menampilkan product dengan v-for dari product.json -->
      <RouterLink
      v-for="product in products"
      :key="product.id"
      :to ="`/products/${product.id}`"
      >{{ product.name }}</RouterLink> 
    </div>
  </div>
</template>

<style scoped>
.product {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>