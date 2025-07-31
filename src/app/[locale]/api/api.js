// src/api/api.js

const BASE_URL = "http://54.162.75.209:3000/api"; // your base URL
const BASE_URL_CART = "http://34.207.72.195:5000/api"; // your base URL

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  GET_USERS: `${BASE_URL}/users`,
  CAREGROES: `${BASE_URL}/buckydrop/categories`,
  PRODUCT: `${BASE_URL}/buckydrop/products?keyword=k`,
  PRODUCTDDETAILS: `${BASE_URL}/buckydrop/products`,
  GET_CART: `${BASE_URL_CART}/cart/add`,
  ADD_TO_CART: `${BASE_URL_CART}/cart/add`,
};
