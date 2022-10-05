<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();
const email = ref("");
const password = ref("");

const login = (e) => {
  e.preventDefault();
  store.signIn({ email: email.value, password: password.value });
};
</script>
<template>
  <div class="flex flex-col space-y-4">
    <h1>Login</h1>
    <fieldset class="flex flex-col space-y-2">
      <label for="email">Email</label>
      <input
        v-model="email"
        type="email"
        class="input input-bordered w-full max-w-xs"
        name="email"
      />
    </fieldset>

    <fieldset class="flex flex-col space-y-2">
      <label for="password">Password</label>
      <input
        v-model="password"
        type="password"
        class="input input-bordered w-full max-w-xs"
        name="password"
      />
    </fieldset>

    <button class="btn" type="submit" @click="login">Login</button>
  </div>
</template>
