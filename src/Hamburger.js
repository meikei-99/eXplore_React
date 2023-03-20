import React from "react";
import { useEffect, useState } from "react";

export default function Hamburger() {
  const [showNav, setShowNav] = useState(true);
  const [fullTitle, setFullTitle] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  return (
    <div
      className={`fixed z-20 w-full ${
        showNav
          ? "px-4 xs:px-8 xl:px-8 2xl:px-14 pt-4 xs:pt-6 sm:pt-8"
          : "hidden ..."
      }`}
    >
      <div className="grid grid-cols-2 text-white p-2">
        <h1
          className="font-bold text-2xl md:text-3xl xl:text-4xl cursor-pointer transition duration-15 ... ease-in-out w-fit"
          onMouseOver={() => {
            setFullTitle(true);
          }}
          onMouseLeave={() => {
            setFullTitle(false);
          }}
        >
          {fullTitle ? "eXplore" : "e."}
        </h1>
      </div>
    </div>
  );
}
