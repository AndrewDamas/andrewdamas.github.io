import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../styles/Header.css";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="Header">
        <ul className="left-side nav">
            <li data-replace="Home" className='left-side-left' onClick={() => navigate("/")}><span>Home</span></li>
            <li data-replace="About" onClick={() => navigate("/about")}><span>About</span></li>
            <li data-replace="Projects" onClick={() => navigate("/projects")}><span>Projects</span></li>
            <li data-replace="Contact" onClick={() => navigate("/contact")}><span>Contact</span></li>
        </ul>
        <ul className="right-side nav nav-list">
            <a href="https://www.github.com/AndrewDamas"><li><FontAwesomeIcon icon={faGithub} /></li></a>
            <a href="https://www.linkedin.com/in/vasiliosdamavoletes/"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
        </ul>
    </nav>
  )
}
