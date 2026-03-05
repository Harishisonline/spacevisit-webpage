import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo("home")}>
          <img src={Logo} alt="Logo" className="w-10" />
          <span className="text-2xl font-space font-bold text-highlight tracking-widest text-shadow-glow">
            SpaceVisit
          </span>
        </div>
        
        <div className="hidden sm:flex items-center gap-8 text-white font-sans text-lg">
          <button onClick={() => scrollTo("home")} className="hover:text-highlight transition-colors duration-300">Home</button>
          <button onClick={() => scrollTo("features")} className="hover:text-highlight transition-colors duration-300">Features</button>
          <button onClick={() => scrollTo("pricing")} className="hover:text-highlight transition-colors duration-300">Pricing</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-highlight transition-colors duration-300">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
