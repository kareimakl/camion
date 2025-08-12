"use client";
import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPlay, FaBookmark } from "react-icons/fa";
import { API_ENDPOINTS } from "../api/api";
import Cookies from "js-cookie";

export default function AccountPage() {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("token");

  const fetchCodes = async () => {
    if (!token) {
      Swal.fire(
        "خطأ",
        "لم يتم العثور على التوكن، يرجى تسجيل الدخول مجددًا",
        "error"
      );
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(API_ENDPOINTS.COUPON, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 403) {
        Swal.fire("رفض الوصول", "ليس لديك صلاحية للوصول للأكواد", "error");
        return;
      }

      const data = await res.json();
      if (!Array.isArray(data) && !data.code) {
        Swal.fire("خطأ", "لم يتم العثور على أكواد", "warning");
        setCodes([]);
        return;
      }

      setCodes(Array.isArray(data) ? data : [data]);
    } catch (error) {
      Swal.fire("خطأ", "تعذر جلب الأكواد من السيرفر", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  const showMyCodes = () => {
    if (loading) {
      Swal.fire("جارِ التحميل...", "", "info");
      return;
    }
    if (codes.length === 0) {
      Swal.fire("لا توجد أكواد مسجلة", "", "warning");
      return;
    }

    const codeList = codes
      .map(
        (c) => `
          <li style="margin-bottom:8px;">
            <strong>الكود:</strong> ${c.code} |
            <strong>الخصم:</strong> ${c.discountPercentage}%
          </li>`
      )
      .join("");

    Swal.fire({
      title: "أكوادي",
      html: `<ul style="list-style:none; padding:0; text-align:right;">${codeList}</ul>`,
      confirmButtonText: "إغلاق",
    });
  };

  const createCode = () => {
    Swal.fire({
      title: "إنشاء كود جديد",
      html: `
        <input id="newCode" class="swal2-input" placeholder="اكتب الكود" />
        <input id="discount" type="number" class="swal2-input" placeholder="نسبة الخصم (مثال: 10)" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "حفظ",
      preConfirm: () => {
        const newCode = document.getElementById("newCode").value.trim();
        const discount = document.getElementById("discount").value.trim();
        if (!newCode || !discount) {
          Swal.showValidationMessage("يرجى إدخال الكود ونسبة الخصم");
          return false;
        }
        return { newCode, discount };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!token) {
          Swal.fire("خطأ", "التوكن غير موجود، يرجى تسجيل الدخول", "error");
          return;
        }
        try {
          const res = await fetch(API_ENDPOINTS.NEWCOUPON, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code: result.value.newCode,
              discountPercentage: Number(result.value.discount),
            }),
          });

          if (res.ok) {
            Swal.fire("تم الحفظ", "تم إنشاء الكود بنجاح", "success");
            fetchCodes();
          } else {
            const errorData = await res.json();
            Swal.fire(
              "خطأ",
              errorData.message || "لم يتم إنشاء الكود",
              "error"
            );
          }
        } catch (error) {
          Swal.fire("خطأ", "حدث خطأ أثناء الاتصال بالسيرفر", "error");
        }
      }
    });
  };

  return (
    <main>
      <Header />
      <div className="min-h-screen flex flex-col items-center px-4 bg-gray-50">
        <div className="w-full max-w-md mt-8">
          <h1 className="text-center text-lg font-medium mb-4">حساب المسوق</h1>
          <div className="flex flex-col gap-4">
            <button
              onClick={showMyCodes}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-200"
            >
              <span className="text-gray-800">أكوادي</span>
              <FaPlay className="text-gray-500" />
            </button>
            <button
              onClick={createCode}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-200"
            >
              <span className="text-gray-800">إنشاء كود</span>
              <FaBookmark className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
