import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useAuth } from "@/composables/auth/useAuth";

export const useAuthStore = defineStore("auth", () => {
  const { register, login, logout, getUser } = useAuth();
  const initialState = { user: getUser() };
  const user = ref({ ...initialState });

  const isAuthenticated = computed(() => {
    return !!user.value.user;
  });

  const createUser = async ({ email, password } = {}) => {
    await register({ email, password }).then((response) => {
      user.value.user = response.data;
      console.log("user.value.user", user.value.user);
      //   TODO: if success, sign in user, else show error
      signIn({ email, password });
    });
  };

  const signIn = async ({ email, password } = {}) => {
    const response = await login({ email, password });
    user.value.user = response.data;

    return { response };
  };
  const signOut = async () => {
    await logout().then(() => {
      user.value.user = null;
    });
  };

  return { user, isAuthenticated, createUser, signIn, signOut };
});
