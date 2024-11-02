import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  
    const userEmail = form.current.user_email.value; // Get the email from the form

    // Check if the email is the one that should not be allowed
    if (userEmail === 'kiranabbasi048@gmail.com') {
      setErrorMessage('Sending emails from this address is not allowed.');
      setSuccessMessage('');
      return; // Prevent sending the email
    }

    emailjs
      .sendForm('service_6vlug8j', 'template_04x2tqg', form.current, {
        publicKey: 'w6I_WICK5_u54WqT5', // Replace with your actual user ID
      })
      .then(
        () => {
          setSuccessMessage('Email sent successfully!');
          setErrorMessage('');
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.error('Failed to send email:', error); // Log the error for debugging
          setErrorMessage('Failed to send email. Please try again.');
          setSuccessMessage('');
        },
      );
  };
  

  return (
    <div id='contact' className='max-w-md mx-auto my-20 p-5 border rounded-lg shadow-md bg-white'>
      <h2 className='text-2xl font-semibold text-center mb-4'>Contact Me</h2>
      {successMessage && <p className='text-green-600'>{successMessage}</p>}
      {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
      <form ref={form} onSubmit={sendEmail} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Name</label>
          <input
            type='text'
            name='user_name'
            required
            className='mt-1 block w-full border rounded-md p-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Email</label>
          <input
            type='email'
            name='user_email'
            required
            className='mt-1 block w-full border rounded-md p-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Message</label>
          <textarea
            name='message'
            required
            className='mt-1 block w-full border rounded-md p-2'
            rows='4'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
