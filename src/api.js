import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/',
});

// Call this after login to update the Authorization header
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

export default API;
