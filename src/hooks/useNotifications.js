// hooks/useNotifications.js
import { useEffect, useState } from "react";
import { messaging } from "@/lib/firebase";
import { getToken, onMessage } from "firebase/messaging";
import Cookies from "js-cookie";

export const useNotifications = () => {
  const [fcmToken, setFcmToken] = useState(null);
  const [message, setMessage] = useState(null);

  // login
  const authToken = Cookies.get("token");

  const requestPermission = async () => {
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
    if (messaging) {
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Message received. ", payload);
        setMessage(payload);
      });
      return () => unsubscribe();
    }
  }, []);

  return { fcmToken, message, requestPermission };
};
