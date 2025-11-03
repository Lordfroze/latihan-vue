<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'product'}">Product</router-link>|
      <router-link :to="{name: 'product-detail', params: {id: 1}}">Detail</router-link> |
      <router-link :to="{name: 'cart'}">Cart</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
