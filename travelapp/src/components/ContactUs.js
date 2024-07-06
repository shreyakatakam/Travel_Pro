import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import indiaImage from './india3.jpg'; // Adjust the path as needed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_pgwposx', 'template_ep1hiel', formData, 'eFElRgA9JAcXxt0re')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send email');
      });
  };

  return (
    <div className="container" style={{ 
        fontFamily: "'Times New Roman', Times, serif",
        height: '920px',
        backgroundImage: `url(${indiaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <style>{`
        .form-container {
          width: 550px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          color: #333;
        }

        form {
          text-align: center;
        }

        form div {
          margin-bottom: 15px;
        }

        form label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        form input,
        form textarea {
          width: 500px;
          padding: 10px;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        form button {
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }

        form button:hover {
          background-color: #555;
        }
      `}</style>
      <div className="form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
