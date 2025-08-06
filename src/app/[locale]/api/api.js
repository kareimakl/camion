// src/api/api.js

const BASE_URL = "http://buckydrop.camion-app.com:3000"; // your base URL
const BASE_URL_CART = "http://stories.camion-app.com:3001"; // your base URL

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  GET_USERS: `${BASE_URL}/users`,
  CAREGROES: `${BASE_URL}/buckydrop/categories`,
  PRODUCT: `${BASE_URL}/api/products`,
  PRODUCTDDETAILS: `${BASE_URL}/api/products`,
  GET_CART: `${BASE_URL}/cart/add`,
  ADD_TO_CART: `${BASE_URL}/cart/add-item`,
  STORY: `${BASE_URL_CART}/stories/active`,
};
