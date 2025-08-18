// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAqmQwZNK2Azd8LBqwRJkgkuhRS8jnceYE",
  authDomain: "camionapp-4c0d7.firebaseapp.com",
  projectId: "camionapp-4c0d7",
  storageBucket: "camionapp-4c0d7.firebasestorage.app",
  messagingSenderId: "1030414152198",
  appId: "1:1030414152198:web:cb2cd5194da572d61a8987",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.ico",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
