import React from 'react';
import "../styles/HomePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faFacebook, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  return (
    <div className='HomePage'>
        <header>
            <h1>Welcome, friends.</h1>
            <h1>My name is</h1>
            <h1 className='myName'>Andrew</h1>
            <h1>and I am a developer.</h1>
        </header>
        <p>Thank you for visiting my page. I really enjoy coding, and I hope you get to know me a little bit better through this.</p>
        <footer>
          <ul>
              <li><a href="https://www.twitter.com/damas2525"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.facebook.com/andrew.damas.79"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="https://www.instagram.com/andrewdamas98"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </footer>
    </div>
  )
}
