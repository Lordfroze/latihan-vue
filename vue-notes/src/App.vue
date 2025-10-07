<script setup>
import { ref } from "vue";
const showForm = ref(true) // state untuk menampilkan form modal
const newMemo = ref("") // state untuk menyimpan inputj an memo
const memos = ref([]) // array untuk menyimpan memo
const errorMessage = ref("") // state untuk menyimpan pesan error

function addMemo() { // function untuk menambah memo
if(!newMemo.value) { // jika inputan memo kosong, maka tidak akan ditambahkan
  errorMessage.value = "Memo tidak boleh kosong" // set pesan error
  return; // hentikan eksekusi function
}
errorMessage.value = "" // clear pesan error setelah inputan valid

  memos.value.push({ // tambah memo ke array memos
    id: Date.now(),  // membuat id unik untuk setiap memo dari tanggal sekarang
    content: newMemo.value, // isi memo dari inputan user
    date: new Date().toLocaleDateString("id-ID"), // tanggal memo dibuat
    backgroundColor: getRandomColor(), // warna background memo acak
  })
  newMemo.value = "" // clear inputan memo setelah ditambahkan
  showForm.value = false // hide form modal setelah ditambahkan
}

function getRandomColor() { // function untuk membuat warna background acak
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function deleteMemo(id) { // function untuk delete memo
  memos.value = memos.value.filter((memo) =>  memo.id !== id); // memfilter id sesuai pada memo yang dipilih
}
</script>

<template>
  <main>
    <!-- memo -->
     {{ memos }} <!-- menampilkan array memos -->
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="header-button">+</button>   <!-- tombol tambah memo -->
      </header>
      <!-- card memo -->
      <div class="card-container">
        <!-- perulangan dari array memos dan memberikan key unik untuk setiap memo -->
        <div v-for="memo in memos" class="card"
        :key="memo.id"
        :style="{ backgroundColor: memo.backgroundColor }"> <!--memberikan style background color acak -->
          <p class="card-content">{{ memo.content }}</p> <!-- isi memo dari array memos -->
          <div class="card-footer">
            <p class="card-date">{{ memo.date }}</p> <!-- tanggal memo dibuat -->
            <button @click="deleteMemo(memo.id)" class="card-button">x</button> <!-- tombol hapus memo-->
          </div>
        </div>
      </div>
      <!--end card memo -->
    </div>

    <!-- form input memo / form modal -->
    <div v-show="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="showForm = false" class="form-close-btn">&times;</button>  <!-- tombol close form -->
        <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p> <!-- menampilkan pesan error -->
        <textarea name="memo" id="memo" cols="30" rows="10" v-model="newMemo"></textarea>
        <button @click="addMemo" class="form-save-btn">Save</button> <!-- tombol save memo untuk memanggil fungsi addMemo -->
      </div>
    </div>
    <!-- end form input memo / end form modal -->
  </main>
</template>


<!-- style card memo -->
<style scoped>
main {
  height: 100vh;
  width: 100vh;
}

.container {
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #495a7d;
}

.header-button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  background-color: #495a7d;
  color: white;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 225px;
  height: 225px;
  padding: 10px;
  background-color: #6e54cc;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-overlay {
  position : absolute; /** agar posisi diatas semua elemen */
  top: 0; /** posisi dari atas */
  left: 0; /** posisi dari kiri */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-modal {
  width: 420px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-save-btn {
  padding: 10px 20px;
  font-size : 20px;
  width: 100%;
  background-color: #495a7d;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  color: white;
}

.form-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.form-error {
  color: red;
}

.card-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;

}


</style>