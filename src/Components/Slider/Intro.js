import React from "react";

import LoadingLine from "./LoadingLine";

function Intro(props) {
  return (
    <div className="h-[22rem] w-full lg:w-[60rem] bg-black/40 absolute -bottom-2/4 ml-auto mr-auto left-0 right-0 lg:rounded-b-2xl xl:rounded-b-2xl z-10 2xl:-bottom-1/4 overflow-hidden">
      <LoadingLine />
      <div className="text-center text-white flex flex-col justify-around h-full items-center">
        <h1 className="text-[2.5rem] xl:text-7xl md:text-6xl uppercase font-bold border-b-2 border-white w-fit">
          Studio PikëMEDIA
        </h1>
        <p className="text-md font-normal w-5/6 md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          commodi nostrum dignissimos blanditiis, dolorem reprehenderit sapiente
          veniam distinctio ea impedit provident architecto tenetur asperiores
        </p>
        <button
          onClick={() => props.setModalOpen()}
          className="px-6 py-1.5 bg-orange-600 rounded-md hover:bg-orange-700"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Intro;
