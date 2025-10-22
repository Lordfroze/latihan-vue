<script setup>
import { ref, watch } from 'vue';
import Modal from '@/components/Modal.vue';
import Nav from '@/components/Nav.vue';
import srcitems from '../data/items.json';
import QuickLink from '@/components/QuickLink.vue';
import itemcard from '@/components/Itemcard.vue';
const items = ref(srcitems);
const cari = ref('');

// watch(search, (newSearch) => {
//     items.value = srcitems.filter(item => item.name.toLowerCase().includes(newSearch.toLowerCase()));
// });

watch(cari, () => { // memanggil watcher search
    items.value = srcitems.filter((item) => // memfilter data dari srcQuiz
    {
        return item.name.toLowerCase().includes(cari.value.toLowerCase()); // mengembalikan nilai title yang sesuai dengan search
    });
});
</script>

<template>
    <Nav />
    <main class="px-6 item-center">
        <div class="flex flex-row justify-between py-2">
        <h3 class="">Halaman List</h3>
        <input v-model.trim="cari" type="text" placeholder="Cari disini" class="input" />
        </div>
        <!-- menampilkan item dengan v-for dari items.json -->
        <div class="flex flex-wrap gap-4 justify-start">
            <!-- menampilkan itemCard.vue -->
            <itemcard v-for="item in items" :key="item.id" :item="item" />
            <!-- menampilkan Modal.vue -->
            <Modal />
        </div>
        <!-- menampilkan QuickLink.vue -->
        <QuickLink />
    </main>
</template>