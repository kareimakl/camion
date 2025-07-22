"use client";

import { FaPhone, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-bgIcon text-white text-sm">
      {/* ✅ Top Links Bar */}
      <div className="hidden md:flex bg-[#0d0625] mx-auto px-4 py-2 border-b border-[#4a445c]  justify-between items-center">
        <div className="flex gap-4">
          <a href="#">About Us</a>
          <a href="#">Our Partners</a>
          <a href="#">Work With Us</a>
        </div>
        <div className="flex gap-4">
          <a href="#">Track Your Order</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
        </div>
      </div>

      {/* ✅ Logo, Search & Contact */}
      <div className="bg-[#0d0625] mx-auto px-4 py-1 flex flex-col lg:flex-row justify-between items-center gap-4 border-b border-[#4a445c]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/icon0.svg"
            alt="Camion"
            width={100}
            height={100}
          />
        </div>

        {/* Search */}
        <div className="w-full max-w-xl bg-[#fff] rounded-full relative">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
          />
          <button className="absolute  bg-[#e14a5c] right-2 top-1/2 -translate-y-1/2 bg- p-2 rounded-full text-white">
            <FiSearch />
          </button>
        </div>

        {/* Phone & Cart */}
        <div className=" md:flex hidden items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FaPhone />
            <div>
              <div>Hotline 24/7</div>
              <div className="text-xs">(505) 285-5028</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaShoppingBag />
            <div className="text-right">
              <div>104.94 ر.ق</div>
              <div className="text-xs">2 items</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Navigation */}
      <nav className="bg-[#e14a5c] md:flex hidden  text-white py-2 ">
        <div className="  px-4 flex  w-full justify-between items-center text-sm gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <NavItem title="Electronics" />
            <NavItem title="Appliances" />
            <NavItem title="Home & Garden" />
            <NavItem title="Baby & Kids" />
            <NavItem title="Beauty & Care" />
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1">
              <FaHeart /> Wishlist
            </a>
            <a href="#" className="flex items-center gap-1">
              <FaUser /> Login / Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ title }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-iconHover transition ">
      <span>{title}</span>
      <MdKeyboardArrowDown />
    </div>
  );
}
