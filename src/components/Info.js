import React from 'react';
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import headshot from '../images/headshot-square.jpeg';

function Info() {
  return (
    <section className='info'>
      <img src={headshot} alt="april copley" />
      <h1 className="my-name">April Copley</h1>
      <h3 className="role">Software Engineer</h3>
      <span className="portfolio">aprilcopley.netlify.app</span>
      <div className="contacts">
        <a className='email' href="http://aprilcopley.netlify.app"><FaEnvelope />Email</a>
        <a className='linked-in' href="https://www.linkedin.com/in/april-copley/"><FaLinkedin />LinkedIn</a>
      </div>
    </section>
  );
}

export default Info;