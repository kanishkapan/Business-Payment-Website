import React, { useState } from "react";
import "./Button.css"; // Import CSS for button styles (if needed)

const Button = ({ styles }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <button
      type="button"
      className={`relative py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      Get Started
      {/* Conditional rendering for hover effect */}
      {isHovered && (
        <span className="absolute inset-0 bg-blue-gradient rounded-[10px] transform scale-150 opacity-0 transition-all duration-300 z-10 mix-blend-overlay"></span>
      )}
    </button>
  );
};

export default Button;
