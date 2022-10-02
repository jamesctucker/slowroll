import { useHttp } from "@/composables/useHttp";

const { http } = useHttp();

export const createUser = (user) => {
  return http.post("api/v1/users/sign_up", { user });
};

export const logInUser = (user) => {
  return http.post("api/v1/users/sign_in", { user });
};

export const logoutUser = () => {
  return http.delete("api/v1/users/sign_out");
};
