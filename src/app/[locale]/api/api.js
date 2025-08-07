// src/api/api.js

const BASE_URL = "http://buckydrop.camion-app.com:3000"; // your base URL
const BASE_URL_STORY = "http://stories.camion-app.com:3001"; // your base URL
const BASE_URL_CART = "http://api-gateway.camion-app.com";
export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  GET_USERS: `${BASE_URL}/users`,
  CAREGROES: `${BASE_URL}/buckydrop/categories`,
  PRODUCT: `${BASE_URL}/api/products`,
  PRODUCTDDETAILS: `${BASE_URL}/api/products`,
  GET_CART: `${BASE_URL_CART}/cart/get`,
  ADD_TO_CART: `${BASE_URL_CART}/cart/add`,
  STORY: `${BASE_URL_STORY}/stories/active`,
  API_TOKEN:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NGY0NDVkZS04OTIzLTRiN2MtOGY4NC01ZTBhZWQ4ODI5ZjQiLCJlbWFpbCI6IkhhemVtQGdhbWlsLmNvbSIsInBob25lIjoiKzIwMTE0NDQxMzYxMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU0MzkwMjAzLCJleHAiOjE3NTQ5OTUwMDN9.EvryhSDfIRz03XC4mJhEhZk3cO-csEYNOdQFvGCQ9N4",
};
