<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';
import axios from 'axios';

const incomes = ref([]);
// async function getIncomes() {
//     const response = await axios.get('http://localhost:3000/incomes');
//     incomes.value = response.data;
//     console.log(incomes.data);
// }
// getIncomes();

// menggunakan await secara langsung untuk dirender dengan Suspense
incomes.value = await axios
.get('http://localhost:3000/incomes')
.then((res) => res.data);
console.log(incomes.value);


</script>

<template>
        <!-- card -->
         {{ incomes }}
        <div class="mt-5 grid grid-cols-4 gap-2 px-2">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <!-- card end -->
    <!-- pagination -->
    <button class="btn">Next Page</button>
    <div class="text-center pt-5 pb-5">
        <Pagination />
    </div>
    <!-- pagination end -->
</template>