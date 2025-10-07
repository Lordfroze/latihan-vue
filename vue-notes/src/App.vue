<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Konten from './components/Konten.vue'
</script>

<template>
  <header>
    <div class="flex items-left py-2 px-2">
      <img alt="Vue logo" class="" src="./assets/logo.svg" width="100" height="100" />
    </div>

    <div class="wrapper flex justify-center items-center">
      <HelloWorld msg="halooo dari vue" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <Konten />
  <p class="text-center text-9xl text-gray-500">coba lah</p>
</template>

<!-- <style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
