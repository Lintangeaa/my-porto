import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

const LeftPane = () => {
  return (
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
            <MdOutlineMail className="text-lg" />
            <p> Hire Me</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
