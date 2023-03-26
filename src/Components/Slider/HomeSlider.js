import React, { useEffect, useRef, useState, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import { IcOutlineKeyboardArrowLeft } from "../UI/Arrows";
import Intro from "./Intro";
import { Element } from "react-scroll";
import Backdrop from "../Modal/Backdrop";
import ModalForm from "../Modal/ModalForm";
import { LoadingContext } from "../../Context/Loading";

function SimpleSlider() {
  const sliderRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const { setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"; // prevent scrolling when backdrop is visible
    } else {
      document.body.style.overflow = "visible"; // allow scrolling when backdrop is hidden
    }
  }, [openModal]);

  const handleNextClick = () => {
    sliderRef.current.slickNext();
    setIsLoading(false);
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
    setIsLoading(false);
  };
  const images = [
    { img: image1, alt: "para" },
    { img: image2, alt: "dyta" },
  ];

  var settings = {
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  };
  return (
    <Element id="home" name="home">
      <div className="relative">
        <Slider
          {...settings}
          ref={sliderRef}
          pauseOnHover={false}
          onSwipe={() => {
            setIsLoading(false);
          }}
        >
          {images.map((image) => (
            <div className="outline-none" key={image.alt}>
              <img
                src={image.img}
                alt={image.alt}
                className="2xl:h-[73vh] w-full object-cover object-center relative h-[30rem]"
              />
            </div>
          ))}
        </Slider>
        <div className="clipath2 2xl:clipath"></div>
        <div
          className="absolute top-1/2 left-0 text-5xl bg-gray-300/50 ml-2 cursor-pointer rounded-full hover:scale-105 transition duration-500"
          onClick={handlePrevClick}
        >
          <IcOutlineKeyboardArrowLeft className="text-gray-700 hover:text-black transition duration-500" />
        </div>
        <div
          className="absolute top-1/2 right-0 text-5xl bg-gray-300/50 mr-2 cursor-pointer rounded-full hover:scale-105 transition duration-500"
          onClick={handleNextClick}
        >
          <IcOutlineKeyboardArrowLeft className="rotate-180 text-gray-700 hover:text-black transition duration-500" />
        </div>
        <Intro setModalOpen={() => setOpenModal(true)} />
        {openModal && (
          <Backdrop onHide={() => setOpenModal(false)} isOpen={openModal} />
        )}
        {openModal && (
          <ModalForm modal={openModal} onHide={() => setOpenModal(false)} />
        )}
      </div>
    </Element>
  );
}

export default SimpleSlider;
