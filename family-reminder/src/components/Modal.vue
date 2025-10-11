<script setup>
import { ref } from "vue";
const newMemo = ref(''); // state untuk menyimpan inputan user
const memos = ref([]); // array untuk menyimpan memo
const errorMessage = ref(""); // state untuk menyimpan pesan error
const createdDate = ref(""); // state untuk menyimpan tanggal memo dibuat
const endDate = ref(""); // state untuk menyimpan tanggal memo diupdate


// function untuk menambah memo
function addMemo() {
  if (!newMemo.value.trim()) {
    errorMessage.value = "Memo tidak boleh kosong"; // set pesan error
    return; // hentikan eksekusi function
  }
  errorMessage.value = ""; // clear pesan error setelah inputan valid

  memos.value.push({
    // tambah memo ke array memos
    id: Date.now(), // membuat id unik untuk setiap memo dari tanggal sekarang
    memo: newMemo.value, // isi memo dari inputan user
    date: new Date().toLocaleDateString("id-ID"), // tanggal memo dibuat
    createdDate: createdDate.value, // tanggal memo dibuat
    // backgroundColor: getRandomColor(), // warna background memo acak
  });
  newMemo.value = ""; // clear inputan memo setelah ditambahkan
  document.getElementById("my_modal_1").close(); // close modal setelah ditambahkan
}
// function getRandomColor() {
//   // function untuk membuat warna background acak
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function untuk delete memo
function deleteMemo(id) { // function untuk delete memo
  memos.value = memos.value.filter((memo) => memo.id !== id); // memfilter id sesuai pada memo yang dipilih
}

</script>

<template>
  <main>
    <!-- Daisy ui + button -->
    <div class="fab">
      <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">+</div>
      <button class="btn btn-lg btn-circle" onclick="my_modal_1.showModal()">Add</button>
    </div>
    <!-- end Daisy ui + button -->

    <!-- daisy ui card-->
    <!-- {{ memos }} -->
    <div class="flex flex-wrap gap-2 justify-center">
      <div v-for="memo in memos" :key="memo.id" class="card card-border bg-base-100 w-96">
        <div class="card-body">
          <h2 class="card-title">{{ memo.memo }}</h2>
          <p>Tanggal Pembuatan dokumen {{ createdDate }}</p>
          <p>Tanggal Berakhir dokumen {{ endDate }}</p>
          <p class="text-sm text-gray-500">terahir di update{{ memo.date }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">View</button>
              <button @click="deleteMemo(memo.id)" class="btn btn-outline btn-error">x</button>
              <!-- tombol hapus memo-->
            </div>
          </div>
        </div>
      </div>
      <!-- end daisy ui card -->

      <!-- daisy ui modal -->
      <!-- Open the modal using ID.showModal() method -->
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box flex flex-col items-baseline justify-center">
          <h3 class="text-lg font-bold">{{ newMemo }}</h3>
          <p v-if="errorMessage" class="form-error text-red-500">{{ errorMessage }}</p>
          <textarea class="textarea" placeholder="masukkan teks memo" v-model="newMemo"></textarea>
          <label class="label">
            <span class="label-text">Tanggal Pembuatan dokumen</span>
          </label>
          <input type="date" class="input" v-model="createdDate" />
          <label class="label">
            <span class="label-text">Tanggal Berakhir dokumen</span>
          </label>
          <input type="date" class="input" v-model="endDate" />
          <div class="modal-action">
            <button class="btn btn-primary" @click="addMemo">Save</button>
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <!-- end daisy ui modal -->
  </main>
</template>