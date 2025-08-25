// hooks/useNotifications.js
import { useEffect, useState } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "@/lib/firebase";
import Cookies from "js-cookie";

export const useNotifications = () => {
  const [fcmToken, setFcmToken] = useState(null);
  const [message, setMessage] = useState(null);
  const [messaging, setMessaging] = useState(null);

  // login
  const authToken = Cookies.get("token");

  const requestPermission = async () => {
    if (!messaging) return;

    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        console.warn("Permission not granted for Notification");
        return;
      }

      // FCM Token
      const registration = await navigator.serviceWorker.ready;
      const currentToken = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
        serviceWorkerRegistration: registration,
      });

      if (currentToken) {
        setFcmToken(currentToken);
        Cookies.set("fcm_token", currentToken);

        if (authToken) {
          await fetch(
            "https://api-gateway.camion-app.com/users/notifications/token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
              },
              body: JSON.stringify({ token: currentToken }),
            }
          );
        } else {
          console.warn("User not authenticated, cannot save FCM token");
        }
      } else {
        console.log("No registration token available.");
      }
    } catch (err) {
      console.error("An error occurred while retrieving token. ", err);
    }
  };

useEffect(() => {
  if (
    typeof window !== "undefined" &&
    "serviceWorker" in navigator &&
    "PushManager" in window
  ) {
    try {
      const msg = getMessaging(app);
      setMessaging(msg);

      const unsubscribe = onMessage(msg, (payload) => {
        console.log("Message received. ", payload);
        setMessage(payload);
      });
      return () => unsubscribe();
    } catch (err) {
      console.error("Error initializing messaging:", err);
    }
  } else {
    console.warn("This browser does not support Firebase Cloud Messaging.");
  }
}, []);


  return { fcmToken, message, requestPermission };
};
