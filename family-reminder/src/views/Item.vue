<script setup>
import { useRoute } from "vue-router"; // mengimport useRoute dari vue-router
import items from "../data/items.json"; // mengimport data products.json
import Nav from "@/components/Nav.vue";

const route = useRoute(); // mengimport useRoute dari vue-router
// console.log(route);
// console.log(route.params.id)

const item = items.find( // mencari item dengan id yang sesuai
    (item) => item.id === parseInt(route.params.id) // mencari item dengan id yang sesuai
);

</script>

<template>
    <Nav />
    <div class="flex flex-row px-5 py-20">
    <div class="card bg-base-100 w-96 shadow-sm basis-full">
        <div class="card-body">
            <h2 class="card-title">{{ item.name }}</h2>
            <p>Deskripsi: {{ item.description }}</p>
            <p>Tanggal Pajak {{ item.date }}</p>
            <p>Harga: {{ item.price }}</p>
            <div class="card-actions justify-end">
                <RouterLink :to="`/list/`" class="btn btn-primary">Close</RouterLink>
            </div>
        </div>
    </div>
    </div>
</template>