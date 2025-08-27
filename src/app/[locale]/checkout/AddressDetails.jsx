// AddressDetails.jsx
"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MapPin } from "lucide-react";
import { toast } from "sonner"; // ✅ مكتبة التنبيهات

export default function AddressDetails({ addressData, setAddressData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempStreet, setTempStreet] = useState("");
  const [tempCity, setTempCity] = useState("");
  const [tempState, setTempState] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetchingLocation, setFetchingLocation] = useState(false);

  // 🔹 دالة تجيب اللوكيشن الفعلي
  const fetchLiveLocation = async () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    setFetchingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          const address = data.address || {};
          const street =
            address.road || address.pedestrian || address.house_number || "";
          const city = address.city || address.town || address.village || "";
          const state = address.state || "";
          const country = address.country || "EG";

          setTempStreet(street);
          setTempCity(city);
          setTempState(state);

          setAddressData((prev) => ({
            ...prev,
            address_1: street,
            city,
            state,
            country,
          }));
        } catch (error) {
          console.error("Error fetching address:", error);
          toast.error("❌ فشل الحصول على الموقع الحالي");
        } finally {
          setLoading(false);
          setFetchingLocation(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        toast.error("⚠️ لم نستطع تحديد موقعك");
        setLoading(false);
        setFetchingLocation(false);
      }
    );
  };

  // 🔹 أول ما يفتح العميل الصفحة نجيب العنوان من الباك إند
  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        const token = Cookies.get("token");
        const res = await fetch(
          "https://api-gateway.camion-app.com/users/address/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();

          if (data?.address_1) {
            setAddressData(data);
            setTempStreet(data.address_1);
            setTempCity(data.city);
            setTempState(data.state);
            setLoading(false);
          } else {
            fetchLiveLocation();
          }
        } else {
          fetchLiveLocation();
        }
      } catch (err) {
        console.error("Error fetching user address:", err);
        fetchLiveLocation();
      }
    };

    fetchUserAddress();
  }, [setAddressData]);

  // 🔹 الحفظ والتحديث
  const handleSaveClick = async () => {
    // ✅ تحقق من أن state حرفين
    if (!/^[A-Za-z]{2}$/.test(tempState)) {
      toast.error("⚠️ State يجب أن يكون حرفين فقط (مثال: CA, NY)");
      return;
    }

    const email = Cookies.get("email");
    const phone = Cookies.get("phone");
    const fullName = Cookies.get("fullName") || "";
    const [first_name, ...rest] = fullName.split(" ");
    const last_name = rest.join(" ") || "";

    const updatedData = {
      first_name,
      last_name,
      email,
      phone,
      address_1: tempStreet,
      address_2: addressData.address_2 || "",
      city: tempCity,
      state: tempState.toUpperCase(),
      postcode: addressData.postcode || "10001",
      country: addressData.country || "EG",
      shipping_address: {
        first_name,
        last_name,
        email,
        phone,
        address_1: tempStreet,
        address_2: addressData.address_2 || "",
        city: tempCity,
        state: tempState.toUpperCase(),
        postcode: addressData.postcode || "10001",
        country: addressData.country || "EG",
      },
      shipping_option: {
        method_id: "flat_rate",
        method_title: "Flat rate",
        cost: "100",
      },
    };

    setAddressData(updatedData);
    setIsEditing(false);

    try {
      const token = Cookies.get("token");
      const res = await fetch(
        "https://api-gateway.camion-app.com/users/address/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!res.ok) throw new Error("Failed to update address");

      await res.json();
      toast.success("✅ تم تحديث العنوان بنجاح");
    } catch (error) {
      console.error("❌ Error saving address:", error);
      toast.error("❌ فشل تحديث العنوان");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-700">Address Details</h2>
        <div className="flex items-center gap-3">
          {!isEditing ? (
            <span
              className="text-[#B92123] text-sm cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </span>
          ) : (
            <button
              className="text-[#B92123] text-sm font-semibold"
              onClick={handleSaveClick}
            >
              Save
            </button>
          )}

          <button
            onClick={fetchLiveLocation}
            className="flex items-center cursor-pointer gap-1 text-xs text-blue-600 hover:text-blue-800"
            disabled={fetchingLocation}
          >
            <MapPin size={14} />
            {fetchingLocation ? "Fetching..." : "Use Current Location"}
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading address...</p>
      ) : isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Street"
            className="border rounded-lg w-full p-2 text-gray-700"
            value={tempStreet}
            onChange={(e) => setTempStreet(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            className="border rounded-lg w-full p-2 text-gray-700"
            value={tempCity}
            onChange={(e) => setTempCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="State (2 letters)"
            className="border rounded-lg w-full p-2 text-gray-700"
            value={tempState}
            onChange={(e) => setTempState(e.target.value.toUpperCase())}
          />
        </div>
      ) : (
        <p className="text-gray-600 text-sm">
          {addressData.address_1}, {addressData.city}, {addressData.state},{" "}
          {/* {addressData.country} */}
        </p>
      )}
    </div>
  );
}
