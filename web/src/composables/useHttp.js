import axios from "axios";

export const useHttp = () => {
  const http = axios.create();
  //   set base url
  http.defaults.baseURL = "http://localhost:3000/";

  const setHTTPHeader = (header) => {
    http.defaults.headers.common = {
      ...http.defaults.headers.common,
      ...header,
    };
  };

  return { http, setHTTPHeader };
};
