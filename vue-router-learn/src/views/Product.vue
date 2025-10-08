<script setup>
import { useRoute } from "vue-router"; // mengimport useRoute dari vue-router
import products from "../data/product.json"; // mengimport data products.json

const route = useRoute(); // mengimport useRoute dari vue-router
console.log(route);
// console.log(route.params.id)

// Mencari sebuah objek produk di dalam array products yang properti id-nya cocok dengan id yang ada di parameter URL saat ini. Produk pertama yang cocok akan disimpan dalam variabel product.
const product = products.find( // menelusuri setiap elemen dalam array products
    (product) => product.id === parseInt(route.params.id) // mencari product dengan id yang sesuai
);

// products.find(...): Ini memanggil metode .find() pada array products. Metode .find() akan menelusuri setiap elemen dalam array products dan mengembalikan elemen pertama yang memenuhi kondisi yang diberikan.
// (product) => ...: Ini adalah arrow function yang menjadi kondisi untuk metode .find(). Fungsi ini akan dijalankan untuk setiap item di dalam array products. product di dalam kurung adalah nama sementara untuk setiap item saat ditelusuri.
// product.id === parseInt(route.params.id): Ini adalah logika perbandingannya.
// product.id: Mengakses properti id dari setiap item produk dalam array.
// route.params.id: Ini berasal dari vue-router. route.params berisi parameter dari URL. Jadi, jika URL Anda adalah /product/3, maka route.params.id akan bernilai string "3".
// parseInt(...): Fungsi ini mengubah nilai string menjadi integer (bilangan bulat). Ini diperlukan karena route.params.id selalu berupa string, sedangkan product.id kemungkinan besar adalah tipe data number. Operator === memeriksa kesamaan nilai dan tipe data, jadi tipe datanya harus sama.
console.log("isi dari produk" , product);
</script>

<template>
    <div>
        <h1>Product</h1>
        <h2>{{ product.name }} - {{ product.price }}</h2> <!-- menampilkan nama dan harga product -->
        <p>year: {{ product.year }}</p> <!-- menampilkan tahun product -->
    </div>
</template>