<template>
  <div class="navbar bg-base-100 shadow-sm z-1">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl">Family Reminder</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Menu</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><router-link active-class="btn btn-active" to="/">Home</router-link></li>
              <li><router-link active-class="btn btn-active" to="/list">List</router-link></li>
              <li><router-link active-class="btn btn-active" to="/about">About</router-link></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>