"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOptions([
        { id: 1, title: "إنشاء وتطوير المواقع الإلكترونية" },
        { id: 2, title: "إنشاء وتطوير المتاجر الإلكترونية" },
        { id: 3, title: "تصميم وتطوير تطبيقات الهاتف" },
        { id: 4, title: "استضافة المواقع الإلكترونية" },
        { id: 5, title: "برمجة مواقع الويب" },
        { id: 6, title: "أنظمة CRM" },
        { id: 7, title: "أنظمة ERP" },
        { id: 8, title: "أنظمة Odoo" },
        { id: 9, title: "الدعم الفني" },
      ]);
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <header className="w-full bg-[url('/assets/images/bg.avif')] md:min-h-[300px] md:pt-5   bg-cover bg-top bg-no-repeat z-50">
      <div className="md:max-w-[1200px]  w-full rounded-sm md:h-[105px] h-[50px] p-4 bg-white  z-[99] shadow-[0px_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 mx-auto px-4 py-4 flex justify-between items-center">
        {/* CTA + Search */}
        <div className="flex items-center gap-3">
          <button className="hidden cursor-pointer md:block bg-[#0000ff] text-white px-5 py-3 rounded-sm hover:bg-[#8700FF] transition text-xs  font[600] shadow-sm">
            طلب عرض سعر
          </button>
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center text-[15px] font-medium text-gray-800">
          <Link href="/" className="hover:text-[#8700FF] transition">
            الرئيسية
          </Link>

          {/* Dropdown */}
          <li className="relative list-none group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#8700FF] transition">
              <Link href="/services" className="text-[15px] font-[500]">
                خدماتنا
              </Link>
              <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" />
            </div>

            <ul
              className={`
      absolute top-full right-0 mt-2 w-64 bg-white shadow-xl rounded-xl z-50 text-right py-2 overflow-hidden
      opacity-0 group-hover:opacity-100
      invisible group-hover:visible
      transition-all duration-300
    `}
            >
              {isLoading ? (
                <div className="p-4 space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <li
                      key={i}
                      className="animate-pulse bg-gray-300 w-52 h-6 rounded-md mx-auto"
                    />
                  ))}
                </div>
              ) : (
                options.map((option) => (
                  <li key={option.id}>
                    <Link
                      href={`/services/${option.id}-${encodeURIComponent(
                        option.title.replace(/\s+/g, "-")
                      )}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#8700FF] transition"
                    >
                      {option.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </li>

          <Link href="/about" className="hover:text-[#8700FF] transition">
            من نحن
          </Link>
          <Link href="/client" className="hover:text-[#8700FF] transition">
            عملائنا
          </Link>
          <Link href="/projects" className="hover:text-[#8700FF] transition">
            أعمالنا
          </Link>
          <Link href="/blogs" className="hover:text-[#8700FF] transition">
            المدونة
          </Link>
          <Link href="/contact" className="hover:text-[#8700FF] transition">
            تواصل معنا
          </Link>
        </nav>
        {/* Logo */}
        <div className="md:w-40 w-26 items-start flex justify-start  ">
          <img
            src="/assets/logos/logo-tajhouse.png"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 transition-transform duration-300 p-5 text-right flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <img
              src="/assets/logos/logo-tajhouse.png"
              alt="Logo"
              className="w-24 h-auto object-contain"
            />
            <FaTimes
              className="text-xl cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>

          <ul className="space-y-4 text-gray-800 font-medium">
            <li>
              <Link href="/">الرئيسية</Link>
            </li>

            <li>
              <div
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between cursor-pointer"
              >
                <Link href="/services" className="text-[15px] font-[500]">
                  خدماتنا{" "}
                </Link>
                <FaChevronDown
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {mobileServicesOpen && (
                <ul className="mt-2 space-y-2 pr-3 text-sm">
                  {options.map((option) => (
                    <li key={option.id}>
                      <Link
                        href={`/services/${option.id}-${encodeURIComponent(
                          option.title.replace(/\s+/g, "-")
                        )}`}
                        className="block hover:text-[#8700FF] transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {option.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link href="/about">من نحن</Link>
            </li>
            <li>
              <Link href=""> عملائنا</Link>
            </li>
            <li>
              <Link href="/projects">أعمالنا</Link>
            </li>
            <li>
              <Link href="/blogs">المدونة</Link>
            </li>
            <li>
              <Link href="/contact">تواصل معنا</Link>
            </li>

            <li>
              <button className="w-full bg-[#0000ff] text-white py-2 rounded-full mt-4 hover:bg-[#8700FF] transition shadow-sm text-sm">
                طلب عرض سعر
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
