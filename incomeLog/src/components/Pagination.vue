<script setup>
const props = defineProps({
  page: Number,
  totalPages: Number,
});

const emit = defineEmits(['change-Page']); // mendefinisikan event change-Page ,defineEmits berfungsi untuk mendefinisikan event yang akan diemit

function changePage(newPage) { // membuat fungsi changePage yang menerima newPage
  emit('change-Page', newPage); // emit atau panggil event change-Page berisi newPage
}
</script>

<template>
  <div class="join">
    <button @click="changePage(page - 1)" class="join-item btn">«</button>
    <button class="join-item btn">Page {{ page }} of {{ totalPages }}</button>
    <button @click="changePage(page + 1)" class="join-item btn">»</button>
  </div>
</template>