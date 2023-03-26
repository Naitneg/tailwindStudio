import React from "react";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { Element } from "react-scroll";
import Workcard from "../Components/Workcard/Workcard";

function Work() {
  return (
    <Element id="work" name="work">
      <div className="mt-[17rem] w-3/4 mx-auto md:w-full">
        <div className="flex flex-col text-center gap-2 xl:w-3/5 xl:mx-auto">
          <h1 className="font-bold text-gray-400 text-5xl md:text-7xl">PUNA</h1>
          <p className="leading-tight md:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor.
            Integer quam velit.
          </p>
          <div className="border-b-2 border-orange-600 w-full my-5"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-evenly">
          <h4 className="text-xl italic">Na ndiqni ne rrjetet sociale !</h4>
          <div className="flex mb-5 childs md:gap-5">
            <AiOutlineInstagram className="text-white text-4xl" />
            <AiFillYoutube className="text-3xl" />
            <AiFillLinkedin className="text-3xl" />
            <AiFillFacebook className="text-3xl" />
            <RiTwitterFill className="text-3xl" />
          </div>
        </div>
        <Workcard />
      </div>
    </Element>
  );
}

export default Work;
