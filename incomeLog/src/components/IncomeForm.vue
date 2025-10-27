<script setup>
import { ref, defineEmits, watchEffect, computed } from 'vue';

const props = defineProps({
	income: Object,
});

// membuat ref name, amount, date, id dengan nilai awal sesuai src/data/rest.json
const id = ref('');
const name = ref(props.income?.name || '');
const amount = ref(props.income?.amount || '');
const date = ref('');

watchEffect(() => {
	id.value = props.income?.id || '';
	name.value = props.income?.name || '';
	amount.value = props.income?.amount || '';
	date.value = props.income?.date || '';
});

const showForm = ref(false); // membuat ref showForm dengan nilai awal false
const isUpdate = computed(() => !!props.income); // membuat ref isUpdate dengan nilai awal false, jika props.income ada nilainya, maka isUpdate bernilai true

const emit = defineEmits(['create-income', 'update-income']);

function saveIncome() {
	const formData = {
		name: name.value,
		amount: amount.value,
		date: date.value,
	};
	if (isUpdate.value) {
		emit('update-income', formData);
	} else {
		emit('create-income', formData);
	}
}
</script>

<template>
	<div class="form-container">
        <!-- tombol toggle form -->
		<button @click="showForm = !showForm">
			{{ isUpdate ? 'Edit' : 'Add' }} income
		</button>
		<div v-if="showForm" class="income-form"> <!-- menampilkan form income jika showForm bernilai true -->
			<form @submit.prevent="saveIncome"> <!-- mencegah submit form default yang mengarah ke halaman lain -->
				<label for="name">Name:</label>
				<input type="text" id="name" v-model="name" required />
				<label for="amount">Amount:</label>
				<input type="number" id="amount" v-model="amount" required />
				<label for="date">Date:</label>
				<input type="date" id="date" v-model="date" required />
				<label for="image">Image:</label>
				<input type="text" id="image" v-model="image" required />
				<button type="submit">Save</button> <!-- tombol save -->
				<button type="button" @click="showForm = false">Close</button> <!-- tombol close -->
			</form>
		</div>
	</div>
</template>

<style scoped>
.form-container {
	text-align: center;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
}

.form-container button {
	padding: 10px 20px;
	margin-top: 10px;
	background-color: #28a745;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.2s;
}

.form-container button:hover {
	background-color: #218838;
	transform: translateY(-2px);
}

.form-container button:focus {
	outline: none;
}

.form-container button:active {
	transform: translateY(1px);
	background-color: #1e7e34;
}

.product-form {
	margin-top: 20px;
	background-color: #f9f9f9;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	max-width: 400px;
	margin: 0 auto;
	text-align: left;
}

.product-form label {
	display: block;
	margin-bottom: 5px;
}

.product-form input[type='text'],
.product-form input[type='number'] {
	width: calc(100% - 20px);
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.product-form button {
	padding: 10px 20px;
	margin-top: 10px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.product-form button:hover {
	background-color: #0056b3;
}

.product-form button[type='submit'] {
	background-color: #28a745;
}

.product-form button[type='submit']:hover {
	background-color: #218838;
}

.product-form button[type='button'] {
	background-color: #dc3545;
}

.product-form button[type='button']:hover {
	background-color: #c82333;
}
</style>