
import React, { useState } from 'react';
import './Contact.css';
import { FaHouseUser, FaTabletAlt, FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation before submitting
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all fields.');
      return;
    }

    // Submit the form data to an API endpoint
    fetch('https://644a0616a8370fb321430768.mockapi.io/student', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          // Form submission successful
          alert('Form submitted successfully');
          // Reset the form data
          setFormData({ name: '', email: '', message: '' });
          setFormError('');
        } else {
          // Form submission failed
          throw new Error('Form submission failed.');
        }
      })
      .catch(error => {
        // Handle error during form submission
        console.error('Error:', error);
        setFormError('An error occurred. Please try again later.');
      });
  };

  return (
    <div className="bgcontact">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-8">
              <label className="contactlabel">Get in Touch</label><br /><br />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="100"
                rows="7"
                placeholder="Enter Message"
                className='form-control'
              ></textarea><br />
              <div className="row">
                <div className="col-lg-6 pt-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                    className='form-control'
                    required
                  />
                </div>
                <div className="col-lg-6 pt-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter email address'
                    className='form-control'
                    required
                  />
                </div>
              </div>
              {formError && <p className="error">{formError}</p>}
              <button type="submit" className="Submitbtn">Submit</button>
            </div>

            <div className="col-lg-4 rightcolform">
              <div className="rightcolindent">
                <FaHouseUser className="contacticon" />
                <span className="iconaddress">
                  <a href="https://www.bing.com/maps/embed-a-map?src=SHELL&cp=31.708328902310328~76.93229414223765&lvl=11.07&form=LMLTEW" className="iconaddress">
                    HP Distt. Mandi
                  </a>
                </span>
              </div><br />
              <div className="rightcolindent">
                <FaTabletAlt className="contacticon" />
                <span className="iconaddress"> +91 7876030787</span>
              </div><br />
              <div className="rightcolindent">
                <FaRegEnvelope className="contacticon" />
                <a href="mailto:attalanjali2001@gmail.com" className="iconaddress">
                  attalanjali2001@gmail.com
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


