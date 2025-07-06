"use client";

import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const countries = [
  { code: "EG", name: "مصر", dialCode: "+20", flag: "🇪🇬" },
  { code: "SA", name: "السعودية", dialCode: "+966", flag: "🇸🇦" },
  { code: "AE", name: "الإمارات", dialCode: "+971", flag: "🇦🇪" },
];

export default function ContactPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    notes: "",
  });

  const handleValidation = () => {
    const fullNumber = selectedCountry.dialCode + phone;
    const parsed = parsePhoneNumberFromString(fullNumber);
    if (parsed?.isValid()) {
      alert(`✅ رقم صحيح: ${parsed.formatInternational()}`);
    } else {
      alert("❌ رقم غير صالح");
    }
  };

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    handleValidation();
    console.log({ ...formData, phone: selectedCountry.dialCode + phone });
    // هنا ممكن تبعت البيانات للباك إند
  };

  return (
    <div className="min-h-screen bg-[#f1f6ff] flex flex-col items-center justify-center p-4">
      <div className="rounded-lg max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col justify-center p-8 bg-[#e9f1ff] text-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            كيف يمكننا <span className="text-blue-700">مساعدتك</span> في تاج
            هاوس؟
          </h2>
          <p className="text-gray-700 mt-4 leading-loose">
            في <span className="font-bold">تاج هاوس</span>، نحن أكثر من مجرد
            مزود خدمات، نحن
            <span className="font-bold"> شريكك الرقمي</span> الذي يساعدك على
            تحقيق أهدافك وتنمية أعمالك من خلال حلول مبتكرة وتقنيات حديثة.
          </p>
        </div>
        {/* Form Section */}
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* الاسم */}
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-right"
            />

            {/* الهاتف */}
            <div className="flex flex-col space-y-2">
              <select
                value={selectedCountry.code}
                onChange={(e) =>
                  setSelectedCountry(
                    countries.find((c) => c.code === e.target.value) ||
                      countries[0]
                  )
                }
                className="border border-gray-300 rounded p-2 text-right"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.name} ({country.dialCode})
                  </option>
                ))}
              </select>

              <div className="flex items-center border border-gray-300 rounded p-2">
                <span className="mr-2">{selectedCountry.dialCode}</span>
                <input
                  type="tel"
                  className="w-full outline-none text-right"
                  placeholder="رقم الهاتف بدون كود الدولة"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-right"
            />

            {/* الخدمة المطلوبة */}
            <input
              type="text"
              name="service"
              placeholder="الخدمة المطلوبة"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-right"
            />

            {/* ملاحظات */}
            <textarea
              name="notes"
              placeholder="ملاحظات"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-right h-24 resize-none"
            />

            {/* reCAPTCHA placeholder */}
            <div className="mt-4">
              <div className="bg-gray-100 p-4 text-center rounded border">
                [ reCAPTCHA placeholder ]
              </div>
            </div>

            {/* زر الإرسال */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 mt-4 rounded hover:bg-blue-800 transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
