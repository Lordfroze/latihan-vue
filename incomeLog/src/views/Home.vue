<script setup>
import { ref, watch, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';
import axios from 'axios';
import Loading from '@/components/Loading.vue';

const incomes = ref([]);
const page = ref(1);
const limit = ref(5);
const API_URL = `http://localhost:3000/incomes?_page=${page.value}&_per_page=${limit.value}`;
const isLoading = ref(true);

// membuat onMounted untuk menampilkan data product ketika halaman pertama kali di load
onMounted(async () => {
    try {
        isLoading.value = true; // mengubah nilai isLoading menjadi true sebelum data product di load
        // menambahkan await untuk menunggu data product dari server
        incomes.value = await axios.get(API_URL).then((res) => res.data);
    } catch (error) {
        console.log(error);
    } finally {
        isLoading.value = false; // mengubah nilai isLoading menjadi false setelah data product di load
    }

});

// membuat fungsi watch untuk menampilkan data product ketika page / limit berubah
watch(page, async () => {
    // menambahkan await untuk menunggu data product dari server
    incomes.value = await axios
        .get(`http://localhost:3000/incomes?_page=${page.value}&_per_page=${limit.value}`) // mengubah url dengan page dan limit
        .then((res) => res.data);
});

console.log(incomes.value);

// Membuat fungsi changePage
function changePage(newPage) {
    if (newPage < 1) return; // jika newPage kurang dari 1, maka return
    if (newPage > incomes.value.pages) return; // return jika newPage lebih besar dari pages,variabel pages didapatkan dari respon server http://localhost:3000/products?_page=1&_per_page=8
    page.value = newPage; // mengubah nilai page dengan newPage
}

</script>

<template>
    <!-- loading -->
    <div v-if="isLoading">
        <Loading />
    </div>
    <!-- loading end -->
    <main v-else>
        <!-- card -->
        {{ incomes }}
        <div class="mt-5 grid grid-cols-4 gap-2 px-2">
            <Card v-for="(income, index) in incomes.data" :key="index" :income="income" />
        </div>
        <!-- card end -->
        <!-- pagination -->
        <button class="btn">Next Page</button>
        <div class="text-center pt-5 pb-5">
            <Pagination :page="page" :totalPages="incomes.pages" @change-Page="changePage" />
        </div>
        <!-- pagination end -->
    </main>
</template>