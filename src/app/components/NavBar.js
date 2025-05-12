"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import backgroundImg from "../assets/background.png";
import cyberlogo from "../assets/cyber-logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Scroll after route change
  useEffect(() => {
    const section = searchParams.get("scrollTo");
    if (pathname === "/" && section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [pathname, searchParams]);

  // ✅ Click handler
  const handleScrollTo = (id) => {
    if (window.innerWidth < 768) setIsOpen(false); // 👈 Close menu on mobile

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scrollTo=${id}`);
    }
  };

  return (
    <nav
      className="relative bg-cover bg-initial border-gray-200"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="absolute inset-0 bg-[rgba(10,29,58,0.5)] backdrop-blur-sm z-0" />
      <div className="relative z-10 max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-[2rem] md:px-[3rem] py-2">
        <Link href="/">
          <img
            src={cyberlogo.src}
            alt="Cyber Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`
    w-full md:w-auto
    transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible
    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} 
    md:max-h-full md:opacity-100 md:flex pb-4 md:pb-0
  `}
        >
          <ul className="gap-5 text-lg font-thai font-bold flex flex-col items-center p-4 md:p-0 mt-4 border border-white rounded-2xl md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <button
                onClick={() => handleScrollTo("about")}
                className="block py-2 px-3 text-white hover:text-orange-500"
              >
                เกี่ยวกับโครงการ
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("reward")}
                className="block py-2 px-3 text-white hover:text-orange-500"
              >
                รางวัล
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("contact")}
                className="block py-2 px-3 text-white hover:text-orange-500"
              >
                ติดต่อ
              </button>
            </li>
            <li className="border-gray-300 rounded-2xl">
              <Link href="/regis" onClick={() => setIsOpen(false)}>
                <span className="block py-2 px-4 border-2 border-white rounded-3xl text-lg text-white hover:text-orange-500 hover:border-orange-500">
                  สมัครเข้าร่วม
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
