'use client';

/* eslint-disable @next/next/no-img-element */
import SectionTitle from '@/components/section-title/SectionTitle';
import './about.css';
import Image from 'next/image';
import Counter from '@/components/counter/Counter';
import Skills from '@/components/skills/Skills';
// import { motion } from 'framer-motion';

// const sectionVariant = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       delay: 0,
//     },
//   },
// };

export default function About({ reference, aboutActive }) {
  return (
    <section
      id='about'
      className='about'
      ref={reference}
      // variants={sectionVariant}
      // initial='initial'
      // animate='animate'
    >
      <div className='container about-me'>
        <SectionTitle title='About' subtitle='Jerry Doran' />
        <div className='row'>
          <div className='col-lg-4 col-md-8 image-container'>
            <Image
              width={300}
              height={350}
              src='/images/jerryportfolio.png'
              alt='Jerry Doran'
              className='profile-image'
            />
          </div>
          <div className='col-lg-8 col-md-12 pt-4 pt-lg-0 content'>
            <h3 className='title'>Software Developer</h3>
            <div className='row'>
              <div className='col-lg-6'>
                <ul>
                  {/* <li className='bio-info'>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>Website: </strong>
                    <span>
                      <a href='www.jerrydoran.dev'>www.jerrydoran.dev</a>
                    </span>
                  </li> */}
                  <li className='bio-info'>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>Location: </strong>
                    <span>Youngstown, OH</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className='fst-italic description'>
              I am a self motivated and self driven software engineer with a
              passion for creating software solutions from ideas and perspective
              of others. I am constantly learning new skills and technologies to
              stay focused on current software development trends. I have many
              years of experience developing applications in enterprise
              settings. In the past several years I have specialized in web
              development to become a full stack software developer.
            </p>
            <p className='fst-italic description'>
              Whether I am working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
        </div>
      </div>
      <Counter active={aboutActive} />
      <Skills />
    </section>
  );
}
