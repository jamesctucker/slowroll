import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useAuth } from "@/composables/auth/useAuth";

export const useAuthStore = defineStore("auth", () => {
  const { register, login, logout, getUser } = useAuth();
  const initialState = { user: getUser() };
  const state = ref({ ...initialState });

  const isAuthenticated = computed(() => {
    return !!state.value.user;
  });

  const createUser = async ({ email, password } = {}) => {
    const response = await register({ email, password });
    state.value.user = response.data;
  };

  const signIn = async ({ email, password } = {}) => {
    const response = await login({ email, password });
    state.value.user = response.data.user;
    // return { response };
  };
  const signOut = async () => {
    await logout().then(() => {
      state.value.user = null;
    });
  };

  return { state, isAuthenticated, createUser, signIn, signOut };
});
