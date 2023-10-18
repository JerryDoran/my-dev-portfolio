'use client';

import './header.css';
import { motion } from 'framer-motion';

import Navbar from '../Navbar';
import { useState } from 'react';
import MobileMenu from '../mobile/mobile-menu';

const nameVariant = {
  initial: {
    opacity: 0,
    x: -800,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
};

const descriptionVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

export default function Header({ reference, activeSection, setAboutActive }) {
  const [header, setHeader] = useState(false);

  return (
    <header
      id='header'
      ref={reference}
      className={header ? 'header-top' : null}
    >
      <div className='container'>
        <motion.div variants={nameVariant} initial='initial' animate='animate'>
          <h1 className='title'>Jerry Doran</h1>
        </motion.div>

        <div className='text-container'>
          <motion.h2
            variants={descriptionVariant}
            initial='initial'
            animate='animate'
          >
            <span>Sotware developer</span> dedicated to building innovative web
            applications and inspiring business solutions.
          </motion.h2>
        </div>
        <div className='navbar'>
          <Navbar
            handleActiveSection={activeSection}
            setHeader={setHeader}
            setAboutActive={setAboutActive}
          />
        </div>
        {/* <MobileMenu /> */}
      </div>
    </header>
  );
}
