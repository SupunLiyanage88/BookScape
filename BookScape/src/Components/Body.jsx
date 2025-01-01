import React, { useEffect, useState } from "react";
import leftImage from "../assets/LandingImg03.png";
import rightImage from "../assets/LandingImg04.png";

const Body = () => {
  const [firstSectionVisible, setFirstSectionVisible] = useState(false);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setFirstSectionVisible(true);
      setSecondSectionVisible(true);
    }
  }, [isMobile]);

  const handleScroll = () => {
    if (isMobile) return; // Skip scroll animation for mobile devices

    const currentScrollY = window.scrollY;

    const firstSectionPosition = document.getElementById("firstSection").getBoundingClientRect();
    const secondSectionPosition = document.getElementById("secondSection").getBoundingClientRect();

    if (currentScrollY > prevScrollY) {
      if (firstSectionPosition.top < window.innerHeight * 0.5) {
        setFirstSectionVisible(false);
      } else {
        setFirstSectionVisible(true);
      }

      if (secondSectionPosition.top < window.innerHeight * 0.5) {
        setSecondSectionVisible(false);
      } else {
        setSecondSectionVisible(true);
      }
    } else {
      if (firstSectionPosition.top >= 0 && firstSectionPosition.bottom <= window.innerHeight) {
        setFirstSectionVisible(true);
      } else {
        setFirstSectionVisible(false);
      }

      if (secondSectionPosition.top >= 0 && secondSectionPosition.bottom <= window.innerHeight) {
        setSecondSectionVisible(true);
      } else {
        setSecondSectionVisible(false);
      }
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, isMobile]);

  return (
    <div className="px-24 py-10 w-full md:w-[60rem] mx-auto">
      <div
        id="firstSection"
        className="flex flex-col items-center text-center md:text-left md:items-start mb-10 md:flex-row"
      >
        <img
          src={leftImage}
          alt="Person reading"
          className={`w-56 h-auto mb-4 md:mr-6 transition-all duration-1000 ease-out ${
            firstSectionVisible || isMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
        <div
          className={`mt-10 md:mt-0 transition-all duration-1000 ease-out ${
            firstSectionVisible || isMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Deciding on Your Next Read?</h2>
          <p className="text-gray-700 w-full md:w-[30rem] dark:text-gray-400">
            You've come to the right place! Share your favorite genres or titles,
            and we'll suggest books you'll love—tailored just for you.
          </p>
        </div>
      </div>

      <div
        id="secondSection"
        className="flex flex-col items-center text-center md:text-left md:items-start md:flex-row-reverse mb-10"
      >
        <img
          src={rightImage}
          alt="Person reading"
          className={`w-56 h-auto mb-4 md:ml-6 transition-all duration-1000 ease-out ${
            secondSectionVisible || isMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
        <div
          className={`transition-all duration-1000 ease-out ${
            secondSectionVisible || isMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">
            Need Help Finding the Perfect Book?
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mt-5 w-full md:w-[30rem]">
            Don’t know where to start? Tell us what you’ve enjoyed, and we’ll find
            books that match your tastes. Whether you’re into thrillers, romance,
            or non-fiction, we’ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
