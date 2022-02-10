import React from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import './Header.scss';


const Header = () => {
  return (
    <div className='social-container'>
      <h3><a href='' className='social-link'>
        IMN
      </a></h3>
      <a href='' className='social-link menu'>
       <BiMenuAltLeft size={25} />
      </a>
         </div>
  );
};

export default Header;