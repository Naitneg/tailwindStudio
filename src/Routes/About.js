import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineCodeSandbox,
  AiOutlineBgColors,
} from "react-icons/ai";
import { MdDesignServices, MdSlowMotionVideo } from "react-icons/md";
import { DiIllustrator } from "react-icons/di";
import { Element } from "react-scroll";

function About() {
  return (
    <Element id="about" name="about">
      <div className="w-full h-[75rem] relative">
        <img
          src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80"
          alt="about"
          className="object-cover w-full h-full blur-[1px] brightness-50"
        />
        <div className="flex flex-col text-center gap-2 absolute top-0 ml-auto mr-auto left-0 right-0">
          <h1 className="font-bold text-white text-5xl mt-5 md:text-7xl">
            RRETH NESH
          </h1>
          <p className="w-3/4 mx-auto leading-tight text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor.
            Integer quam velit.
          </p>
          <div className="border-b-2 border-orange-600 w-full mt-5 xl:w-3/5 xl:mx-auto"></div>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            alt="person"
            className="w-80 h-80 rounded-full object-cover mx-auto my-5"
          />
          <h1 className="text-white text-3xl font-bold">Filan Fisteku</h1>
          <h3 className="text-orange-700 font-semibold text-2xl">
            CEO AND FOUNDER
          </h3>
          <div className="flex my-5 gap-5 childs items-center justify-center">
            <AiOutlineInstagram className="text-white text-4xl" />
            <AiFillLinkedin className="text-3xl" />
            <AiFillFacebook className="text-3xl" />
          </div>
          <div className="border-b-2 border-orange-600 w-full mt-5 xl:w-3/5 xl:mx-auto"></div>
          <div className="flex flex-col w-5/6 gap-3 mx-auto">
            <p className="text-white text-2xl my-4 font-semibold">
              Ne specializojmë në:{" "}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-4">
              <div className="flex flex-col justify-center items-center">
                <MdDesignServices className="text-orange-400 text-4xl" />
                <p className="text-white text-xl">Interactive Design</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <AiOutlineCodeSandbox className="text-orange-400 text-4xl" />
                <p className="text-white text-xl">Code</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <DiIllustrator className="text-orange-400 text-4xl" />
                <p className="text-white text-xl">Illustration</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <MdSlowMotionVideo className="text-orange-400 text-4xl" />
                <p className="text-white text-xl">Video Design</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <AiOutlineBgColors className="text-orange-400 text-4xl" />
                <p className="text-white text-xl">UI/UX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-64 md:w-[45rem] md:rounded-lg bg-black/50 absolute -bottom-[10%] md:-bottom-[5%] left-0 right-0 ml-auto mr-auto flex flex-col justify-evenly items-center z-10 2xl:w-3/6 2xl:h-72">
          <p className="text-white text-center w-4/5 italic 2xl:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            exercitationem a magni, eveniet amet architecto ipsum distinctio
            dignissimos itaque deleniti pariatur eligendi laboriosam aspernatur,
            expedita at ut ducimus! Praesentium, eveniet!
          </p>
          <h2 className="text-white text-2xl text-center 2xl:text-3xl">
            -MOTO- PikeMedia
          </h2>
        </div>
        <div className="clipath2"></div>
      </div>
    </Element>
  );
}

export default About;
