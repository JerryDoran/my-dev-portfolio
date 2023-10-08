import './contact.css';
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

export default function Contact({ reference }) {
  return (
    <section
      id='contact'
      className='contact'
      ref={reference}
      // variants={sectionVariant}
      // initial='initial'
      // animate='animate'
    >
      <h1 className='contact-title'>Contact</h1>
    </section>
  );
}
