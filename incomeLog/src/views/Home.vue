<script setup>
import Navbar from '@/components/Navbar.vue';
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';
</script>

<template>
    <div class="px-2">
        <Navbar />
        <div class="flex flex-wrap gap-x-3 gap-y-3 mt-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    <div class="text-center pt-5 pb-5">
    <Pagination />
    </div>
</template>