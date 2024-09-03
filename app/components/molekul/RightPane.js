// RightPane.js
import React from 'react';
import Badge from '../atom/Badge';
import { MdOutlineHome } from 'react-icons/md';
import { FaCode, FaRegUser } from 'react-icons/fa6';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { FaFileDownload } from 'react-icons/fa';
import { TbListSearch } from 'react-icons/tb';
import { LiaCodepen } from 'react-icons/lia';

const RightPane = () => {
  return (
    <div className="p-12 pe-20 overflow-y-auto">
      <section id="introduce" className="min-h-screen">
        <Badge>
          <MdOutlineHome />
          <p className="text-xs uppercase">Introduce</p>
        </Badge>
        <div className="mt-16">
          <p className="text-7xl font-thin">
            Say Hi from <span className="text-green-400">Lintang</span>, Website
            & Backend Developer
          </p>
          <p className="font-thin text-sec mt-5 w-96">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
          <div className="flex space-x-16 mt-20">
            <div>
              <h1 className="text-green-400 text-7xl font-extralight">3+</h1>
              <p className="font-thin text-sec text-xs w-20 uppercase">
                years of experience
              </p>
            </div>
            <div>
              <h1 className="text-green-400 text-7xl font-thin">20+</h1>
              <p className="font-thin text-sec text-xs w-40 uppercase">
                projects completed in 2 countries
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="me" className="min-h-screen">
        <Badge>
          <FaRegUser className="text-xs" />
          <p className="text-xs uppercase">About Me</p>
        </Badge>
        <article className="mt-16">
          <article className="flex flex-col justify-center ">
            <h1 className="text-5xl font-thin max-w-2xl">
              Every great design begin with an even{' '}
              <span className="text-green-400">better story</span>
            </h1>
            <p className="max-w-xl mt-10 text-sec">
              Since beginning my journey as a freelance designer nearly 8 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my
              chopsone design problem at a time.
            </p>
          </article>
        </article>
      </section>
      <section id="resume" className="max-w-[600px] min-h-screen">
        <Badge>
          <IoDocumentAttachOutline />
          <p className=" uppercase text-xs">Resume</p>
        </Badge>
        <article className="mt-16 flex space-x-12">
          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="timeline-bullet"></div>
              <div className="timeline-year text-sec text-sm">
                2023 - Present
              </div>
              <div className="flex flex-col space-y-4">
                <div>
                  <h3>Backend Developer</h3>
                  <p className="text-sm text-sec">Knitto Group</p>
                </div>
                <div>
                  <h3>Backend Developer</h3>
                  <p className="text-sm text-sec">PT. Tristar Surya Gemilang</p>
                </div>
                <div>
                  <h3>Internship - Fullstack Developer</h3>
                  <p className="text-sm text-sec">PT. Tristar Surya Gemilang</p>
                </div>
              </div>
            </div>
            <div className="timeline-item mt-10">
              <div className="timeline-bullet"></div>
              <div className="timeline-year text-sec text-sm">2022 - 2023</div>
              <div className="flex flex-col space-y-4">
                <div>
                  <h3>Internship - Backend Developer</h3>
                  <p className="text-sm text-sec">PT. Sinergi Merah Putih</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-1/2">
            <p>Download Resume Here</p>
            <a href="/myresume.pdf" download={'myresume.pdf'}>
              <FaFileDownload className="text-xl text-sec hover:text-green-400 transition-all duration-300 cursor-pointer" />
            </a>
          </div>
        </article>
      </section>
      <section id="services" className="min-h-screen max-w-[900px]">
        <Badge>
          <TbListSearch />
          <p className="uppercase text-xs">services</p>
        </Badge>
        <h1 className="mt-16 text-4xl font-thin">
          My <span className="text-green-400">Specializations</span>
        </h1>
        <article className="grid-rows-1 space-y-4 mt-6">
          <div className="w-4/5 h-40 border border-sec rounded-xl cursor-pointer hover:border-green-400 transition-all duration-300 p-8">
            <div className="flex justify-between">
              <h1 className="font-light text-xl">Website Developer</h1>
              <FaCode className="text-green-400 text-3xl" />
            </div>
            <p className="text-sec text-xs font-thin mt-4">
              I build website go live with
            </p>
            <p className="text-xs mt-8 hover:underline">12 Projects</p>
          </div>
          <div className="w-4/5 h-40 border border-sec rounded-xl cursor-pointer hover:border-green-400 transition-all duration-300 p-8">
            <div className="flex justify-between">
              <h1 className="font-light text-xl">Backend Developer</h1>
              <LiaCodepen className="text-green-400 text-3xl" />
            </div>
            <p className="text-sec text-xs font-thin mt-4">I build api for</p>
            <p className="text-xs mt-8 hover:underline">16 Projects</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default RightPane;
