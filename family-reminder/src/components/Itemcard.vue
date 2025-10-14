<script setup>
const {item} = defineProps(["item"])  // menerima prop item dari list.vue
// console.log(item)
</script>


<template>
    <div class="card card-border bg-base-100 w-96">
        <div class="card-body">
            <h2 class="card-title">{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p>Tanggal {{ item.date }}</p>
            <p class="text-sm text-gray-500">Harga {{ item.price }}</p>
            <div class="card-actions justify-end">
                <RouterLink :to="`/items/${item.id}`" class="btn btn-primary">View</RouterLink>
                <button @click="deleteItem(item.id)" class="btn btn-outline btn-error">x</button>
                <!-- tombol hapus item-->
            </div>
        </div>
    </div>
</template>