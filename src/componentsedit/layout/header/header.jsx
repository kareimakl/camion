"use client";
import { FaPhone, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-bgIcon text-white text-sm">
      {/* ✅ Logo, Search & Contact */}
      <div className="container   mx-auto md:px-4  flex   justify-between items-center gap-4">
        <div className=" flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/BellRinging.svg"
              alt="Camion"
              width={24}
              height={24}
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/ShoppingCart.svg"
              alt="Camion"
              width={24}
              height={24}
            />
          </div>
        </div>
        {/* Logo */}
        <Link href="/" className="flex  items-center gap-2">
          <Image
            className="md:w-18 w-16"
            src="/assets/icons/icon0.svg"
            alt="Camion"
            width={70}
            height={70}
          />
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/frame.svg"
            alt="Camion"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className=" border-b border-[#B92123]"></div>
      <nav className=" container md:flex hidden  text-[#000] py-2 ">
        <div className="  px-4 flex  w-full justify-between items-center text-sm gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Link href={`/`} className="flex items-center gap-1">
              <NavItem title="Home" />
            </Link>
            <Link href={`/shop`} className="flex items-center gap-1">
              <NavItem title="Shop" />
            </Link>
            <Link href={`/categories`} className="flex items-center gap-1">
              <NavItem title="Categories" />
            </Link>
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
          <div className="flex items-center gap-6">
            <div className="flex flex-wrap gap-4 items-center">
              <NavItem title="Electronics" />
              <NavItem title="Appliances" />
              <NavItem title="Home & Garden" />
            </div>
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
      {/* <MdKeyboardArrowDown /> */}
    </div>
  );
}
