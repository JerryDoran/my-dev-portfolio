import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
    result: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  function wait() {
    return new Promise((resolve) => setTimeout(resolve, Math.random() * 50000));
  }

  async function sendEmail(e) {
    e.preventDefault();

    setIsLoading(true);

    if (
      formData.user_name === '' ||
      formData.user_email === '' ||
      formData.message === ''
    ) {
      setFormData({
        ...formData,
        result: 'incomplete',
      });
      setIsLoading(false);
      return;
    }

    wait();

    emailjs
      .sendForm(
        'service_3f6uv6g',
        'template_n02f609',
        form.current,
        'IE7ILYoQqrxWnvJkS'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          setIsLoading(false);
          toast.success('Your message has been sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
      result: '',
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      result: '',
    });
  }

  return (
    <form ref={form} onSubmit={sendEmail} className='contact-form mt-4'>
      <div className='row'>
        <div className='col-md-6 form-group'>
          <input
            type='text'
            name='user_name'
            className='form-control'
            id='fullname'
            placeholder='Your Name'
            onChange={handleChange}
            value={formData.user_name}
          />
        </div>
        <div className='col-md-6 form-group pt-3 pt-md-0'>
          <input
            type='email'
            name='user_email'
            className='form-control'
            id='email'
            placeholder='Your Email'
            onChange={handleChange}
            value={formData.user_email}
          />
        </div>
      </div>
      <div className='form-group pt-3'>
        <input
          type='text'
          name='subject'
          className='form-control'
          id='subject'
          placeholder='Subject'
          onChange={handleChange}
          value={formData.subject}
        />
      </div>
      <div className='form-group pt-3'>
        <textarea
          name='message'
          id='message'
          rows='6'
          className='form-control'
          placeholder='How can I help?'
          onChange={handleChange}
          value={formData.message}
        ></textarea>
      </div>
      {formData.result === 'incomplete' && (
        <div className='error-message'>
          Please fill out all required fields.
        </div>
      )}
      <div className='text-center'>
        <button type='Submit'>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
