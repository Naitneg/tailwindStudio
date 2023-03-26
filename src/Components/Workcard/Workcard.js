import React from "react";
const punet = [
  {
    image:
      "https://www.brides.com/thmb/NLgiUnH0F3ndAFFtmojjx2HFxDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indhira-Jason-Wedding-206-86bba0d2e23e42ecbe67f51bdc4cd17e.jpg",
    title: "Wedding",
    description: "Photo by Filan Fisteku",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-adorable-baby-child-with-warm-white-and-pink-royalty-free-image-892959344-1545665418.jpg",
    title: "Baby",
    description: "Photo by Filan Fisteku",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-birthday-party-games-1575412704.jpg",
    title: "Party",
    description: "Photo by Filan Fisteku",
  },
  {
    image:
      "https://www.freelogoservices.com/blog/wp-content/uploads/digital-graphic-designer.jpg",
    title: "Working",
    description: "Photo by Filan Fisteku",
  },
];
function Workcard() {
  return (
    <div className=" flex flex-wrap">
      {punet.map((puna) => (
        <div
          key={puna.title}
          className="w-96 h-96 mx-auto my-5 relative overflow-hidden cursor-pointer"
        >
          <img
            src={puna.image}
            alt={puna.title}
            className="w-full h-full hover:scale-110 object-cover ease-out duration-75 hover:duration-[4s]"
          />
          <div className="absolute bottom-0 left-0 py-2 flex flex-col w-full items-center bg-black/70 text-white">
            <h1 className="text-2xl font-semibold">{puna.title}</h1>
            <p>{puna.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Workcard;
