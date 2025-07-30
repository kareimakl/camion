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
        <div className="flex border-[#e3e3e3]  justify-between w-full gap-4">
          <img
            src="/assets/icons/icon0.svg"
            alt="Logo"
            className="md:w-[100px] w-[50px]"
          />
          <div className="flex gap-2 items-center">
            <span className="font-medium">Social Links</span>
            <div className="flex gap-2">
              <FaFacebookF
                size={34}
                className="bg-blue-600 rounded-full  p-2 text-white"
              />
              <FaXTwitter
                size={34}
                className="bg-black rounded-full  p-2 text-white"
              />
              <FaInstagram
                size={34}
                className="bg-[#c13584] rounded-full  p-2 text-white"
              />
              <FaYoutube
                size={34}
                className="bg-red-600 rounded-full  p-2 text-white"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom copyright */}
      <div className="text-center bg-[#B92123] text-[#fff] md:text-sm text-xs py-2 border-t border-[#e3e3e3] ">
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
    </footer>
  );
}
