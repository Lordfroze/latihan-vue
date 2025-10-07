<script setup>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <Nav />
  <main>
  <router-view />
  </main>
</template>


<style scoped>
  main {
    padding: 2rem;
  }
</style>