<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const store = useAuthStore();
const router = useRouter();
const route = useRoute();

const signUp = async (e) => {
  e.preventDefault();
  await store.createUser({
    email: email.value,
    password: password.value,
  });

  router.push(route.query.redirect || "/");
};
</script>

<template>
  <div class="flex flex-col space-y-4">
    <fieldset class="flex flex-col space-y-2">
      <label for="email">Email</label>
      <input
        v-model="email"
        type="email"
        class="input input-bordered w-full max-w-xs"
      />
    </fieldset>

    <fieldset class="flex flex-col space-y-2">
      <label for="password">Password</label>
      <input
        v-model="password"
        type="password"
        name="password"
        class="input input-bordered w-full max-w-xs"
      />
    </fieldset>

    <fieldset class="flex flex-col space-y-2">
      <label for="passwordConfirm">Confirm Your Password</label>
      <input
        v-model="passwordConfirmation"
        type="password"
        name="passwordConfirm"
        class="input input-bordered w-full max-w-xs"
      />
    </fieldset>

    <button class="btn" @click="signUp">Submit</button>
  </div>
</template>
