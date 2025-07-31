// src/api/api.js

const BASE_URL = "http://54.162.75.209:3000/api"; // your base URL

export const API_ENDPOINTS = {
  CAREGROES: `${BASE_URL}/buckydrop/categories`,
  PRODUCT: `${BASE_URL}/buckydrop/products?keyword=k`,
  PRODUCTDDETAILS: `${BASE_URL}/buckydrop/products/`,
  GET_POSTS: `${BASE_URL}/posts`,
};
