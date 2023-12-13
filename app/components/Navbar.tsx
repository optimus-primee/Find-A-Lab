"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  return (
    <div className="fixed  w-full z-50">
      <div className="max-w-[1440px] mx-auto">
        <div className=" ">
          <header
            className={
              navbar
                ? "bg-[#c3e3fb] w-full flex justify-between items-center    h-[60px] sm:h-[80px]"
                : "bg-transparent w-full flex justify-between items-center    h-[60px] sm:h-[80px] "
            }
          >
            <Link href="/">
              <div className="text-black text-bold text-[30px]">LOGO</div>
            </Link>
            <nav className="sm:flex hidden">
              <ul className="flex gap-5 font-nunito text-black">
                <li>Home</li>
                <li>Search By Industry</li>
                <li>Search By Location</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </nav>
            <button className="px-[20px] py-[6px] bg-white">
              Add a listing
            </button>
          </header>
        </div>
      </div>
    </div>
  );
}
