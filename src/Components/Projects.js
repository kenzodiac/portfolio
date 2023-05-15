import React from 'react'
import ProjectCard from './ProjectCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import './Projects.css';

import pokebounty from '../Assets/Images/pokemonbounty.jpg';
import all4one from '../Assets/Images/allforone.jpg';
import theweather from '../Assets/Images/theweather.jpg';
import rpsls from '../Assets/Images/rpsls.jpg';
import dond from '../Assets/Images/dond.jpg'

export default function Projects() {
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div><span className='title'>Featured <span style={{color: '#2be88d'}}>Projects</span></span></div>
        </div>
        <div className={"flexwrap"}>
            <ProjectCard title={'Pokemon Bounty System'} image={pokebounty} description={`This is a desktop app that lets you search through all current pokemon, gets information about them, and lets you set a \'bounty\' on them to remember your favorites.`} link={'https://pokemonget.azurewebsites.net/src/'} logos={['html5', 'css', 'js', 'tailwind']}/>

            <ProjectCard title={'All For One'} image={all4one} description={`This is a desktop app that is a rebuild of a previous learning assignment in react. It was practice for a lot of logic in JavaScript, as well as building an API.`} link={'https://kenall4one.azurewebsites.net/'} logos={['html5', 'css', 'js', 'react', 'bootstrap', 'c#']}/>

            <ProjectCard title={'the.weather'} image={theweather} description={`This is a desktop app that pulls in daily and weekly weather information from all across the world via a weather API, and displays the information based either on the user's current location, or a location of their choosing. It also lets users save locations for easy retrieval.`} link={'https://kensfweatherapp.azurewebsites.net/'} logos={['html5', 'css', 'js', 'bootstrap']}/>

            <ProjectCard title={'Rock Paper Scissors Lizard Spock'} image={rpsls} description={`This is a desktop app that lets you play the game "Rock Paper Scissors Lizard Spock" - which is the classic Rock Paper Scissors with added dimensions. You can either play vs the CPU or a 2nd player.`} link={'https://kenzodiac.github.io/FujimuraKRockPaperScissorsLizardSpock/'} logos={['html5', 'css', 'js', 'bootstrap']}/>

            <ProjectCard title={'Deal or No Deal'} image={dond} description={`This is a desktop app built in Unity that mimics the classic gameshow "Deal or No Deal"`} link={'https://simmer.io/@kensf/dnods9'} logos={['c#', 'unity']}/>

            {/* <ProjectCard title={''} image={''} description={''} link={''} logos={[]}/> */}
        </div>
        
    </div>
  )
}
