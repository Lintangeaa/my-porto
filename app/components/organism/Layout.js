'use client';
import React, { useState } from 'react';
import Aside from '../molekul/Aside';
import Logo from '../atom/Logo';
import { CgMenuGridO } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

import PlusButton from '../atom/PlusButton';

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <main className="flex lg:overflow-y-hidden">
      <div className="hidden max-h-screen lg:block lg:w-1/12">
        <div className="flex flex-col items-center justify-between w-full h-screen bg-third">
          <Logo />
          <CgMenuGridO
            className="text-5xl hover:cursor-pointer"
            onClick={toggleNav}
          />
          <PlusButton />
        </div>
      </div>
      <div className="w-full lg:w-11/12 lg:flex bg-gradient-to-l from-fifth to-fourth ">
        {showNav ? (
          <Aside>
            <AiOutlineClose
              className="absolute p-1 text-5xl rounded-full right-10 bg-fifth hover:cursor-pointer"
              onClick={toggleNav}
            />
          </Aside>
        ) : (
          ''
        )}
        {children}
      </div>
    </main>
  );
};

export default Layout;
