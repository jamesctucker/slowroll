import { useHttp } from "@/composables/useHttp";
import { createUser, loginUser, logoutUser } from "@/api/auth.api";

export const useAuth = () => {
  const { http, setHTTPHeader } = useHttp();
  // register
  const register = (user) => {
    return createUser(user);
  };

  // login
  const login = async (user) => {
    return loginUser(user).then((response) => {
      console.log(response.headers);
      if (response.headers.authorization) {
        console.log("response", response);

        const token = response.headers.authorization;
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", token);
        setHTTPHeader({ Authorization: token });
      }

      return response;
    });
  };
  // logout
  const logout = () => {
    return logoutUser().finally(() => {
      delete http.defaults.headers.common["Authorization"];
      clearCache();
    });
  };

  const clearCache = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    location.href = "/";
  };

  const getUser = () => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        return JSON.parse(user);
      } catch {
        return null;
      }
    }

    return null;
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  return { register, login, logout, clearCache, getUser, getToken };
};
