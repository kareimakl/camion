"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ProductSearch from "@/componentsedit/ProductSearch";
import Nav from "@/componentsedit/layout/nav/nav";
import { useCart } from "@/componentsedit/context/CartContext";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header(totalnotifs) {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bgIcon text-white text-sm relative">
      <div className="container mx-auto md:px-4 flex justify-between items-center gap-4 py-2">
        {/* Left side */}
        <div className="flex items-center gap-6 text-sm">
          {" "}
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#b92124] cursor-pointer flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <Link
            href="/cart"
            className="relative flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/assets/icons/ShoppingCart.svg"
              alt="Cart"
              unoptimized
              width={24}
              height={24}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            href="/notification"
            className="relative flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/assets/icons/BellRinging.svg"
              alt="Cart"
              width={24}
              unoptimized
              height={24}
            />
            {totalnotifs > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalnotifs}
              </span>
            )}
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="md:w-18 w-12"
            src="/assets/icons/icon0.svg"
            alt="Camion"
            width={70}
            unoptimized
            height={70}
          />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/myaccount"
            className="flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/assets/icons/frame.svg"
              alt="Account"
              width={24}
              height={24}
              unoptimized
            />
          </Link>
        </div>
      </div>

      <div className="border-b border-[#B92123]"></div>

      {/* Desktop Nav */}
      <nav className="container md:flex hidden text-[#000] py-2">
        <div className="px-4 flex w-full justify-between items-center text-sm gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Link href={`/`}>
              <NavItem title="Home" />
            </Link>
            <Link href={`/shop`}>
              <NavItem title="Shop" />
            </Link>
            <Link href={`/categories`}>
              <NavItem title="Categories" />
            </Link>
            <Link href={`/affiliates`}>
              <NavItem title="Become Affiliates" />
            </Link>
          </div>
          <ProductSearch />
          <div className="flex items-center gap-6">
            <Nav />
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f6f5f8]  text-black shadow-lg z-50">
          <div className="flex flex-col p-4 gap-4">
            <Link href={`/`} onClick={() => setMobileMenuOpen(false)}>
              <NavItem title="Home" />
            </Link>
            <Link href={`/shop`} onClick={() => setMobileMenuOpen(false)}>
              <NavItem title="Shop" />
            </Link>
            <Link href={`/categories`} onClick={() => setMobileMenuOpen(false)}>
              <NavItem title="Categories" />
            </Link>
            <Link href={`/affiliates`} onClick={() => setMobileMenuOpen(false)}>
              <NavItem title="Become Affiliates" />
            </Link>
            <ProductSearch />
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ title }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-iconHover transition">
      <span>{title}</span>
    </div>
  );
}
