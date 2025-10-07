<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="konten">
    <h2>Ini adalah konten dari yoga</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem odio ipsa numquam at rem eius iure magni dolor qui mollitia, sunt soluta inventore architecto illo laudantium maiores, quae omnis!</p>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>