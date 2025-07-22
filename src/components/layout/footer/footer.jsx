import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLock,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white mt-10 border-t border-gray-200 pt-2">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col gap-8">
        {/* Logo & Socials */}
        <div className="flex border-b border-[#e3e3e3]  justify-between w-full gap-4">
          <img src="/assets/icons/icon0.svg" alt="Logo" className="md:w-[140px] w-[80px]" />
          <div className="flex gap-2 items-center">
            <span className="font-medium">Social Links</span>
            <div className="flex gap-2">
              <FaFacebookF size={34} className="bg-blue-600 rounded-full  p-2 text-white" />
              <FaXTwitter size={34} className="bg-black rounded-full  p-2 text-white" />
              <FaInstagram size={34} className="bg-[#c13584] rounded-full  p-2 text-white" />
              <FaYoutube  size={34} className="bg-red-600 rounded-full  p-2 text-white" />
            </div>
          </div>
        </div>

        {/* Top section */}
        <div className="flex  flex-col md:flex-row justify-between gap-8">
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            <div>
              <h3 className="font-semibold mb-2">Get to Know Us</h3>
              <ul className="text-gray-500 space-y-1 text-sm">
                <li>About Us</li>
                <li>FAQs</li>
                <li>Our Partners</li>
                <li>Work With Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shop</h3>
              <ul className="text-gray-500 space-y-1 text-sm">
                <li>Recently Viewed</li>
                <li>Featured Products</li>
                <li>Top 100 Appliances</li>
                <li>Laptops</li>
                <li>Toys & Games</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Useful Links</h3>
              <ul className="text-gray-500 space-y-1 text-sm">
                <li>Track Order</li>
                <li>Latest News</li>
                <li>Purchase Theme</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[#f7f6fb] p-6 rounded-xl md:w-[40%] ">
            <h3 className="text-lg font-semibold text-red-500 mb-2">
              Subscribe Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Join our mailing list to receive any latest updates and
              promotions.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full px-4 py-2 text-sm border border-[#e3e3e3] outline-none"
              />
              <button className="bg-[#e94560] text-white text-sm px-4 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Payment section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <FaLock className="text-gray-500" />
            <span>Safety Payments</span>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <img src="/assets/images/payment-list.png.webp" className="h-6" />
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-gray-500 text-sm py-2 border-t border-[#e3e3e3] ">
          Copyright ©{" "}
          <a
            target="_block"
            href="https://TajHouse.com"
            className="font-semibold"
          >
            Taj House
          </a>{" "}
          2025 Made with love, Taj House All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
