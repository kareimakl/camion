"use client";

import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import ReCAPTCHA from "react-google-recaptcha";
const countries = [
  { code: "EG", name: "مصر", dialCode: "+20", flag: "🇪🇬" },
  { code: "SA", name: "السعودية", dialCode: "+966", flag: "🇸🇦" },
  { code: "AE", name: "الإمارات", dialCode: "+971", flag: "🇦🇪" },
  { code: "QA", name: "قطر", dialCode: "+974", flag: "🇶🇦" },
  { code: "KW", name: "الكويت", dialCode: "+965", flag: "🇰🇼" },
  { code: "OM", name: "عمان", dialCode: "+968", flag: "🇴🇲" },
  { code: "BH", name: "البحرين", dialCode: "+973", flag: "🇧🇭" },
  { code: "JO", name: "الأردن", dialCode: "+962", flag: "🇯🇴" },
  { code: "IQ", name: "العراق", dialCode: "+964", flag: "🇮🇶" },
  { code: "LB", name: "لبنان", dialCode: "+961", flag: "🇱🇧" },
  { code: "SY", name: "سوريا", dialCode: "+963", flag: "🇸🇾" },
  { code: "YE", name: "اليمن", dialCode: "+967", flag: "🇾🇪" },
  { code: "SD", name: "السودان", dialCode: "+249", flag: "🇸🇩" },
  { code: "MA", name: "المغرب", dialCode: "+212", flag: "🇲🇦" },
  { code: "DZ", name: "الجزائر", dialCode: "+213", flag: "🇩🇿" },
  { code: "TN", name: "تونس", dialCode: "+216", flag: "🇹🇳" },
  { code: "LY", name: "ليبيا", dialCode: "+218", flag: "🇱🇾" },
  { code: "FR", name: "فرنسا", dialCode: "+33", flag: "🇫🇷" },
  { code: "US", name: "الولايات المتحدة", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "بريطانيا", dialCode: "+44", flag: "🇬🇧" },
  { code: "DE", name: "ألمانيا", dialCode: "+49", flag: "🇩🇪" },
  { code: "TR", name: "تركيا", dialCode: "+90", flag: "🇹🇷" },
  { code: "IN", name: "الهند", dialCode: "+91", flag: "🇮🇳" },
  { code: "PK", name: "باكستان", dialCode: "+92", flag: "🇵🇰" },
  { code: "CN", name: "الصين", dialCode: "+86", flag: "🇨🇳" },
  { code: "CA", name: "كندا", dialCode: "+1", flag: "🇨🇦" },
  { code: "RU", name: "روسيا", dialCode: "+7", flag: "🇷🇺" },
  { code: "ES", name: "إسبانيا", dialCode: "+34", flag: "🇪🇸" },
  { code: "IT", name: "إيطاليا", dialCode: "+39", flag: "🇮🇹" },
  { code: "AU", name: "أستراليا", dialCode: "+61", flag: "🇦🇺" },
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
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("CAPTCHA value:", value);
  };
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
    e.preventDefault();
    if (!captchaValue) {
      alert("من فضلك أكّد أنك لست روبوتاً");
      return;
    }

    // إرسال البيانات مع قيمة captcha
    console.log("Form submitted with CAPTCHA:", captchaValue);
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] flex flex-col items-center justify-center p-4">
      <div className="rounded-lg max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Side Text Section (Badge) */}
        <div className="flex flex-col items-start justify-start p-8 bg-[#f5f9ff] text-right">
          <p className="text-sm font-bold mb-10  text-black">
            احجز استشارتك...
          </p>
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
            <div className="flex  space-x-2">
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

              <div className="flex w-full items-center border border-gray-300 rounded p-2">
                <input
                  type="tel"
                  className="w-full outline-none text-right"
                  placeholder="رقم الهاتف بدون كود الدولة"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="mr-2">{selectedCountry.dialCode}</span>
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

            <div className="">
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY" // استبدله بمفتاحك
                onChange={handleCaptchaChange}
              />
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
