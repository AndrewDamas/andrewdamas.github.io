import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

export default function About() {
    const navigate = useNavigate();
    return (
        <div className='About'>
            <h1>Hello again.</h1>
            <p>My full name is Vasilios Damavoletes, but you can refer to me by my middle name, "Andrew," and I have been into coding for about 6 months now.</p>
            <p>I am 24 years old now, and am currently nearing the end of my time at Grand Circus's Full Stack JavaScript Bootcamp, and am eager to get into the developer's work force.</p>
            <p>If you would like to see a complete list of my skills, click on the button below.</p>
            <button onClick={() => navigate('/about/skills')}>TO SKILLS</button>
        </div>
    )
}
