import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Galaxy Swirl Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 mix-blend-screen pointer-events-none"
        src={`${import.meta.env.BASE_URL}pricing-bg.mp4`}
      />
      {/* Dark overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-primary/40 z-0 pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl" data-aos="zoom-in" data-aos-duration="1500">
        <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-10 tracking-widest uppercase text-shadow-glow">
          The Cost of Exploration
        </h2>
        
        <div className="space-y-8 my-16">
          <p className="text-2xl md:text-4xl font-sans text-gray-200 animate-pulse">
            "Space is infinite."
          </p>
          <p className="text-2xl md:text-4xl font-sans text-gray-300 animate-pulse" style={{ animationDelay: '1s' }}>
            "The universe cannot be owned."
          </p>
          <p className="text-2xl md:text-4xl font-sans text-highlight animate-pulse" style={{ animationDelay: '2s' }}>
            "The cosmos belongs to everyone."
          </p>
        </div>

        <div className="mt-12">
          <p className="text-lg text-accent font-space uppercase tracking-widest border-t border-b border-accent/30 py-4 inline-block">
            Priceless Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;