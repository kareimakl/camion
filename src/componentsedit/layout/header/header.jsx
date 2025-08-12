"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ProductSearch from "@/componentsedit/ProductSearch";
import Nav from "@/componentsedit/layout/nav/nav";
import { useCart } from "@/componentsedit/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header className="bg-bgIcon text-white text-sm">
      <div className="container mx-auto md:px-4 flex justify-between items-center gap-4">
        <div className="flex items-center gap-6 text-sm">
          {/* <Link
            href="/notification"
            className="flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/assets/icons/BellRinging.svg"
              alt="Notification"
              width={24}
              height={24}
            />
          </Link> */}

          <Link
            href="/cart"
            className="relative flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/assets/icons/ShoppingCart.svg"
              alt="Cart"
              width={24}
              height={24}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
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

        <Link
          href="/myaccount"
          className="flex cursor-pointer items-center gap-2"
        >
          <Image
            src="/assets/icons/frame.svg"
            alt="Account"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <div className="border-b border-[#B92123]"></div>
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
