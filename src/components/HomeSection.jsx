import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const planetsData = {
  earth: {
    name: "EARTH",
    color: "#00f2fe",
    texture: "textures/earth.jpg",
    layers: [
      { name: "Crust", radius: "0 - 70 km", temp: "Ambient to 1000°C", comp: "Silicate rock, Oxygen, Silicon" },
      { name: "Mantle", radius: "70 - 2890 km", temp: "1000°C to 3700°C", comp: "Solid silicate rock" },
      { name: "Outer Core", radius: "2890 - 5150 km", temp: "4000°C to 5000°C", comp: "Liquid Iron, Nickel" },
      { name: "Inner Core", radius: "5150 - 6371 km", temp: "5400°C", comp: "Solid Iron, Nickel" }
    ]
  },
  jupiter: {
    name: "JUPITER",
    color: "#fda085",
    texture: "textures/jupiter.jpg",
    layers: [
      { name: "Atmosphere", radius: "Outer 50 km", temp: "-145°C", comp: "Hydrogen, Helium, Ammonia clouds" },
      { name: "Liquid Mantle", radius: "50 - 21000 km", temp: "Up to 10,000°C", comp: "Liquid Hydrogen" },
      { name: "Metallic Mantle", radius: "21000 - 60000 km", temp: "Up to 24,000°C", comp: "Liquid Metallic Hydrogen" },
      { name: "Core", radius: "Inner ~10000 km", temp: "35,000°C", comp: "Dense rock, Ice" }
    ]
  },
  moon: {
    name: "THE MOON",
    color: "#8ec5fc",
    texture: "textures/moon.jpg",
    layers: [
      { name: "Crust", radius: "0 - 50 km", temp: "-173°C to 127°C", comp: "Oxygen, Silicon, Magnesium" },
      { name: "Mantle", radius: "50 - 1350 km", temp: "Unknown (Solid)", comp: "Olivine, Pyroxene" },
      { name: "Partial Melt", radius: "1350 - 1500 km", temp: "1400°C", comp: "Partially molten rock" },
      { name: "Core", radius: "1500 - 1740 km", temp: "1400°C to 1500°C", comp: "Solid/Liquid Iron" }
    ]
  }
};

