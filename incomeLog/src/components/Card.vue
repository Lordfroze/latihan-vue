<script setup>
// menerima props income dari parent component
const {income} = defineProps({
    income: Object,
});
</script>

<template>
    <div class="card neutral card-sm shadow-sm">
        <div class="card-body">
            <h2 class="card-title">{{ income.name }}</h2>
            <p>Uang masuk Rp. {{ income.amount }}</p>
            <p>Uang keluar Rp.0</p>
            <p>Tanggal: {{ income.date }}</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary">Manage</button>
            </div>
        </div>
    </div>
</template>