'use client';

import './header.css';
import { motion } from 'framer-motion';

import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import MobileMenu from '../MobileMenu';

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
      // delay: 1,
    },
  },
};

const buttonVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.5,
    },
  },
};

export default function Header({ reference, activeSection, setAboutActive }) {
  const [header, setHeader] = useState(false);
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    function updateMedia() {
      if (window.innerWidth > 900) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <header
      id='header'
      ref={reference}
      className={header ? 'header-top' : null}
    >
      <div className='container'>
        <motion.div
          variants={nameVariant}
          initial='initial'
          animate='animate'
          className='title-container'
        >
          {!header ? (
            <h1 className='title'>Customize Business Solutions</h1>
          ) : (
            <h1 className='title'>Doran Software</h1>
          )}
        </motion.div>

        <div className='text-container'>
          <motion.h2
            variants={descriptionVariant}
            initial='initial'
            animate='animate'
          >
            <span>Sotware development</span> dedicated to building innovative
            web applications and inspiring business solutions.
          </motion.h2>
        </div>
        <div className='navbar'>
          {isDesktop ? (
            <Navbar
              handleActiveSection={activeSection}
              setHeader={setHeader}
              setAboutActive={setAboutActive}
            />
          ) : (
            <MobileMenu
              handleActiveSection={activeSection}
              setHeader={setHeader}
              setAboutActive={setAboutActive}
            />
          )}
        </div>
        <motion.div
          variants={buttonVariant}
          initial='initial'
          animate='animate'
        >
          <button className='btn mt-4 button'>
            <i className='bi bi-telephone-fill'></i>
            Schedule a Call Now
          </button>
        </motion.div>
      </div>
    </header>
  );
}
