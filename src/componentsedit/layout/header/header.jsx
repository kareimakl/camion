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
          <Link
            href="/notification"
            className="flex  cursor-pointer  items-center gap-2"
          >
            <Image
              src="/assets/icons/BellRinging.svg"
              alt="Camion"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/cart" className="flex cursor-pointer items-center gap-2">
            <Image
              src="/assets/icons/ShoppingCart.svg"
              alt="Camion"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {/* Logo */}
        <Link href="/" className="flex -ms-[20px] items-center gap-2">
          <Image
            className="md:w-18 w-12"
            src="/assets/icons/icon0.svg"
            alt="Camion"
            width={70}
            height={70}
          />
        </Link>
        <Link href="/myaccount" className="flex cursor-pointer  items-center gap-2">
          <Image
            src="/assets/icons/frame.svg"
            alt="Camion"
            width={24}
            height={24}
          />
        </Link>
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
            <button className="absolute cursor-pointer   bg-[#e14a5c] right-2 top-1/2 -translate-y-1/2 bg- p-2 rounded-full text-white">
              <FiSearch />
            </button>
            <button className="absolute cursor-pointer   right-12 top-1/2 -translate-y-1/2 bg- p-2 rounded-full text-white">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 8.00586H16C15.59 8.00586 15.25 7.66586 15.25 7.25586C15.25 6.84586 15.59 6.50586 16 6.50586H22C22.41 6.50586 22.75 6.84586 22.75 7.25586C22.75 7.66586 22.41 8.00586 22 8.00586Z"
                  fill="#B92123"
                />
                <path
                  d="M6 8.00586H2C1.59 8.00586 1.25 7.66586 1.25 7.25586C1.25 6.84586 1.59 6.50586 2 6.50586H6C6.41 6.50586 6.75 6.84586 6.75 7.25586C6.75 7.66586 6.41 8.00586 6 8.00586Z"
                  fill="#B92123"
                />
                <path
                  d="M10 11.5059C7.66 11.5059 5.75 9.59586 5.75 7.25586C5.75 4.91586 7.66 3.00586 10 3.00586C12.34 3.00586 14.25 4.91586 14.25 7.25586C14.25 9.59586 12.34 11.5059 10 11.5059ZM10 4.50586C8.48 4.50586 7.25 5.73586 7.25 7.25586C7.25 8.77586 8.48 10.0059 10 10.0059C11.52 10.0059 12.75 8.77586 12.75 7.25586C12.75 5.73586 11.52 4.50586 10 4.50586Z"
                  fill="#B92123"
                />
                <path
                  d="M22 19.0059H18C17.59 19.0059 17.25 18.6659 17.25 18.2559C17.25 17.8459 17.59 17.5059 18 17.5059H22C22.41 17.5059 22.75 17.8459 22.75 18.2559C22.75 18.6659 22.41 19.0059 22 19.0059Z"
                  fill="#B92123"
                />
                <path
                  d="M8 19.0059H2C1.59 19.0059 1.25 18.6659 1.25 18.2559C1.25 17.8459 1.59 17.5059 2 17.5059H8C8.41 17.5059 8.75 17.8459 8.75 18.2559C8.75 18.6659 8.41 19.0059 8 19.0059Z"
                  fill="#B92123"
                />
                <path
                  d="M14 22.5059C11.66 22.5059 9.75 20.5959 9.75 18.2559C9.75 15.9159 11.66 14.0059 14 14.0059C16.34 14.0059 18.25 15.9159 18.25 18.2559C18.25 20.5959 16.34 22.5059 14 22.5059ZM14 15.5059C12.48 15.5059 11.25 16.7359 11.25 18.2559C11.25 19.7759 12.48 21.0059 14 21.0059C15.52 21.0059 16.75 19.7759 16.75 18.2559C16.75 16.7359 15.52 15.5059 14 15.5059Z"
                  fill="#B92123"
                />
              </svg>
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
