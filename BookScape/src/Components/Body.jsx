import React from "react";
import LandingPage01 from "../assets/LandingPage01.jpg"; // Correct path to the image

const Body = () => {
  return (
    <div className="px-24">
      <div
        className=" h-[25rem] w-full mt-10"
        style={{
          backgroundImage: `url(${LandingPage01})`,
          backgroundSize: 'cover', // Ensures the image covers the div
          backgroundPosition: 'center', // Centers the image
        }}
      ></div>
    </div>
  );
};

export default Body;