const PlanetModal = ({ planetId, onClose }) => {
  const planet = planetsData[planetId];
  const [animateLayers, setAnimateLayers] = useState(false);

  useEffect(() => {
    // Trigger animation slightly after mount
    const timer = setTimeout(() => setAnimateLayers(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!planet) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-secondary/90 border-2 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col md:flex-row gap-8"
        style={{ borderColor: planet.color, boxShadow: `0 0 40px ${planet.color}40` }}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={28} />
        </button>

        {/* Left Side: Realistic Texture Slice Splitting */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
          <h3 
            className="text-3xl font-space font-bold mb-12 tracking-widest uppercase"
            style={{ color: planet.color, textShadow: `0 0 15px ${planet.color}80` }}
          >
            {planet.name} ANATOMY
          </h3>
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center perspective-[1000px]">
            
            {/* Base Background Sphere to complete the gap */}
            <div 
              className="absolute w-full h-full rounded-full shadow-inner opacity-40 z-0"
              style={{ backgroundColor: planet.color }}
            ></div>

            {/* Left Hemisphere (Crust) */}
            <div 
              className="absolute w-full h-full rounded-full planet-texture shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out z-50 flex items-center justify-center"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}${planet.texture})`,
                transform: `translateX(${animateLayers ? '-50px' : '0px'}) rotateY(${animateLayers ? '-45deg' : '0deg'}) scale(${animateLayers ? 0.9 : 1})`,
                clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
              }}
            ></div>

            {/* Right Hemisphere (Crust) */}
            <div 
              className="absolute w-full h-full rounded-full planet-texture shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out z-50 flex items-center justify-center"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}${planet.texture})`,
                transform: `translateX(${animateLayers ? '130px' : '0px'}) rotateY(${animateLayers ? '45deg' : '0deg'}) scale(${animateLayers ? 0.9 : 1})`,
                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
              }}
            ></div>

            {/* The internal core layers stacked like bowls inside the gap */}
            {planet.layers.map((layer, index) => {
              if (index === 0) return null; // Skip crust since it's the hemispheres

              const size = 100 - (index * 20); // 80%, 60%, 40%
              // Offset the inner layers incrementally
              const xOffset = animateLayers ? -30 + (index * 30) : 0; 
              
              return (
                <div 
                  key={index}
                  className="absolute rounded-full border-r border-black/40 shadow-[inset_10px_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all duration-1000 ease-out"
                  style={{
                    width: `${size}%`,
                    height: `${size}%`,
                    background: index === planet.layers.length - 1 ? '#fffae6' : `radial-gradient(circle at 70% center, ${planet.color}, #111)`, 
                    transform: `translateX(${xOffset}px) rotateY(${animateLayers ? '-30deg' : '0deg'}) scale(${animateLayers ? 0.9 : 1})`,
                    opacity: animateLayers ? 1 : 0,
                    zIndex: 40 - index
                  }}
                >
                  {animateLayers && (
                    <div className="absolute h-0 border-t border-white/50" style={{ right: '50%', width: '60px', top: '20%', transform: `rotate(-30deg)` }}>
                      <span className="text-[9px] md:text-xs font-space font-bold opacity-90 tracking-widest absolute -left-2 -translate-x-full -top-3 whitespace-nowrap bg-black/50 px-1 rounded">
                        {layer.name}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Information Data */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          {planet.layers.map((layer, index) => (
            <div 
              key={index}
              className="bg-primary/50 border border-white/5 rounded-xl p-4 transition-all duration-700 delay-[200ms] hover:scale-105 hover:bg-primary/80"
              style={{
                opacity: animateLayers ? 1 : 0,
                transform: animateLayers ? 'translateX(0)' : 'translateX(20px)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <h4 className="text-xl font-space font-bold mb-2 flex items-center gap-2" style={{ color: planet.color }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: planet.color, boxShadow: `0 0 8px ${planet.color}` }}></span>
                {layer.name}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-sans text-gray-300">
                <div>
                  <span className="text-gray-500 block text-xs uppercase tracking-wider">Radius / Depth</span>
                  {layer.radius}
                </div>
                <div>
                  <span className="text-gray-500 block text-xs uppercase tracking-wider">Temperature</span>
                  {layer.temp}
                </div>
                <div className="sm:col-span-2 mt-1">
                  <span className="text-gray-500 block text-xs uppercase tracking-wider">Composition</span>
                  {layer.comp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CSSPlanet = ({ id, className, delay, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const planet = planetsData[id];

  return (
    <div 
      className={`absolute cursor-pointer transition-all duration-500 ease-in-out z-10 ${className} ${isHovered ? 'scale-110 z-20' : ''} animate-float`}
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onClick={() => onClick(id)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* The Aura Glow Effect - triggers on hover and matches planet color */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-700 ease-out pointer-events-none
            ${isHovered ? 'opacity-100 scale-125 blur-xl' : 'opacity-0 scale-100 blur-none'}
          `}
          style={{ 
            backgroundColor: `${planet.color}20`, // 20 hex is roughly 12% opacity
            boxShadow: `0 0 40px ${planet.color}80` 
          }}
        ></div>
        
        {/* Pure CSS Planet Sphere with Realistic Texture Map */}
        <div 
          className="w-full h-full rounded-full shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.9),_0_0_20px_rgba(255,255,255,0.1)] planet-texture transition-transform duration-10000 linear"
          style={{ 
            backgroundImage: `url(${import.meta.env.BASE_URL}${planet.texture})`,
            transformStyle: 'preserve-3d'
          }}
        ></div>

        {/* Tooltip Name */}
        <div 
          className={`absolute -top-12 bg-secondary/90 border font-space font-bold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{
            borderColor: planet.color,
            color: planet.color,
            textShadow: `0 0 10px ${planet.color}80`,
            boxShadow: `0 0 15px ${planet.color}30`
          }}
        >
          {planet.name}
        </div>
      </div>
    </div>
  );
};

const HomeSection = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // Stop body scroll when modal is open
  useEffect(() => {
    if (selectedPlanet) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedPlanet]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-black">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Pure CSS Interactive Planets */}
      <div className="absolute inset-0 pointer-events-auto">
        <CSSPlanet 
          id="earth"
          className="top-[15%] left-[5%] md:left-[10%] w-32 h-32 md:w-48 md:h-48" 
          delay="0s" 
          onClick={setSelectedPlanet}
        />
        <CSSPlanet 
          id="jupiter"
          className="bottom-[10%] right-[2%] md:right-[10%] w-48 h-48 md:w-72 md:h-72" 
          delay="2s" 
          onClick={setSelectedPlanet}
        />
        <CSSPlanet 
          id="moon"
          className="top-[25%] right-[10%] md:top-[30%] md:right-[15%] w-20 h-20 md:w-24 md:h-24" 
          delay="4s" 
          onClick={setSelectedPlanet}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center bg-primary/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-8 text-shadow-glow uppercase">
          Welcome to the Cosmos
        </h2>
        <p className="text-xl text-gray-300 font-sans leading-relaxed mb-6">
          Space is not empty. It is a vast, dynamic fabric of energy, gravity, and mystery. 
          For centuries, humanity looked up at the stars and wondered. Today, we step into the void.
        </p>
        <p className="text-lg text-accent font-sans italic mb-8">
          "The universe is under no obligation to make sense to you." - Neil deGrasse Tyson
        </p>
        
        <p className="text-sm font-space text-highlight uppercase tracking-widest animate-pulse border border-highlight/30 py-2 px-4 rounded-full inline-block">
          Click on any planet to explore its anatomy
        </p>
      </div>

      {/* Planet Anatomy Modal */}
      {selectedPlanet && (
        <PlanetModal 
          planetId={selectedPlanet} 
          onClose={() => setSelectedPlanet(null)} 
        />
      )}
    </section>
  );
};

export default HomeSection;