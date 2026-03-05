import React, { useState } from "react";
import moonImg from "../assets/moon-surface-hd.png";

const HeroSplash = () => {
  const [launched, setLaunched] = useState(false);

  const handleLaunch = () => {
    setLaunched(true);
    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setLaunched(false), 1000); // reset after scroll
    }, 3500);
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary/40 backdrop-blur-sm">
      {/* Clouds / Moon Surface below */}
      <div className="absolute bottom-0 w-full z-10 opacity-70 translate-y-20 animate-float">
        <img src={moonImg} alt="moon surface" className="w-full object-cover" />
      </div>

      <div className="z-20 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-space font-bold text-white mb-6 text-shadow-glow">
          Explore The Unknown
        </h1>
        <p className="text-lg md:text-xl font-sans text-gray-300 max-w-2xl mx-auto mb-10 px-4">
          Journey beyond the atmosphere. Experience the vastness of the universe from the comfort of your screen.
        </p>
        
        <button 
          onClick={handleLaunch}
          className={`relative px-8 py-3 bg-accent text-white font-space font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 hover:bg-highlight box-shadow-glow overflow-hidden group ${launched ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
        </button>
      </div>

      {/* CSS Rocket rising from bottom */}
      <div 
        className={`absolute z-30 transition-all duration-[4000ms] ease-in-out flex flex-col items-center ${
          launched ? 'bottom-[100vh] scale-100 opacity-100' : '-bottom-[50vh] scale-75 opacity-0'
        }`}
      >
        {/* The Rocket Build */}
        <div className="relative flex flex-col items-center">
          {/* Nose Cone */}
          <div className="w-8 h-12 bg-red-500 rounded-t-[100%] z-20 -mb-2 border-b border-red-700"></div>
          
          {/* Main Body */}
          <div className="w-20 h-40 bg-gray-200 rounded-t-[40%] rounded-b-lg relative z-10 flex items-center justify-center border-x-4 border-gray-300 shadow-inner">
            {/* Window */}
            <div className="w-10 h-10 bg-blue-800 rounded-full border-4 border-gray-400 shadow-inner flex items-center justify-center overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-900 to-blue-400 opacity-60"></div>
            </div>
            
            {/* Stripe */}
            <div className="absolute top-8 w-full h-2 bg-gray-400"></div>
          </div>
          
          {/* Engine Base */}
          <div className="w-16 h-4 bg-gray-600 rounded-b-md z-20 border-t border-gray-700"></div>
          
          {/* Fins */}
          <div className="absolute bottom-6 w-32 flex justify-between z-0">
            <div className="w-8 h-16 bg-gray-500 rounded-tl-[100%] rounded-bl-md transform origin-right -skew-y-[20deg] shadow-lg"></div>
            <div className="w-8 h-16 bg-gray-500 rounded-tr-[100%] rounded-br-md transform origin-left skew-y-[20deg] shadow-lg"></div>
          </div>

          {/* Flame Trail */}
          {launched && (
            <div className="w-10 h-40 bg-gradient-to-t from-transparent via-red-500 to-yellow-300 rounded-b-full animate-flame origin-top blur-[2px] mt-1"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSplash;
