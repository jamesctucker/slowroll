import { useHttp } from "@/composables/useHttp";

const { http } = useHttp();

export const register = (user) => {
  return http.post("api/v1/users/sign_up", { user });
};

export const login = (user) => {
  return http.post("api/v1/users/sign_in", { user });
};

export const logout = () => {
  return http.delete("api/v1/users/sign_out");
};
