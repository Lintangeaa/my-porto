'use client';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlineHome } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { TbListSearch } from 'react-icons/tb';
import { LiaListAltSolid } from 'react-icons/lia';

import Image from 'next/image';
import Badge from '../atom/Badge';
import MenuToggles from '../molekul/MenuToggles';
import LeftPane from '../molekul/LeftPane';
import RightPane from '../molekul/RightPane';

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <main className="relative flex">
      <MenuToggles />
      <LeftPane />
      <div className="flex-1">
        <RightPane />
      </div>
    </main>
  );
};

export default Layout;
