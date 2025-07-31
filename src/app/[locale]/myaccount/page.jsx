import Footer from "@/componentsedit/layout/footer/footer";
import Header from "@/componentsedit/layout/header/header";
import React from "react";

function MyAccount() {
  return (
    <main>
      <Header />
      <div className="flex gap-2 flex-col min-h-screen  container justify-start items-center">
        <div className="flex gap-[20px] shadow-2xl md:w-[50%] md:mt-4 mt-10 bg-white rounded-xl p-3 justify-start items-center ">
          <img
            src="/assets/images/4a4d2e3af68158e766eb7f62dd4a32b00ee27b16.jpg"
            alt="Caminon Logo"
            className=" rounded-full items-start  object-cover  h-26 w-26"
          />
          <div className="flex flex-col justify-center items-start  text-start ">
            <h1 className="text-xl font-bold mt-4">My Account</h1>
            <p className="text-lg text-[#6C6C6C]">
              Welcome to your account page
            </p>
          </div>
        </div>
        <div className="flex flex-row rounded-xl p-3 py-5    shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center  text-center">
          <div className="flex gap-2">
            <img src="/assets/icons/global.svg" alt="" />
            <h1 className="text-sm">My Account</h1>
          </div>
          <p className="text-xs text-[#6C6C6C]">Welcome to your account page</p>
        </div>
        <div className="flex flex-row rounded-xl p-3 py-5   shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center  text-center">
          <div className="flex gap-2">
            <img src="/assets/icons/empty-wallet (1).svg" alt="" />
            <h1 className="text-sm">My Account</h1>
          </div>
          <p className="text-xs text-[#6C6C6C]">Welcome to your account page</p>
        </div>
        <div className="flex flex-row rounded-xl p-3  py-5  shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center  text-center">
          <div className="flex gap-2">
            <img src="/assets/icons/play.svg" alt="" />
            <h1 className="text-sm">My Account</h1>
          </div>
          <p className="text-xs text-[#6C6C6C]">Welcome to your account page</p>
        </div>
        <div className="flex flex-row rounded-xl p-3   py-5 shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center  text-center">
          <div className="flex gap-2">
            <img src="/assets/icons/archive.svg" alt="" />
            <h1 className="text-sm">My Account</h1>
          </div>
          <p className="text-xs text-[#6C6C6C]">Welcome to your account page</p>
        </div>
        <div className="flex flex-row rounded-xl p-3  py-5  shadow-2xl min-w-[400px] w-[50%] bg-white justify-between items-center  text-center">
          <div className="flex gap-2">
            <img src="/assets/icons/logout.svg" alt="" />
            <h1 className="text-sm">My Account</h1>
          </div>
          <p className="text-xs text-[#6C6C6C]">Welcome to your account page</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default MyAccount;
