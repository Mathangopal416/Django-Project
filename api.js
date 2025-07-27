import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const getProducts = () => API.get('products/');
export const getSalts = () => API.get('salts/');
export const getReviews = () => API.get('reviews/');
