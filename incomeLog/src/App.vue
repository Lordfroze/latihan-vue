<script setup>
import {RouterView} from 'vue-router';
import Navbar from './components/Navbar.vue';
import { Suspense } from 'vue';
import Home from './views/Home.vue';
</script>

<template>
  <Navbar />
  <!-- <RouterView /> -->
  <Suspense>
    <template #default>
      <Home />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
