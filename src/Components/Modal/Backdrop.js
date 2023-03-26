import React from "react";

function Backdrop(props) {
  return (
    <div
      className={`w-full h-screen bg-black/90 fixed top-0 left-0 z-20 overflow-hidden duration-700 ${
        !props.isOpen && "opacity-0 pointer-events-none"
      }`}
      onClick={props.onHide}
    ></div>
  );
}

export default Backdrop;
