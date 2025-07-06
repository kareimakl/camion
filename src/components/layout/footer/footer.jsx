"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <footer className="bg-[#f5f7fe] border-t border-[#DEDEDE] text-right text-gray-700 pt-12 pb-6 px-4 rtl">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-4">تاج هاوس</h4>
          <p className="text-2xl   text-gray-900 mb-2 font-syne">01000447398</p>
          <p className="text-sm text-gray-600 mb-4">info@tajhouse.com</p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/tajhouse2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/tajhouse2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/taj-house"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">فروعنا</h4>
          <ul className="space-y-2 text-sm leading-6">
            <li>9 مصطفى النحاس - مدينة نصر</li>
            <li>كايرو كومبلكس - شيراتون المطار</li>
            <li>مكتب 907 مبنى أبراج - دبي</li>
            <li>21442 حي التيسير - جدة</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">خدماتنا</h4>
          <ul className="space-y-2 text-sm leading-6">
            <li>تصميم وتطوير المواقع الإلكترونية</li>
            <li>تصميم وتطوير تطبيقات الهاتف</li>
            <li>إنشاء وتطوير المتاجر الإلكترونية</li>
            <li>برمجة مواقع الويب</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            نشرتنا الاخبارية
          </h4>
          <p className="text-sm mb-4">
            اشترك في نشرتنا الاخبارية ليصلك كل جديد...
          </p>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full px-4 py-2 rounded-md border border-gray-300 mb-3 text-sm"
          />
          <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 text-sm font-semibold">
            اشترك
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-[#DEDEDE] pt-4 text-center text-xs text-gray-500">
        Copyright © 2022 Made With Love, Taj House All Rights Reserved.
      </div>

      <a
        href="https://wa.me/201000447398"
        target="_blank"
        className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 text-sm transition-all duration-700 ${
          show ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="color-element"
            cx="19.4395"
            cy="19.4395"
            r="19.4395"
            fill="#49E670"
          ></circle>
          <path
            d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z"
            transform="translate(12.9597 12.9597)"
            fill="#FAFAFA"
          ></path>
          <path
            d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z"
            transform="translate(7.7758 7.77582)"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
          ></path>
        </svg>
        <span className="bg-white shadow-md  px-3 py-2  rounded-full">
          تواصل معنا
        </span>
      </a>
    </footer>
  );
}
