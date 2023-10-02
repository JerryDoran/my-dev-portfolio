'use client';

import './header.css';
import { navListData } from '@/data/navListData';
import { motion } from 'framer-motion';

import NavListItem from '@/components/NavListItem';
import { useState } from 'react';

const nameVariant = {
  initial: {
    opacity: 0,
    x: -1000,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
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
      duration: 1,
      delay: 1.5,
    },
  },
};

const listVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};

export default function Header() {
  const [navList, setNavList] = useState(navListData);
  function handleNavClick(id) {
    const newNavList = navListData.map((navItem) => {
      navItem.active = false;
      if (navItem._id === id) {
        navItem.active = true;
      }
      return navItem;
    });
    setNavList(newNavList);
  }
  return (
    <header id='header'>
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
            As a skilled <span>full-stack developer</span>, I am dedicated to
            turning ideas into innovative web applications and building
            inspiring business solutions.
          </motion.h2>
        </div>
        <nav id='navbar' className='navbar'>
          <motion.ul variants={listVariant} initial='initial' animate='animate'>
            {navList.map((item) => (
              <NavListItem
                key={item._id}
                navItem={item}
                handleNavClick={handleNavClick}
              />
            ))}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}
