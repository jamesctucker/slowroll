<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
</script>

<template>
  <label for="email">Email</label>
  <input v-model="email" type="email" />

  <label for="password">Password</label>
  <input v-model="password" type="password" name="password" />

  <label for="passwordConfirm">Confirm Your Password</label>
  <input
    v-model="passwordConfirmation"
    type="password"
    name="passwordConfirm"
  />
</template>
