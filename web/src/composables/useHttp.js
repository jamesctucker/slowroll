import axios from "axios";

export const useHttp = () => {
  const http = axios.create();

  const setHTTPHeader = (header) => {
    http.defaults.headers.common = {
      ...http.defaults.headers.common,
      ...header,
    };
  };

  return { http, setHTTPHeader };
};
