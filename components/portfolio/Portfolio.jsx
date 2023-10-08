import './portfolio.css';
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

export default function Portfolio({ reference }) {
  return (
    <section
      id='portfolio'
      className='portfolio'
      ref={reference}
      // variants={sectionVariant}
      // initial='initial'
      // animate='animate'
    >
      <h1 className='portfolio-title'>Portfolio</h1>
    </section>
  );
}
