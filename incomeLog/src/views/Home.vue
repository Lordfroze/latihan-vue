<script setup>
import { ref, watch, onMounted, watchEffect } from 'vue';
import IncomeCard from '@/components/IncomeCard.vue';
import Pagination from '@/components/Pagination.vue';
import axios from 'axios';
import Loading from '@/components/Loading.vue';
import IncomeForm from '@/components/IncomeForm.vue';

const incomes = ref([]);
const page = ref(1);
const limit = ref(8);
const API_URL = `http://localhost:3000/incomes?_page=${page.value}&_per_page=${limit.value}`;
const isLoading = ref(true);

async function fectchdata() {
	const API_URL = `http://localhost:3000/incomes?_page=${page.value}&_per_page=${limit.value}`; // membuat state API_URL dengan nilai awal http://localhost:3000/incomes
	try {
		isLoading.value = true; // mengubah nilai isLoading menjadi true sebelum data income di load
		const response = await axios.get(API_URL);
        console.log(response);
		incomes.value = response.data;
	} catch (error) {
		console.log(error);
	} finally {
		isLoading.value = false; // mengubah nilai isLoading menjadi false setelah data product di load
	}
}

// Membuat watcher effect untuk memanggil fectchdata setiap kali page atau limit berubah
watchEffect(() => {
	fectchdata(); // memanggil fectchdata
});

// Membuat fungsi changePage
function changePage(newPage) {
    if (newPage < 1) return; // jika newPage kurang dari 1, maka return
    if (newPage > incomes.value.pages) return; // return jika newPage lebih besar dari pages,variabel pages didapatkan dari respon server http://localhost:3000/products?_page=1&_per_page=8
    page.value = newPage; // mengubah nilai page dengan newPage
}

// Membuat fungsi Create data product
async function createIncome(income) {
	try {
		await axios.post('http://localhost:3000/incomes', income); // membuat data income ke API_URL method sesuai api dari jsonserver
		fectchdata(); // memanggil fectchdata setelah membuat data income
	} catch (error) {
		console.error(error);
	}
}

</script>

<template>
    {{ incomes}}
    <!-- loading -->
    <div v-if="isLoading">
        <Loading />
    </div>
    <!-- loading end -->
    <main v-else>
        <IncomeForm @create-income="createIncome" />
        <!-- card -->
        <div class="mt-5 grid grid-cols-4 gap-2 px-2">
            <IncomeCard v-for="(income, index) in incomes" :key="index" :income="income" />
        </div>
        <!-- card end -->
        <!-- pagination -->
        <div class="text-center pt-5 pb-5">
            <Pagination :page="page" :totalPages="incomes.pages" @change-Page="changePage" />
        </div>
        <!-- pagination end -->
    </main>
</template>