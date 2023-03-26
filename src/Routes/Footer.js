import React from "react";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="w-full h-72 bg-black/90 flex flex-col justify-evenly">
      <div className="flex w-full justify-around text-orange-700 font-semibold xl:w-3/6 xl:mx-auto">
        <p>About</p>
        <p>Studio</p>
        <p>Company</p>
        <p>Contact</p>
        <p>Follow us</p>
      </div>
      <div className="flex justify-center gap-10 text-white/90 text-2xl">
        <AiFillFacebook />
        <AiFillLinkedin />
        <AiFillYoutube />
        <AiOutlineInstagram />
        <RiTwitterFill />
      </div>
      <div className="flex flex-col justify-center items-center text-white/70 gap-3">
        <h1 className="text-white font-bold text-xl">LOGO</h1>
        <p>© 2023 Gentian Binaku, All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
