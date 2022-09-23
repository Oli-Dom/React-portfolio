import React from 'react';
import Avatar from '../../assets/Avatar.png';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Oliver Dominguez</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={Avatar}></img>
        </div>

      </div>
    </header>
  );
};

export default Header;
