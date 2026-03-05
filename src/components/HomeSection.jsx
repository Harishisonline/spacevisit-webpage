import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Floating Planets Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-secondary to-primary border border-accent/20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-tr from-secondary to-primary border border-highlight/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[30%] w-32 h-32 rounded-full bg-gradient-to-bl from-accent/20 to-primary border border-accent/30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center" data-aos="fade-up">
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