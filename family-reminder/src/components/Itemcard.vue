<template>
    <Nav />
    <main class="px-2 item-center">
        <div class="flex flex-row justify-between">
        <h1 class="text-3xl text-center">Halaman List</h1>
        <input v-model.trim="cari" type="text" placeholder="Cari disini" class="input" />
        </div>
        <!-- menampilkan item dengan v-for dari items.json -->
        <div class="flex flex-wrap gap-4 justify-center">
            <div v-for="item in items" :key="item.id" :to="`/items/${item.id}`"
                class="card card-border bg-base-100 w-96">
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
            <!-- menampilkan modal dari component Modal.vue -->
            <Modal />
            <QuickLink />
        </div>
    </main>
</template>