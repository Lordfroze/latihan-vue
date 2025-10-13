<script setup>
import { useRoute, useRouter, RouterView } from "vue-router"; // mengimport useRoute dari vue-router
import items from "../data/items.json"; // mengimport data products.json
import Nav from "@/components/Nav.vue";
import { computed } from "vue";

const route = useRoute(); // mengimport useRoute dari vue-router
const router = useRouter();  // mengimport useRouter dari vue-router
const itemId = parseInt(route.params.id); // mencari product dengan id yang sesuai

const item = items.find( // mencari product dengan id yang sesuai
    (item) => item.id === itemId // mencari product dengan id yang sesuai
);

// fungsi menampilkan owner
function showOwner() {
    router.push({ name: "owner", params: { id: itemId } }); // owner diperoleh dari vue-router-learn/src/router/index.js 18
}

// fungsi untuk mengecek apakah halaman saat ini adalah halaman owner
const isOwnerPage = computed(() => {
    return route.name === "owner";
});
</script>

<template>
    <Nav />
    <div v-if="item" class="flex flex-row px-5 py-20">
        <div class="card bg-base-100 w-96 shadow-sm basis-full">
            <div class="card-body">
                <h2 class="card-title">{{ item.name }}</h2>
                <p>Deskripsi: {{ item.description }}</p>
                <p>Tanggal {{ item.date }}</p>
                <p>Harga: {{ item.price }}</p>
                <RouterView />
                <button class="btn" @click="showOwner" v-if="!isOwnerPage">
                    Show owner
                </button>
                <div class="card-actions justify-end">
                    <RouterLink :to="`/list/`" class="btn btn-primary">Close</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Item not found</p>
    </div>
</template>