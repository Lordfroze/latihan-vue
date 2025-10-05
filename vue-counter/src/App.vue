<script setup>
import {ref} from "vue"
const count = ref(1);
</script>

<template>
  <!DOCTYPE html>
<html lang="en" data-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
    <link href="./output.css" rel="stylesheet">
</head>

<body>
    <main>
        <div class="container py-5">
            <h1 class="text-5xl font-bold text-center">Counter App</h1>
            <p id="counter" class="text-5xl font-bold text-center py-10">{{count}}</p>
            <div class="flex justify-center items-center gap-4">
                <button id="increment" @click="count++" class="bg-sky-500 hover:bg-sky-700  rounded-2xl text-white px-8 py-4">+</button>
                <button id="decrement" @click="count--" class="bg-red-500 hover:bg-red-700 rounded-2xl text-white px-8 py-4">-</button>
            </div>
            <p class="text-center italic text-sm py-5 px-1.5">Click the button to increase or decrease the counter</p>
        </div>
    </main>
</body>

</html>
</template>