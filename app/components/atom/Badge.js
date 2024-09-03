import React from 'react';

const Badge = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-w-[100px] max-w-[120px] font-light p-1 px-2 space-x-2 text-white border rounded-2xl border-sec">
      {children}
    </div>
  );
};

export default Badge;
