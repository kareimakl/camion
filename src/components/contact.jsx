"use client";

import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("HomePage.contact");

  const countries = t.raw("countries");

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
  };

  const handleValidation = () => {
    const fullNumber = selectedCountry.dialCode + phone;
    const parsed = parsePhoneNumberFromString(fullNumber);
    if (parsed?.isValid()) {
      alert(`✅ ${t("valid")} ${parsed.formatInternational()}`);
    } else {
      alert(`❌ ${t("invalid")}`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    if (!captchaValue) {
      alert(t("captchaWarning"));
      return;
    }
    console.log("Form submitted with CAPTCHA:", captchaValue);
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] flex flex-col items-center justify-center p-4">
      <div className="rounded-lg max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Side Text Section */}
        <div className="flex flex-col items-start justify-start p-8 bg-[#f5f9ff] text-start">
          <p className="text-sm font-bold mb-10  text-black">{t("book")}</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t("title")} <span className="text-blue-700">{t("title2")}</span>
          </h2>
          <p className="text-gray-700 mt-4 text-start leading-loose">{t("subtitle")}</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form className="space-y-4 text-start" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("placeholders.name")}
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start"
            />

            {/* الهاتف */}
            <div className="flex space-x-2">
              <select
                value={selectedCountry.code}
                onChange={(e) =>
                  setSelectedCountry(
                    countries.find((c) => c.code === e.target.value) ||
                      countries[0]
                  )
                }
                className="border border-gray-300 rounded p-2 text-start"
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
                  className="w-full outline-none text-start"
                  placeholder={t("placeholders.phone")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="mr-2">{selectedCountry.dialCode}</span>
              </div>
            </div>

            <input
              type="email"
              name="email"
              placeholder={t("placeholders.email")}
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start"
            />

            <input
              type="text"
              name="service"
              placeholder={t("placeholders.service")}
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start"
            />

            <textarea
              name="notes"
              placeholder={t("placeholders.notes")}
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-start h-24 resize-none"
            />

            <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleCaptchaChange} />

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 mt-4 rounded hover:bg-blue-800 transition"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
