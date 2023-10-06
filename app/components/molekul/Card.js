import React, { Children } from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col w-full max-w-xs border border-dashed md:w-64 md:h-64 rounded-xl bg-eight hover:cursor-pointer">
      <div className="flex items-center justify-center h-2/5">
        <p className="text-sm font-medium md:text-2xl">{title}</p>
      </div>
      <div className="flex items-center justify-center md:h-3/5">
        {children}
      </div>
    </div>
  );
};

export default Card;
