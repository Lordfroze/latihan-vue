<script setup>
// menerima props income dari parent component
const {income} = defineProps({
    income: Object,
});

import { useRouter } from 'vue-router';
const router = useRouter();

// membuat function goToProduct
function goToIncome() {
    router.push(`/income/${income.id}`);
}
</script>

<template>
    <div class="card neutral card-sm shadow-sm">
        <div class="card-body">
            <h2 class="card-title">{{ income.name }}</h2>
            <p>Uang masuk Rp. {{ income.price }}</p>
            <p>Uang keluar Rp. {{ income.expense }}</p>
            <p>Tanggal: {{ income.date }}</p>
            <div class="justify-end card-actions">
                <button @click="goToIncome" class="btn btn-primary">Manage</button>
            </div>
        </div>
    </div>
</template>