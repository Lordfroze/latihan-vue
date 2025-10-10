<script setup>
import { ref } from "vue";
const showForm = ref(false); // state untuk menampilkan dan menyembunyikan form modal
</script>

<template>
  <main>
    <!-- Daisy ui + button -->
    <div class="fab">
      <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary" @click="showForm = true">+</div>
      <button class="btn btn-lg btn-circle" onclick="my_modal_1.showModal()">Add</button>
    </div>
    <!-- end Daisy ui + button -->

    <!-- daisy ui modal -->
    <!-- Open the modal using ID.showModal() method -->
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <textarea class="textarea" placeholder="Bio"></textarea>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    <!-- end daisy ui modal -->

    <!-- daisy ui card-->
    <div class="flex flex-wrap gap-2 justify-center">
      <div class="card card-border bg-base-100 w-96">
        <div class="card-body">
          <h2 class="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">View</button>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100 w-96">
        <div class="card-body">
          <h2 class="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">View</button>
          </div>
        </div>
      </div>
      </div>
    <!-- end daisy ui card -->
  </main>
</template>