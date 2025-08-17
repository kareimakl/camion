// AddressDetails.jsx
"use client";
import { useEffect, useState } from "react";

export default function AddressDetails({ addressData, setAddressData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempStreet, setTempStreet] = useState("");
  const [tempCity, setTempCity] = useState("");
  const [tempState, setTempState] = useState("");
  const latitude = 30.05325;
  const longitude = 31.33996;

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();

        // تقسيم العنوان إلى شارع، مدينة، محافظة، بلد
        const address = data.address || {};
        const street = address.road || address.pedestrian || address.house_number || "";
        const city = address.city || address.town || address.village || "";
        const state = address.state || "";
        const country = address.country || "";

        setTempStreet(street);
        setTempCity(city);
        setTempState(state);

        // تعيين القيم فقط لو مش موجودة
        setAddressData((prev) => ({
          ...prev,
          address_1: street,
          city: city,
          state: state,
          country: country,
        }));
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    fetchAddress();
  }, [latitude, longitude, setAddressData]);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    setAddressData((prev) => ({
      ...prev,
      address_1: tempStreet,
      city: tempCity,
      state: tempState,
    }));
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-700">Address Details</h2>
        {!isEditing ? (
          <span
            className="text-[#B92123] text-sm cursor-pointer"
            onClick={handleEditClick}
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
      </div>

      {isEditing ? (
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
            placeholder="State"
            className="border rounded-lg w-full p-2 text-gray-700"
            value={tempState}
            onChange={(e) => setTempState(e.target.value)}
          />
        </div>
      ) : (
        <p className="text-gray-600 text-sm">
          {addressData.address_1}, {addressData.city}, {addressData.state}, {addressData.country}
        </p>
      )}
    </div>
  );
}
