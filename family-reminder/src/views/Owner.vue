<script setup>
import { useRoute } from 'vue-router'; // mengimport useRoute dari vue-router
import items from '../data/items.json'; // mengimport data items.json

const route = useRoute(); // mengimport useRoute dari vue-router
const {owner} = items.find( (p) => p.id === parseInt(route.params.id)); // mencari owner dengan id yang sesuai
</script>

<template>
    <div>
        <h1>Owner</h1>
        <p>{{ owner.name }}</p> <!-- menampilkan nama owner -->
        <p>{{ owner.email }}</p> <!-- menampilkan email owner -->
    </div>
</template>