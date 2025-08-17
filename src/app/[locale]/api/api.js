// src/api/api.js

const BASE_URL = "https://buckydrop.camion-app.com"; // your base URL
const BASE_URL_STORY = "https://stories.camion-app.com"; // your base URL
const BASE_URL_CART = "https://api-gateway.camion-app.com";
const BASE_URL_AUTH = "https://api-gateway.camion-app.com";
export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL_AUTH}/users/auth/login`,
  REGISTER: `${BASE_URL_AUTH}/users/auth/register`,
  VERIFY: `${BASE_URL_AUTH}/users/auth/verify`,
  NOTOCTOCKEN: `${BASE_URL_AUTH}/users/notifications/token`,
  GET_USERS: `${BASE_URL_AUTH}/users`,
  CAREGROES: `${BASE_URL}/api/categories`,
  PRODUCT: `${BASE_URL}/api/products`,
  PRODUCTDDETAILS: `${BASE_URL}/api/products`,
  GET_CART: `${BASE_URL_CART}/cart/get`,
  ADD_TO_CART: `${BASE_URL_CART}/cart/add`,
  UPDATE_CART: `${BASE_URL_CART}/cart/update`,
  REMOVE_TO_CART: `${BASE_URL_CART}/cart/remove`,
  CHECKOUT: `${BASE_URL_CART}/checkout/complete`,
  STORY: `${BASE_URL_STORY}/stories/active`,
  SLIDER: `${BASE_URL_STORY}/sliders`,
  OFFERS: `${BASE_URL_STORY}/offers`,
  REVIEWS: `${BASE_URL}/api/products/reviews`,
  REQUEST: `${BASE_URL_AUTH}/affiliates/request`,
  REQUESTSTATUS: `${BASE_URL_AUTH}/affiliates/me/status`,
  COUPON: `${BASE_URL_AUTH}/affiliates/coupon/me`,
  NEWCOUPON: `${BASE_URL_AUTH}/affiliates/coupon`,
  NOTOC: `${BASE_URL_AUTH}/users/notifications/me`,
  API_TOKEN:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NGY0NDVkZS04OTIzLTRiN2MtOGY4NC01ZTBhZWQ4ODI5ZjQiLCJlbWFpbCI6IkhhemVtQGdhbWlsLmNvbSIsInBob25lIjoiKzIwMTE0NDQxMzYxMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU0MzkwMjAzLCJleHAiOjE3NTQ5OTUwMDN9.EvryhSDfIRz03XC4mJhEhZk3cO-csEYNOdQFvGCQ9N4",
};
