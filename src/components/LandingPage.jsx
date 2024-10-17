import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/choose");
  };

  return (
    <div className="flex flex-col items-center w-full relative bg-black font-sans">
      <div className="w-full h-screen relative flex ">
        <div className="w-2/5  text-white flex flex-col justify-center pl-12 gap-4 z-10">
          <h1 className="text-6xl mb-4 font-bold">सत्य-Verify</h1>
          <p className="text-2xl  mb-6">
              Know the truth, make the right decisions
          </p>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="px-8 py-3 w-2/4 border-4 border-[#6f77ff] hover:text-white text-lg rounded-xl hover:bg-[#6f77ff] transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Spline 3D Design */}
        <iframe
          src="https://my.spline.design/cybermannequin-4b678453c8ceb879facbf2a3d1ec6e49/"
          frameBorder="0"
          className="w-4/5 fixed right-0 h-full z-0"
          title="3D design of SatyaVerify"
        ></iframe>
      </div>
      <div className="bg-black h-16 fixed bottom-0 right-0 z-20 w-40"></div>
    </div>
  );
};

export default LandingPage;
