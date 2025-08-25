import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/icon0.svg"
              alt="Logo"
              className="w-[60px] md:w-[80px]"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted platform for premium services and products. We are
            committed to quality and customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#B92123]">
                Home
              </Link>
            </li>{" "}
            <li>
              <Link href="/shop" className="hover:text-[#B92123]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#B92123]">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/affiliates" className="hover:text-[#B92123]">
                Become Affiliates
              </Link>
            </li>
    
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-[#B92123]">
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="/PoliciesCamionApp#return-refund"
                className="hover:text-[#B92123]"
              >
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#B92123]">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="/PoliciesCamionApp" className="hover:text-[#B92123]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF
                size={32}
                className="bg-blue-600 rounded-full p-2 text-white hover:scale-110 transition"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaXTwitter
                size={32}
                className="bg-black rounded-full p-2 text-white hover:scale-110 transition"
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram
                size={32}
                className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-2 text-white hover:scale-110 transition"
              />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube
                size={32}
                className="bg-red-600 rounded-full p-2 text-white hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center bg-[#B92123] text-white text-sm py-3">
        © 2025{" "}
        <a
          target="_blank"
          href="https://TajHouse.com"
          className="font-semibold hover:underline"
        >
          Taj House
        </a>{" "}
        - All Rights Reserved.
      </div>
    </footer>
  );
}
