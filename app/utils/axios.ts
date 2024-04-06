// axiosInstance.js
import axios from "axios";
import { getUserFromLocalStorage } from "./localstorage";
// import { getUserFromLocalStorage } from './localStorage';
import {User} from '../types/type';

const $axios = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit", // Set your API base URL
  //   timeout: 10000, // Set timeout (optional)
  headers: {
    //   'Content-length': "40",
    //   'Content-Type': 'application/json; charset=utf-8',
    // // 'content-type': "application/json; charset=utf-8"
  },
});

// Add an interceptor to add the token to each request
$axios.interceptors.request.use(
 async (config) => {
    //  const user = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY5YjNmNzNkZDUzNGNhZmUyMmU5OWIiLCJpYXQiOjE3MTIzMjY4NjIsImV4cCI6MTcxMjQxMzI2Mn0.bkXaoCAlgU0BubSgvLzpoEF1ExuE6k2Jnce2k-BvSa8";
    const token = await getUserFromLocalStorage();
    
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $axios;
