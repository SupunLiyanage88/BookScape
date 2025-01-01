import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navigation.css";

const Navigation = ({ toggleDarkMode }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle navigation to the User profile page
  const goToUserProfile = () => {
    navigate("/user");
  };
  const handleHouseClick = () => {
    navigate("/"); // Navigate to the desired path ("/" in this case)
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
      {/* Dark mode toggle */}
      <div className="absolute top-[2rem] right-4 md:top-[2.5rem] md:right-28">
        <label className="inline-flex items-center relative">
          <input
            className="peer hidden"
            id="toggle"
            type="checkbox"
            onChange={toggleDarkMode}
          />
          <div className="relative w-[80px] h-[40px] md:w-[110px] md:h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[30px] after:h-[30px] md:after:w-[40px] md:after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[40px] peer-checked:after:left-[75px] md:peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>

          {/* Sun icon */}
          <svg
            height="0"
            width="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white peer-checked:opacity-60 absolute w-4 h-4 md:w-6 md:h-6 left-[10px] md:left-[13px]"
          >
            <path
              d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
            ></path>
          </svg>

          {/* Moon icon */}
          <svg
            height="512"
            width="512"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black opacity-60 peer-checked:fill-white absolute w-4 h-4 md:w-6 md:h-6 right-[10px] md:right-[13px]"
          >
            <path
              d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
            ></path>
          </svg>
        </label>
      </div>

      {/* Header */}
      <h1 className="text-[2rem] md:text-[3rem] text-start ml-8 md:ml-24 mb-4 handwriting typing-effect">
        BookScape
      </h1>

      {/* Navigation Icons */}
      <div className="flex gap-6 md:gap-10 mt-5 justify-center">
        <FontAwesomeIcon
          icon={faHouse}
          className="text-2xl md:text-3xl transition-transform duration-300 hover:scale-110"
          onClick={handleHouseClick} // Add onClick event handler
        />
        <FontAwesomeIcon
          icon={faUser}
          className="text-2xl md:text-3xl transition-transform duration-300 hover:scale-110"
          onClick={goToUserProfile} // Add onClick to navigate to the user profile
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-2xl md:text-3xl transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Navigation;
