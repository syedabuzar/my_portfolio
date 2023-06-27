import React from 'react';

import Logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>{/* <img src={null} alt='Muhammad Abuzar' /> */}</a>
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer flex items-center justify-center '
          >
            <button className='btn btn-sm'> Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
