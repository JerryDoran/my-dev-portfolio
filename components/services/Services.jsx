import './services.css';
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
  return (
    <section
      id='services'
      className='services'
      ref={reference}
      // variants={sectionVariant}
      // initial='initial'
      // animate='animate'
    >
      <h1 className='services-title'>Services</h1>
    </section>
  );
}
