// hooks/useNotifications.js
import { useEffect, useState } from "react";
import { messaging } from "@/lib/firebase";
import { getToken, onMessage } from "firebase/messaging";
import Cookies from "js-cookie";

export const useNotifications = () => {
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState(null);
  const tokens = Cookies.get("token");
  const requestPermission = async () => {
    try {
      const currentToken = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });

      if (currentToken) {
        setToken(currentToken);

        await fetch(
          "https://api-gateway.camion-app.com/users/notifications/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokens}`,
            },
            body: JSON.stringify({ token: currentToken }),
          }
        );
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

  return { token, message, requestPermission };
};
