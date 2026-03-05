import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Deep Space Starfield (Twinkling) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 2 + 2 + 's'
            }}
          ></div>
        ))}
      </div>

      <div 
        className="relative z-10 w-full max-w-lg bg-secondary/80 backdrop-blur-md border border-accent/40 rounded-3xl p-10 text-center box-shadow-glow"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-space font-bold text-white mb-4">Establish Connection</h2>
        <p className="text-gray-400 mb-10 font-sans">Transmit your signals across the void to connect with the creator.</p>
        
        <div className="flex justify-center gap-8">
          <a 
            href="https://github.com/Harishisonline" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border border-accent/50 group-hover:border-highlight group-hover:box-shadow-glow transition-all duration-300">
              <FaGithub className="text-3xl text-gray-300 group-hover:text-highlight transition-colors" />
            </div>
            <span className="font-space text-sm tracking-wider text-gray-400 group-hover:text-highlight">GITHUB</span>
          </a>

          <a 
            href="https://linkedin.com/in/HarishPradhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border border-accent/50 group-hover:border-highlight group-hover:box-shadow-glow transition-all duration-300">
              <FaLinkedin className="text-3xl text-gray-300 group-hover:text-highlight transition-colors" />
            </div>
            <span className="font-space text-sm tracking-wider text-gray-400 group-hover:text-highlight">LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;