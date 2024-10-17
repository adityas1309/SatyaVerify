import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center w-full relative bg-black font-sans">
      {/* Main Content Area */}
      <div className="w-full h-screen relative flex">
        <div className="w-2/5 text-white flex flex-col justify-center pl-12 gap-6 z-10">
          {/* Title */}
          <h1 className="text-6xl mb-6 font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            सत्य-Verify
          </h1>

          {/* Subtitle */}
          <p className="text-2xl mb-8 tracking-wide">
            Know the truth, make the right decisions
          </p>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="px-10 py-4 w-2/4 text-lg font-semibold border-4 border-[#6f77ff] rounded-xl hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white text-white transition duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Check the NEWS!!!
          </button>
        </div>

        {/* Spline 3D Design */}
        <iframe
          src="https://my.spline.design/cybermannequin-4b678453c8ceb879facbf2a3d1ec6e49/"
          frameBorder="0"
          className="w-3/5 fixed right-0 h-full z-0"
          title="3D design of SatyaVerify"
        ></iframe>
      </div>

      {/* Footer-like Decoration */}
      <div className="bg-black h-16 fixed bottom-0 right-0 z-20 w-40"></div>
    </div>
  );
};

export default LandingPage;
