"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [open, setOpen] = useState(false);
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
    <nav className="">
      <div className={navbar ? "bg-[#76d5cb] " : "bg-transparent  "}>
        logo
        <ul className="md:flex hidden  items-center gap-3  text-[#999999]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Blog
            </Link>
          </li>{" "}
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500  ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
