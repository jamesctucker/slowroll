<script setup>
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
</script>

<template>
  <header class="flex flex-row justify-between">
    <a href="/">Slow Roll</a>
    <nav>
      <ul class="flex flex-row space-x-4">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a v-if="!store.isAuthenticated" href="/login">Login</a>
          <button v-else @click="store.signOut()" class="btn">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>
