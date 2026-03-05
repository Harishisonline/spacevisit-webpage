import React from 'react';

const FeaturesSection = () => {
  const features = [
    { title: "Gravity", desc: "The invisible force binding galaxies together, bending the very fabric of spacetime." },
    { title: "Cosmic Scale", desc: "Our solar system is just a grain of sand on the infinite beach of the observable universe." },
    { title: "Satellites", desc: "Silent sentinels orbiting our pale blue dot, connecting humanity across the globe." },
    { title: "Dark Matter", desc: "The hidden architecture of the cosmos, making up 85% of all matter in the universe." }
  ];

  return (
    <section id="features" className="relative min-h-screen py-24 px-4 flex flex-col justify-center overflow-hidden">
      {/* Space Fabric Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen pointer-events-none"
        src="fabric.mp4"
      />
      {/* Dark overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-primary/60 z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-16 text-highlight text-shadow-glow" data-aos="fade-up">
          The Mechanics of Space
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-secondary/60 backdrop-blur-sm border border-accent/30 p-8 rounded-2xl hover:border-highlight hover:box-shadow-glow transition-all duration-300 group"
            >
              <h3 className="text-2xl font-space font-semibold text-white mb-4 group-hover:text-highlight transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;