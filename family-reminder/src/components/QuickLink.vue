<script setup>
import items from '@/data/items.json';
</script>

<template>
    <div class="collapse text-xs">
        <input type="checkbox" class="peer" />
        <div
            class="collapse-title">
            Quick Link
        </div>
        <div
            class="collapse-content text-primary-content">
            <RouterLink v-for="item in items" :key="item.id" :to="`/items/${item.id}`">

                <div class="link link-info">
                    {{ item.name }}
                </div>
            </RouterLink>
            Klik untuk berpindah ke setiap item dari list.
        </div>
    </div>
</template>