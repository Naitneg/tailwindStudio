import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Backdrop from "../Components/Modal/Backdrop";
import {
  MaterialSymbolsMenu,
  MaterialSymbolsCloseSharp,
} from "../Components/UI/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setShowNavbar(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  const navbarClass = showNavbar ? "sm:show" : "sm:hide";
  const Links = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="work"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Work
        </Link>
      </li>
      <li>
        <Link
          to="services"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={`flex fixed top-0 justify-between sm:justify-around w-full items-center h-16 ${navbarClass} z-20 bg-white ease-in-out duration-300 shadow-lg`}
      >
        <h2 className="text-3xl cursor-pointer ml-5 sm:ml-0 ">
          <Link to="home" smooth={true} duration={500} className="after:hidden">
            Logo
          </Link>
        </h2>
        <ul className="hidden sm:flex gap-5 cursor-pointer text-xl mr-5 sm:mr-0 z-20">
          {Links}
        </ul>
        <MaterialSymbolsMenu
          className="sm:hidden mr-5 text-3xl cursor-pointer"
          onClick={handleMenu}
        />
      </div>
      <div
        className={`w-3/5 h-full bg-red-500 z-30 sm:hidden top-0 -right-1 fixed flex flex-col justify-between ease-out duration-700 overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <MaterialSymbolsCloseSharp
            className="sm:hidden mt-5 ml-5 text-4xl cursor-pointer text-white border-2 rounded-md"
            onClick={handleMenu}
          />
          <ul className="flex flex-col items-center text-white text-2xl gap-2 cursor-pointer w-full mt-2">
            {Links}
          </ul>
        </div>
        <div className="text-white mb-5 font-bold text-4xl w-full flex justify-center animate-bounce">
          Logo
        </div>
      </div>
      <Backdrop onHide={handleMenu} isOpen={isOpen} />
    </div>
  );
}

export default Navbar;
