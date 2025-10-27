<script setup>
import { onMounted, ref } from 'vue'; // import onMounted dan ref dari vue
import { useRoute, useRouter } from 'vue-router'; // import useRoute dan useRouter dari vue-router
import axios from 'axios'; // import axios dari axios
import IncomeForm from '@/components/IncomeForm.vue'; // import IncomeForm dari @/components/IncomeForm.vue

const route = useRoute();
const router = useRouter();

const id = route.params.id; // mengambil id dari route params
const income = ref({}); // membuat ref income dengan nilai awal {}
const API_URL = `http://localhost:3000/incomes/${id}`;

onMounted(() => { // onMounted akan dijalankan setelah component di render
	fetchData(); // fetchData akan dijalankan setelah component di render
});

// fungsi memuat data product dari API
async function fetchData() { // fetchData akan dijalankan setelah component di render
	try {
		const response = await axios.get(API_URL); // fetch data dari API_URL
		income.value = response.data; // assign data ke income.value
	} catch (error) { // catch error jika terjadi error
		console.error(error); // log error ke console
	}
}

async function updateIncome(income) {
	try {
		await axios.put(API_URL, income);
		router.push('/');
	} catch (error) {
		console.error(error);
	}
}

async function deleteIncome() {
	try {
		await axios.delete(API_URL);
		router.push('/');
	} catch (error) {
		console.error(error);
	}
}
</script>

<template>
	<div class="">
		<h2>{{ income.name }}</h2>
		<!-- <img :src="income.image" :alt="income.name" class="income-image" /> -->
		<p>Uang masuk Rp. {{ income.amount }}</p>
		<p>Uang keluar Rp.0</p>
		<p>Tanggal: {{ income.date }}</p>
		<IncomeForm :income="income" @update-income="updateIncome" />
		<router-link to="/" class="btn btn-primary">Back</router-link>
		<button @click="deleteIncome" class="btn btn-error">Delete</button>
	</div>
</template>