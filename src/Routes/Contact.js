import React from "react";
import { BiMessageAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { Element } from "react-scroll";

function Contact() {
  return (
    <Element id="contact" name="contact">
      <div className="mt-[12rem] w-full mx-auto">
        <h1 className="text-7xl font-bold text-center mb-10">Contact!</h1>
        <div className="border-b-2 border-orange-600 w-full mt-5 xl:w-3/5 xl:mx-auto"></div>
        <p className="text-center text-xl my-10 w-3/4 mx-auto xl:w-3/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          doloribus repudiandae animi tenetur obcaecati eaque, sequi et
          asperiores ipsa delectus, maxime, magni temporibus eum omnis? Qui quae
          accusantium et vitae.
        </p>
        <h2 className="text-center text-3xl font-bold my-10">
          email@gmail.com
        </h2>
        <div className="border-b-2 border-orange-600 w-full mt-5 xl:w-3/5 xl:mx-auto"></div>
        <div className="flex justify-around my-20">
          <div className="flex flex-col items-center">
            <BiMessageAlt className="text-5xl" />
            <p className="font-semibold text-lg">+38349700700</p>
          </div>
          <div className="flex flex-col items-center">
            <MdLocationPin className="text-5xl" />
            <p className="font-semibold text-lg">Rr."Mbreteresha Teute"</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
