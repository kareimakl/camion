"use client";

import { useState, useEffect } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { GlobalLanguage } from "../../GolablLanguage";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const Nav = () => {
  const t = useTranslations("header");
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const titles = t.raw("serviceOptions");
    if (titles?.length) {
      setOptions(
        titles.map((title, index) => ({
          id: index + 1,
          title,
        }))
      );
    }
    setIsLoading(false);
  }, [t]);

  return (
    <header className="w-full  md:pt-5 bg-[#f5f9ff] relative   bg-cover bg-top bg-no-repeat ">
      <div className="md:max-w-[1200px] z-50 relative   w-full rounded-sm md:h-[90px] h-[50px] p-4 bg-white   transition-all duration-300 mx-auto px-4 py-4 flex justify-between items-center">
        {/* CTA + Search */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden cursor-pointer md:block bg-[#0000ff] text-white px-5 py-3 rounded-sm hover:bg-[#8700FF] transition text-xs  font[600] "
          >
            {t("connectWithUs")}
          </Link>
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
            {t("home")}
          </Link>

          {/* Dropdown */}
          <li className="relative list-none group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#8700FF] transition">
              <Link href="/services" className="text-[15px] font-[500]">
                {t("services")}
              </Link>
              <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" />
            </div>
            <ul
              className={`
      absolute top-full right-0 mt-2 w-64 bg-white shadow-xl rounded-xl z-50 text-start py-2 overflow-hidden
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
            {t("aboutUS")}
          </Link>
          <Link href="/client" className="hover:text-[#8700FF] transition">
            {t("client")}
          </Link>
          <Link href="/projects" className="hover:text-[#8700FF] transition">
            {t("finalwork")}
          </Link>
          <Link href="/blogs" className="hover:text-[#8700FF] transition">
            {t("blogs")}
          </Link>
          <Link href="/contact" className="hover:text-[#8700FF] transition">
            {t("contact")}
          </Link>
          <GlobalLanguage />
        </nav>
        {/* Logo */}
        <div className="md:w-40 w-26 relative items-start flex justify-start  ">
          <Link href="/" className=" absolute w-full h-full"></Link>

          <img
            src="/assets/logos/logo-tajhouse.png"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <GlobalLanguage className=" md:hidden " />
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
        <div className="fixed top-0 right-0 w-72 h-full bg-[#eff4fe] shadow-xl z-50 transition-transform duration-300 p-5 text-right flex flex-col">
          <div className="flex relative justify-between items-center mb-6">
            <Link href="/" className=" absolute w-full h-full"></Link>

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
              <Link href="/">{t("home")}</Link>
            </li>

            <li>
              <div
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-start cursor-pointer"
              >
                <Link
                  href="/services"
                  className="text-[15px] text-start font-[500]"
                >
                  {t("services")}
                </Link>
                <FaChevronDown
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {mobileServicesOpen && (
                <ul className="mt-2 text-start space-y-2 pr-3 text-sm">
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
              <Link href="/about">{t("aboutUS")}</Link>
            </li>
            <li>
              <Link href="/client">{t("client")}</Link>
            </li>
            <li>
              <Link href="/projects">{t("finalwork")}</Link>
            </li>
            <li>
              <Link href="/blogs">{t("blogs")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="w-full p-4 bg-[#0000ff] text-white py-2 rounded-full mt-4 hover:bg-[#8700FF] transition shadow-sm text-sm"
              >
                {t("connectWithUs")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
