<script setup>
import {RouterView} from 'vue-router';
import Navbar from './components/Navbar.vue';
import { Suspense } from 'vue';
import Home from './views/Home.vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>
