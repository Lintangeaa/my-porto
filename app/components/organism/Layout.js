'use client';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlineHome } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { TbListSearch } from 'react-icons/tb';
import { LiaListAltSolid } from 'react-icons/lia';

import PlusButton from '../atom/PlusButton';
import Image from 'next/image';
import Badge from '../atom/Badge';

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <main className="relative flex">
      <div className="fixed space-y-6 right-8 top-1/4 border border-sec border-opacity-50 rounded-full w-12 h-1/2 flex flex-col items-center justify-center text-sec opacity-70 font-light">
        <div className="relative flex items-center group">
          <MdOutlineHome className="text-2xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer" />
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
            Home
          </div>
        </div>
        <div className="relative flex items-center group mt-2">
          <FaRegUser className="text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer" />
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
            Me
          </div>
        </div>
        <div className="relative flex items-center group mt-2">
          <IoDocumentAttachOutline className="text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer" />
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
            Resume
          </div>
        </div>
        <div className="relative flex items-center group mt-2">
          <TbListSearch className="text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer" />
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
            Services
          </div>
        </div>
        <div className="relative flex items-center group mt-2">
          <LiaListAltSolid className="text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer" />
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
            Portofolio
          </div>
        </div>
        <div className="relative flex items-center group mt-2">
          <MdOutlineMail className="text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer" />
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
            Contact
          </div>
        </div>
      </div>
      <div className="relative flex items-center group mt-2">
        <IoDocumentAttachOutline className="text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer" />
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded transition-all duration-500">
          Portofolio
        </div>
      </div>
      <div className="sticky top-0 w-2/6 h-screen p-12 overflow-hidden">
        <div className="border border-green-500 rounded-2xl min-h-[650px] flex flex-col items-center p-10 text-white">
          <div className="flex justify-between w-full">
            <h1 className="text-sm lg:text-2xl">Lintang</h1>
            <div className="mb-4 text-xs text-end">
              <p>Web Developer</p>
              <p>& Backend Developer</p>
            </div>
          </div>
          <Image
            src={'/mypoto.webp'}
            width={150}
            height={50}
            alt="Lintang Dandung Prakoso"
            className="max-w-[30px] lg:max-w-full rounded-2xl border border-green-400 min-w-full"
          />
          <h2 className="mt-10 text-lg">lintangeaa25@gmail.com</h2>
          <h2 className="text-lg">Indonesia</h2>
          <p className="mt-4 text-xs text-slate-300">
            @ 2024 Lintang. All Right Reserverd
          </p>
          <div className="flex justify-between w-4/6 mt-6">
            <div className="flex items-center justify-center w-12 h-12 border rounded-full border-slate-300">
              <FaXTwitter />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border rounded-full border-slate-300">
              <FaInstagram />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border rounded-full border-slate-300">
              <FaFacebook />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border rounded-full border-slate-300">
              <FaGithub />
            </div>
          </div>
          <div className="flex justify-center w-full mt-8">
            <button className="flex items-center justify-center w-full p-2 px-6 space-x-2 text-black transition-all duration-500 bg-green-400 border rounded-3xl hover:bg-dark border-dark hover:border-green-500 hover:text-green-500">
              {' '}
              <MdOutlineMail className="text-lg" />
              <p> Hire Me</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="sticky top-0 w-full h-20 lg:hidden bg-dark">aa</div>
        <div className="p-12 overflow-y-auto">
          <section id="">
            <Badge>
              <MdOutlineHome />
              <p>Introduce</p>
            </Badge>
            <div id="section1" className="h-[1000px] mb-4">
              <h2 className="text-xl font-semibold">Section 1</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div id="section2" className="h-[1000px]  mb-4">
              <h2 className="text-xl font-semibold">Section 2</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div id="section3" className="h-[1000px]  mb-4">
              <h2 className="text-xl font-semibold">Section 3</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Layout;
