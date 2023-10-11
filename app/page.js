'use client';

import { useRef, useState } from 'react';

import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Header from '@/components/header/Header';
import Portfolio from '@/components/portfolio/Portfolio';
import Resume from '@/components/resume/Resume';
import Services from '@/components/services/Services';

export default function Home() {
  const [aboutActive, setAboutActive] = useState(false);
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const servicesRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const sections = [
    {
      name: 'header',
      ref: homeRef,
      active: true,
    },
    {
      name: 'about',
      ref: aboutRef,
      active: false,
    },
    {
      name: 'resume',
      ref: resumeRef,
      active: false,
    },
    {
      name: 'services',
      ref: servicesRef,
      active: false,
    },
    {
      name: 'portfolio',
      ref: portfolioRef,
      active: false,
    },
    {
      name: 'contact',
      ref: contactRef,
      active: false,
    },
  ];

  function handleActiveSection(target) {
    sections.map((section) => {
      section.ref.current.classList.remove('section-show');

      if (section.ref.current.id === target) {
        section.ref.current.classList.add('section-show');
      }
      return section;
    });
  }

  return (
    <main className=''>
      <Header
        reference={homeRef}
        activeSection={handleActiveSection}
        setAboutActive={setAboutActive}
      />
      <About
        reference={aboutRef}
        activeSection={handleActiveSection}
        aboutActive={aboutActive}
      />
      <Resume reference={resumeRef} activeSection={handleActiveSection} />
      <Services reference={servicesRef} activeSection={handleActiveSection} />
      <Portfolio reference={portfolioRef} activeSection={handleActiveSection} />
      <Contact reference={contactRef} activeSection={handleActiveSection} />
    </main>
  );
}
