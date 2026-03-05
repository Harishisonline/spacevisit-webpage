import React, { useState } from 'react';

const Planet = ({ videoSrc, name, className, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`absolute cursor-pointer transition-all duration-500 ease-in-out z-10 ${className} ${isHovered ? 'scale-110 z-20' : ''} animate-float`}
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* The Aura Glow Effect - triggers on hover */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-700 ease-out pointer-events-none
            ${isHovered ? 'opacity-100 scale-125 box-shadow-glow bg-highlight/10 blur-xl' : 'opacity-0 scale-100 blur-none'}
          `}
        ></div>
        
        {/* The Planet Video - using screen blend mode to hide black background */}
        <video 
          src={videoSrc}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-full mix-blend-screen pointer-events-none"
          style={{ mixBlendMode: 'screen', filter: 'contrast(1.2) brightness(1.1)' }}
        />

        {/* Tooltip Name */}
        <div 
          className={`absolute -top-12 bg-secondary/90 border border-highlight text-highlight font-space font-bold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none
            ${isHovered ? 'opacity-100 translate-y-0 text-shadow-glow' : 'opacity-0 translate-y-4'}
          `}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-black">
      {/* Twinkling Stars Background specifically for Home Section */}
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

      {/* Floating Interactive Planets using the actual MP4 files */}
      <div className="absolute inset-0 pointer-events-auto">
        <Planet 
          name="EARTH"
          videoSrc={`${import.meta.env.BASE_URL}planets/earth.mp4`} 
          className="top-[15%] left-[5%] md:left-[10%] w-48 h-48 md:w-64 md:h-64" 
          delay="0s" 
        />
        <Planet 
          name="JUPITER"
          videoSrc={`${import.meta.env.BASE_URL}planets/jupiter.mp4`} 
          className="bottom-[10%] right-[2%] md:right-[10%] w-64 h-64 md:w-96 md:h-96" 
          delay="2s" 
        />
        <Planet 
          name="THE MOON"
          videoSrc={`${import.meta.env.BASE_URL}planets/moon.mp4`}
          className="top-[5%] right-[10%] md:top-[10%] md:right-[15%] w-24 h-24 md:w-32 md:h-32" 
          delay="4s" 
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center bg-primary/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-8 text-shadow-glow uppercase">
          Welcome to the Cosmos
        </h2>
        <p className="text-xl text-gray-300 font-sans leading-relaxed mb-6">
          Space is not empty. It is a vast, dynamic fabric of energy, gravity, and mystery. 
          For centuries, humanity looked up at the stars and wondered. Today, we step into the void.
        </p>
        <p className="text-lg text-accent font-sans italic">
          "The universe is under no obligation to make sense to you." - Neil deGrasse Tyson
        </p>
      </div>
    </section>
  );
};

export default HomeSection;