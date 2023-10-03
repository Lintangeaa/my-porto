'use client';

import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const HireMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`relative w-56 h-16 cursor-pointer `}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`absolute flex justify-center items-center z-10 h-12 w-52 bg-primary ${
          isHovered ? 'bottom-0 right-0' : 'top-0 left-0'
        }`}
      >
        <h1 className="text-xl font-semibold text-third">Here me Now</h1>
      </div>
      <div
        className={`absolute h-12 w-52 border-2 ${
          isHovered ? 'top-0 left-0' : 'bottom-0 right-0 '
        }`}
      ></div>
    </div>
  );
};

export default HireMe;
