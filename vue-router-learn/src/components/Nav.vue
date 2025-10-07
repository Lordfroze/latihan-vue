<script setup>
import {RouterLink} from 'vue-router'; // import RouterLink dari vue-router
</script>

<template>
    <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        |
        <RouterLink active-class="active" to="/">Home</RouterLink>  <!-- RouterLink ke halaman Home -->
        <RouterLink active-class="active" to="/about">About</RouterLink>

    </div>
</template>

<style scoped>
div {
    display: flex;
    justify-content: left;
    padding: 10px;
    gap: 10px;
    background-color: #f2f2f2;
}

.active {  /** style untuk active link */
    font-weight: 900;
    color: white;
    background-color: red;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
}
</style>