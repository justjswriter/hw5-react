import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

apiClient.interceptors.response.use(
  (response) => {
    console.log("Api", response);
    return response;
  },
  (error) => {
    console.log("Api Error", error);
    return Promise.reject(error);
  }
);

export default apiClient;