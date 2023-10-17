'use client';

import { useState } from 'react';
import SectionTitle from '../section-title/SectionTitle';
import './services.css';
import { serviceData } from '@/data/servicesData';
import ServiceCard from './ServiceCard';
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

export default function Services({ reference }) {
  const [services, setServices] = useState(serviceData);
  return (
    <section
      id='services'
      className='services'
      ref={reference}
      // variants={sectionVariant}
      // initial='initial'
      // animate='animate'
    >
      <div className='container'>
        <SectionTitle title='Services' subtitle='My Services' />
        <div className='row'>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
