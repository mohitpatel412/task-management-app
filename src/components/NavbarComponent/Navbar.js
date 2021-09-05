import React from "react";
import NavLinks from "./NavbarLinks";
import "./navbarstyle.css";

let isOpen = false;

const Toggle1 = (y, x) => {
  y.style.display = "none";
  x[0].style.transform = "none";
  x[1].style.opacity = "100";
  x[2].style.transform = "none";
  isOpen = false;
};
const Toggle2 = (y, x) => {
  y.style.display = "block";
  y.style.animation = "fade-in 1s ease-in";
  x[0].style.transform = "rotate(-45deg) translate(-5px,6px)";
  x[0].style.transition = "transform 0.4s ease-in";
  x[1].style.opacity = "0";
  x[1].style.transition = "opacity 0.2s ease-in";
  x[2].style.transform = "rotate(45deg) translate(-5px,-6px)";
  x[2].style.transition = "transform 0.4s ease-in";
  isOpen = true;
};

const handleClick = () => {
  const y = document.getElementById("drop-down");
  const x = document.getElementById("nav_parent").children;
  isOpen ? Toggle1(y, x) : Toggle2(y, x);
};

const Navbar = () => (
  <div
    className="block text-black lg:px-12 md:px-8 px-4"
    style={{ backgroundColor: "#dbffff" }}
  >
    <div className="h-16 flex justify-between justify-items-center">
      <div className="inline-flex py-3">
        <div>
          <img className="w-12 h-12" src="/images/Group 220.png" alt="Logo" />
        </div>
        <div className="text-3xl pl-2 align-middle select-none font-bold">
          TODO
        </div>
      </div>
      <div className="hidden sm:flex text-lg py-3" id="">
        <NavLinks />
      </div>
      <div
        className="sm:hidden py-4 cursor-pointer"
        id="nav_parent"
        onClick={handleClick}
      >
        <div id="div1" className="h-1 w-6 m-1 bg-black"></div>
        <div id="div2" className="h-1 w-6 m-1 bg-black"></div>
        <div id="div3" className="h-1 w-6 m-1 bg-black"></div>
      </div>
    </div>
    <div className="hidden sm:hidden text-black text-sm py-3" id="drop-down">
      <NavLinks />
    </div>
  </div>
);

export default Navbar;
