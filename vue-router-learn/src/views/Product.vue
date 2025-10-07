<script setup>
import { useRoute } from "vue-router"; // mengimport useRoute dari vue-router
import products from "../data/product.json"; // mengimport data products.json

const route = useRoute(); // mengimport useRoute dari vue-router
console.log(route);
// console.log(route.params.id)

const product = products.find( // mencari product dengan id yang sesuai
    (product) => product.id === parseInt(route.params.id) // mencari product dengan id yang sesuai
);

</script>

<template>
    <div>
        <h1>Product</h1>
        <h2>{{ product.name }} - {{ product.price }}</h2> <!-- menampilkan nama dan harga product -->
        <p>year: {{ product.year }}</p> <!-- menampilkan tahun product -->
    </div>
</template>