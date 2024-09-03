import React, { useEffect, useState } from 'react';
import ItemToggle from '../atom/ItemToggle';
import { MdOutlineHome, MdOutlineMail } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { TbListSearch } from 'react-icons/tb';
import { LiaListAltSolid } from 'react-icons/lia';

const MenuToggles = () => {
  const [activeSection, setActiveSection] = useState('introduce');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed space-y-6 right-8 top-1/4 border border-sec border-opacity-50 rounded-full w-12 h-1/2 flex flex-col items-center justify-center text-sec opacity-70 font-light">
      <ItemToggle text={'Home'}>
        <MdOutlineHome
          className={`text-2xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer ${
            activeSection === 'introduce' ? 'text-green-500' : ''
          }`}
          onClick={() => scrollToSection('introduce')}
        />
      </ItemToggle>
      <ItemToggle text={'Me'}>
        <FaRegUser
          className={`text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer ${
            activeSection === 'me' ? 'text-green-500' : ''
          }`}
          onClick={() => scrollToSection('me')}
        />
      </ItemToggle>
      <ItemToggle text={'Resume'}>
        <IoDocumentAttachOutline
          className={`text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer ${
            activeSection === 'resume' ? 'text-green-500' : ''
          }`}
          onClick={() => scrollToSection('resume')}
        />
      </ItemToggle>
      <ItemToggle text={'Services'}>
        <TbListSearch
          className={`text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer ${
            activeSection === 'services' ? 'text-green-500' : ''
          }`}
          onClick={() => scrollToSection('services')}
        />
      </ItemToggle>
      <ItemToggle text={'Portfolio'}>
        <LiaListAltSolid
          className={`text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer ${
            activeSection === 'portfolio' ? 'text-green-500' : ''
          }`}
          onClick={() => scrollToSection('portfolio')}
        />
      </ItemToggle>
      <ItemToggle>
        <MdOutlineMail
          className={`text-xl font-thin hover:text-green-500 transition-all duration-500 cursor-pointer ${
            activeSection === 'contact' ? 'text-green-500' : ''
          }`}
          onClick={() => scrollToSection('contact')}
        />
      </ItemToggle>
    </div>
  );
};

export default MenuToggles;
