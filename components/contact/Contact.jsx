import SectionTitle from '../section-title/SectionTitle';
import ContactForm from './ContactForm';
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
      <div className='container'>
        <SectionTitle title='Contact' subtitle='How can I help?' />
        <div className='row pt-2'>
          <div className='col-md-6 d-flex align-items-stretch'>
            <div className='info-box'>
              <i className='bx bx-envelope'></i>
              <h3>Email</h3>
              <p>jerry-doran@hotmail.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
