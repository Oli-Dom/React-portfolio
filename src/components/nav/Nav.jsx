import React, { useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { HiHome } from 'react-icons/hi';
import { MdMiscellaneousServices, MdWork } from 'react-icons/md';
import { TiUser } from 'react-icons/ti';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#home" 
      onClick={() => setActiveNav('#home')}
      className={activeNav === '#home' ? 'active' : ''}
      >
        <HiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <TiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <MdWork />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
