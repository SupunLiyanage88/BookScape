import React, { useEffect, useState } from "react";
import leftImage from "../assets/LandingImg03.png";
import rightImage from "../assets/LandingImg04.png";

const Body = () => {
  const [firstSectionVisible, setFirstSectionVisible] = useState(false);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const [firstSectionGone, setFirstSectionGone] = useState(false);
  const [secondSectionGone, setSecondSectionGone] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0); // To track the previous scroll position

  useEffect(() => {
    // Trigger first section visibility immediately
    setFirstSectionVisible(true);

    // Trigger second section visibility with a delay (1 second)
    const timer = setTimeout(() => {
      setSecondSectionVisible(true);
    }, 1000); // 1000ms delay for second section

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Scroll event to detect when to animate sections disappearing or appearing
  const handleScroll = () => {
    const currentScrollY = window.scrollY; // Current scroll position

    const firstSectionPosition = document.getElementById("firstSection").getBoundingClientRect();
    const secondSectionPosition = document.getElementById("secondSection").getBoundingClientRect();

    // If user is scrolling down
    if (currentScrollY > prevScrollY) {
      // If the first section is out of view (scroll down)
      if (firstSectionPosition.top < window.innerHeight * 0.5) {
        setFirstSectionGone(true);
      } else {
        setFirstSectionGone(false);
      }

      // If the second section is out of view (scroll down)
      if (secondSectionPosition.top < window.innerHeight * 0.5) {
        setSecondSectionGone(true);
      } else {
        setSecondSectionGone(false);
      }
    } 
    // If user is scrolling up
    else {
      // If the first section is in view (scroll up)
      if (firstSectionPosition.top >= window.innerHeight * 0.5) {
        setFirstSectionGone(false);
      }

      // If the second section is in view (scroll up)
      if (secondSectionPosition.top >= window.innerHeight * 0.5) {
        setSecondSectionGone(false);
      }
    }

    setPrevScrollY(currentScrollY); // Update the previous scroll position
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [prevScrollY]);

  return (
    <div className="px-24 py-10 w-full md:w-[60rem] mx-auto">
      {/* First Section: Image on the Left, Text on the Right */}
      <div
        id="firstSection"
        className="flex flex-col items-center text-center md:text-left md:items-start mb-10 md:flex-row"
      >
        <img
          src={leftImage}
          alt="Person reading"
          className={`w-56 h-auto mb-4 md:mr-6 transition-all duration-1000 ease-out ${
            firstSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${firstSectionGone ? "opacity-0 translate-y-10" : ""}`}
        />
        <div
          className={`mt-10 md:mt-0 transition-all duration-1000 ease-out ${
            firstSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${firstSectionGone ? "opacity-0 translate-y-10" : ""}`}
        >
          <h2 className="text-xl font-semibold mb-2">Deciding on Your Next Read?</h2>
          <p className="text-gray-700 w-full md:w-[30rem]">
            You've come to the right place! Share your favorite genres or titles,
            and we'll suggest books you'll love—tailored just for you.
          </p>
        </div>
      </div>

      {/* Second Section: Image on the Right, Text on the Left */}
      <div
        id="secondSection"
        className="flex flex-col items-center text-center md:text-left md:items-start md:flex-row-reverse mb-10"
      >
        <img
          src={rightImage}
          alt="Person reading"
          className={`w-56 h-auto mb-4 md:ml-6 transition-all duration-1000 ease-out ${
            secondSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${secondSectionGone ? "opacity-0 translate-y-10" : ""}`}
        />
        <div
          className={`transition-all duration-1000 ease-out ${
            secondSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${secondSectionGone ? "opacity-0 translate-y-10" : ""}`}
        >
          <h2 className="text-xl font-semibold mb-2">
            Need Help Finding the Perfect Book?
          </h2>
          <p className="text-gray-700 mt-5 w-full md:w-[30rem]">
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
