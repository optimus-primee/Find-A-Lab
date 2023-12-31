"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

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
      <div className="">
        <div className=" ">
          <header className={navbar ? "bg-[#76d5cb] " : "bg-transparent  "}>
            <div className="max-w-[1440px] mx-auto px-20 flex w-full justify-between items-center h-[60px] sm:h-[80px]">
              <Link href="/">
                <div className="text-black text-bold text-[30px]">LOGO</div>
              </Link>
              <div className="flex items-center">
                <nav className="mr-7">
                  <NavLinks />
                </nav>
                <div className="flex gap-7">
                  <div>Blog</div>
                  <div>Contact Us</div>
                </div>
              </div>

              <button className="px-[20px] py-[6px] bg-white">
                Add a listing
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
