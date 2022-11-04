import React from 'react';
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import headshot from '../images/headshot-square.jpeg';

function Info() {
  return (
    <section className='info'>
      <img src={headshot} alt="april copley" />
      <div className='details'>
        <h1 className="my-name">April Copley</h1>
        <h3 className="role">Software Engineer</h3>
        <p className="portfolio">aprilcopley.netlify.app</p>
        <div className="contacts">
          <button className='email'><FaEnvelope /> Email</button>
          <button className='linked-in'><FaLinkedin /> LinkedIn</button>
        </div>
      </div>
    </section>
  );
}

export default Info;