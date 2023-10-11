'use client';

import { navListData } from '@/data/navListData';
import { motion } from 'framer-motion';

import NavListItem from '@/components/NavListItem';
import { useState } from 'react';

const listVariant = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};

export default function Navbar({
  handleActiveSection,
  setHeader,
  setAboutActive,
}) {
  const [navList, setNavList] = useState(navListData);

  function handleNavClick(id, target) {
    if (target === 'header') {
      setHeader(false);
    } else {
      setHeader(true);
    }

    if (target === 'about') {
      setAboutActive(true);
    } else {
      setAboutActive(false);
    }

    const newNavList = navListData.map((navItem) => {
      navItem.active = false;
      if (navItem._id === id) {
        navItem.active = true;
      }
      return navItem;
    });
    setNavList(newNavList);
    handleActiveSection(target);
  }

  return (
    <nav id='navbar'>
      <motion.ul variants={listVariant} initial='initial' animate='animate'>
        {navList.map((item) => (
          <NavListItem
            key={item._id}
            navItem={item}
            handleNavClick={handleNavClick}
            handleActiveSection={handleActiveSection}
          />
        ))}
      </motion.ul>
    </nav>
  );
}
