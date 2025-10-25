<script setup>
import Navbar from '@/components/Navbar.vue';
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';
</script>

<template>
    <div class="px-2">
        <!-- card -->
        <div class="mt-5 grid grid-cols-4 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <!-- card end -->
    </div>
    <!-- pagination -->
    <div class="text-center pt-5 pb-5">
    <Pagination />
    </div>
    <!-- pagination end -->
</template>