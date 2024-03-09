import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Title from './../shared/Title';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ilcroth', 'template_a0dy2ad', form.current, {
        publicKey: 'WaVsuYe1L2XiEOcif',
      })
      .then(
        () => {
          console.log('MESSAGE SENT SUCCESSFULLY!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
<>
    <div className='flex justify-center my-20 items-center text-center'>
                <Title  description='Contact me' />
            </div>
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <label>Message</label>
        <textarea name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>

      <style>{`
        .contact-form {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          background-color: #f8f9fa;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .contact-form label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        
        .contact-form input[type="text"],
        .contact-form input[type="email"],
        .contact-form textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        
        .contact-form textarea {
          resize: vertical;
        }
        
        .contact-form input[type="submit"] {
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .contact-form input[type="submit"]:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
    </>
  );
};

export default ContactUs;
