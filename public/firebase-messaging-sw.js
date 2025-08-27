// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAqmQwZNK2Azd8LBqwRJkgkuhRS8jnceYE",
  authDomain: "camionapp-4c0d7.firebaseapp.com",
  projectId: "camionapp-4c0d7",
  storageBucket: "camionapp-4c0d7.appspot.com",
  messagingSenderId: "1030414152198",
  appId: "1:1030414152198:web:cb2cd5194da572d61a8987",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message",
    payload
  );

  const notificationTitle = payload.notification?.title || "New Message";
  const notificationOptions = {
    body: payload.notification?.body,
    icon: "/favicon.ico",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
