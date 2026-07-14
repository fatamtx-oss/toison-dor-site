"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Revenir en haut de la page"
      className={`group fixed z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A35B]/35 bg-[#F5F1E8]/88 shadow-[0_10px_30px_rgba(30,30,30,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A35B]/70 sm:h-14 sm:w-14 lg:bottom-20 lg:right-8 bottom-6 right-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Image
        src="/images/logo.svg"
        alt=""
        width={26}
        height={26}
        className="h-6 w-6 object-contain transition-transform duration-300 group-hover:rotate-[8deg] sm:h-7 sm:w-7"
      />
    </button>
  );
}