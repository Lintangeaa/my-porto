import React from 'react';

const NavItem = ({ title }) => {
  return (
    <div className="w-full text-4xl font-semibold text-white hover:border-b-4 hover:border-solid hover:border-primary hover:cursor-pointer">
      {title}
    </div>
  );
};

export default NavItem;
