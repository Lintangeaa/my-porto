import React from 'react';
import Aside from '../molekul/Aside';
import Side from './Side';

const Layout = ({ children }) => {
  return (
    <main className="flex">
      <div className="hidden max-h-screen lg:block lg:w-1/12">
        <Side />
      </div>
      <div className="w-full lg:w-11/12 lg:flex bg-gradient-to-l from-fifth to-fourth">
        {children}
      </div>
    </main>
  );
};

export default Layout;
