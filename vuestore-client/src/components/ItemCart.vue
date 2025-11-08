<template>
  <!-- perulangan setiap item di cartItems -->
  <div class="product-container">
    <img :src="`http://localhost:8000${item.imageUrl}`" alt="" class="product-image">
    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p>Rp.{{ item.price }}</p>

    </div>
    <!-- mengirim event remove-item ke parent component vuestore-client/src/views/cart/Index.vue -->
    <button class="remove-button" @click="$emit('remove-item', item.code)">Remove</button>
  </div>
</template>

<script>
export default {
  // menerima prop item dari parent component vuestore-client/src/views/cart/Index.vue
  props: [
    'item'
  ]
}
</script>

<style scoped>
.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>