import React from 'react';
import "../styles/Projects.css";
import pokemonImg from "../images/pokemon_game.png";
import notesAppImg from "../images/notes_app.png";
import movieJunkieImg from '../images/movie_junkie.png';
import calculatorImg from '../images/calculator.png';
import shokumotsuImg from '../images/shokumotsu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

//photo is 900 X 702 px;

export default function Projects() {
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <ul className="grid">
                <a href="https://github.com/AndrewDamas/short_pokemon_minigame">
                    <li>
                        <img src={pokemonImg} alt="pokemon_screenshot" />
                        <div>
                            <h2>Pokémon Mini-Game</h2>
                            <p>Made with: HTML, CSS, and JavaScript</p>
                            <p className='git'>Click to go to GitHub</p>
                        </div>
                    </li> 
                </a>
                <a href="https://github.com/AndrewDamas/react-api-project.git">
                    <li>
                        <img src={movieJunkieImg} alt="movie_junkie_screenshot" />
                        <div>
                            <h2>Movie Junkie</h2>
                            <p>Made with: React TypeScript, CSS, and Web API TMDB</p>
                            <p className='git'>Click to go to GitHub</p>
                        </div>
                    </li> 
                </a>
                <a href="https://github.com/AndrewDamas/Notes-App">
                    <li>
                        <img src={notesAppImg} alt="notes_app_screenshot" />
                        <div>
                            <h2>Notes App</h2>
                            <p>Made with: Node.js</p>
                            <p className='git'>Click to go to GitHub</p>
                        </div>
                    </li> 
                </a>
                <a href="https://github.com/AndrewDamas/Calculator">
                    <li>
                        <img src={calculatorImg} alt="calculator_screenshot" />
                        <div>
                            <h2>Calculator App</h2>
                            <p>Made with: HTML, CSS, and JavaScript</p>
                            <p className='git'>Click to go to GitHub</p>
                        </div>
                    </li> 
                </a>
                <a href="https://github.com/OrchidsDream/Shokumotsu">
                    <li>
                        <img src={shokumotsuImg} alt="shokumotsu_screenshot" />
                        <div>
                            <h2>Shokumotsu</h2>
                            <p>Made with: HTML, CSS, and JavaScript</p>
                            <p className='git'>Click to go to GitHub</p>
                        </div>
                    </li> 
                </a>
            </ul>
        </div>
    )
}