import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { MdPhotoCamera, MdDesignServices } from "react-icons/md";
import { ImVideoCamera } from "react-icons/im";
import { RiVoiceprintFill } from "react-icons/ri";
import { Element } from "react-scroll";

function Services() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);
  const images = [
    {
      image:
        "https://www.dpreview.com/files/p/articles/3252233813/JLG_2022_1115_064.jpeg",
      title: "camera",
    },
    {
      image:
        "https://d9pfvpeevxz0y.cloudfront.net/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/05/52119_Blog-1200x673.png.webp",
      title: "video",
    },
    {
      image:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_537311951_100178.jpg",
      title: "design",
    },
    {
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/the-ultimate-guide-to-digital-marketing-61726311bf393-sej-760x400.webp",
      title: "marketing",
    },
  ];
  return (
    <Element id="service" name="services">
      <div className="mt-5 w-4/5 max-w-[1250px] mx-auto md:w-full">
        <div className="flex flex-col text-center gap-2">
          <h1 className="font-bold text-gray-400 text-5xl md:text-7xl">
            SHËRBIMET
          </h1>
          <p className="leading-tight md:w-4/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor.
            Integer quam velit.
          </p>
          <div className="border-b-2 border-orange-600 w-full my-5"></div>
        </div>
        <Slider
          asNavFor={nav2}
          ref={slider1Ref}
          draggable={true}
          arrows={false}
          swipeToSlide={true}
          className="w-4/5 mx-auto my-10 max-w-[1250px]"
        >
          {images.map((image) => (
            <img
              key={image.title}
              src={image.image}
              alt={image.title}
              className="object-cover h-[30rem] w-full rounded-xl"
            />
          ))}
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={slider2Ref}
          slidesToShow={3}
          focusOnSelect={true}
          autoplay={true}
          arrows={true}
          pauseOnFocus={true}
          pauseOnHover={true}
          className="w-4/5 mx-auto"
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          <div className="slider2">
            <MdPhotoCamera className="text-7xl" />
            <h2 className="text-3xl mb-3">Photography</h2>
            <p className="w-4/5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae.
            </p>
          </div>
          <div className="slider2">
            <ImVideoCamera className="text-7xl" />
            <h2 className="text-3xl mb-3">Video</h2>
            <p className="w-4/5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae.
            </p>
          </div>
          <div className="slider2">
            <MdDesignServices className="text-7xl" />
            <h2 className="text-3xl mb-3">Design</h2>
            <p className="w-4/5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae.
            </p>
          </div>
          <div className="slider2">
            <RiVoiceprintFill className="text-7xl" />
            <h2 className="text-3xl mb-3">Marketing</h2>
            <p className="w-4/5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae.
            </p>
          </div>
        </Slider>
        <div className="border-b-2 border-black w-full mx-auto mb-28"></div>
      </div>
    </Element>
  );
}

export default Services;
