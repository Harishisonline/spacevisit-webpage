import React, { useState } from "react";
import sateliteImg from "../assets/satelite1.jpg";
import moonImg from "../assets/moon-surface-hd.png";

const HeroSplash = () => {
  const [launched, setLaunched] = useState(false);

  const handleLaunch = () => {
    setLaunched(true);
    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setLaunched(false), 1000); // reset after scroll
    }, 1500);
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
          className="relative px-8 py-3 bg-accent text-white font-space font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 hover:bg-highlight box-shadow-glow overflow-hidden group"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
        </button>
      </div>

      {/* Rocket */}
      <div className={`absolute bottom-[20%] z-30 transition-transform ${launched ? 'animate-launch' : 'animate-float'}`}>
        <div className="relative w-24 h-48 flex flex-col items-center">
          {/* Simple CSS Rocket representation or image */}
          <div className="w-12 h-32 bg-gray-200 rounded-t-full relative z-10">
            <div className="w-6 h-6 bg-secondary rounded-full mx-auto mt-6 border-2 border-accent"></div>
          </div>
          {/* Rocket Wings */}
          <div className="absolute bottom-16 w-24 flex justify-between z-0">
            <div className="w-6 h-12 bg-accent rounded-bl-full"></div>
            <div className="w-6 h-12 bg-accent rounded-br-full"></div>
          </div>
          {/* Flame */}
          {launched && (
            <div className="w-8 h-16 bg-gradient-to-t from-transparent via-orange-500 to-yellow-300 rounded-b-full animate-flame origin-top"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSplash;
