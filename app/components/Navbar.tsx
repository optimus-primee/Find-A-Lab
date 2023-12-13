"use client";
import Image from "next/image";
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
    <div className="flex ">
      <header
        className={
          navbar
            ? "bg-[#c3e3fb] w-full flex justify-between items-center fixed top-0 xl:px-14 px-5 h-[60px] sm:h-[80px]"
            : "bg-transparent w-full flex justify-between items-center fixed top-0 xl:px-14 px-5 h-[60px] sm:h-[80px]"
        }
      >
        <div className="text-white">LOGO</div>

        <nav className="sm:flex hidden">
          <ul className="flex gap-5 font-nunito text-black">
            <li>Home</li>
            <li>Search By Industry</li>
            <li>Search By Location</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
    <button className="px-[20px] py-[6px] bg-white">Add a listing</button>
      </header>
    </div>
  );
}
