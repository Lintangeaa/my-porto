import React from 'react';

const ItemToggle = ({ children, text }) => {
  return (
    <div className="relative flex items-center group mt-2">
      {children}
      <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
        {text}
      </div>
    </div>
  );
};

export default ItemToggle;
