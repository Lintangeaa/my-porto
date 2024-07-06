'use client';
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Load Google AdSense once component mounts
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

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
        {/* Google AdSense Ad Unit */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9332525259294865" 
          data-ad-slot="1234567890"       
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>
        
        {children}
      </div>
    </main>
  );
};

export default Layout;
