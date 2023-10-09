import React, { useState } from 'react';
import NavItem from '../atom/NavItem';

const Aside = ({ children }) => {
  return (
    <div className="absolute z-50 flex flex-col w-1/2 h-screen px-12 py-16 space-y-10 shadow-xl bg-fourth">
      <div>{children}</div>
      <NavItem title={'HOME'} />
      <NavItem title={'SERVICE'} />
      <NavItem title={'ABOUT'} />
      <NavItem title={'PORTOFOLIO'} />
      <NavItem title={'CONTACT'} />
    </div>
  );
};

export default Aside;
