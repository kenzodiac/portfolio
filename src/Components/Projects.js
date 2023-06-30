import React from 'react'
import ProjectCard from './ProjectCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import './Projects.css';

import pokebounty from '../Assets/Images/pokemonbounty.jpg';
import all4one from '../Assets/Images/allforone.jpg';
import theweather from '../Assets/Images/theweather.jpg';
import rpsls from '../Assets/Images/rpsls.jpg';
import dond from '../Assets/Images/dond.jpg';
import gameswap from '../Assets/Images/gameswap.png';

export default function Projects() {
  return (
    <div className={"mt-5"}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div><span className='title'>Featured <span style={{ color: '#2be88d' }}>Projects</span></span></div>
      </div>
      <div className={"flexwrap"}>
        <ProjectCard title={"Stockton Mayor's website (Under Construction)"} image={'https://static.vecteezy.com/system/resources/previews/001/214/905/original/under-construction-sign-with-hat-on-traffic-cone-vector.jpg'} description={"This is a website for the Mayor of Stockton, including a dynamic Content Management System for the Mayor's office to update content with minimal developer intervention/assistance"} link={'#'} logos={['html5', 'scss', 'typescript', 'bootstrap', 'c#', 'angular']}/>
        
        <ProjectCard title={'Gameswap'} image={gameswap} description={'This is a social media/networking app oriented around matching and connecting gamers who want to trade games with each other.'} link={'https://gameswap.azurewebsites.net/'} logos={['html5', 'css', 'typescript', 'bootstrap', 'c#', 'react']} />

        <ProjectCard title={'Pokemon Bounty System'} image={pokebounty} description={`This is a desktop app that lets you search through ALL current pokemon, gets information about them, and lets you set a 'bounty' on them to remember your favorites.`} link={'https://pokemonget.azurewebsites.net/src/'} logos={['html5', 'css', 'js', 'tailwind']} />

        <ProjectCard title={'the.weather'} image={theweather} description={`This is a desktop app that pulls in daily and weekly weather information from all across the world via a weather API, and displays the information based on either the user's current location, or a location of their choosing. It also lets users save locations for easy retrieval.`} link={'https://kensfweatherapp.azurewebsites.net/'} logos={['html5', 'css', 'js', 'bootstrap']} />

        <ProjectCard title={'Rock Paper Scissors Lizard Spock'} image={rpsls} description={`This is a desktop app that lets you play the game "Rock Paper Scissors Lizard Spock" - which is the classic Rock Paper Scissors with added dimensions. You can either play vs the CPU or a 2nd player.`} link={'https://kenzodiac.github.io/FujimuraKRockPaperScissorsLizardSpock/'} logos={['html5', 'css', 'js', 'bootstrap']} />

        <ProjectCard title={'All For One'} image={all4one} description={`This is a desktop app that is a rebuild of a previous learning assignment in react. It was practice for a lot of logic in JavaScript, as well as building an API.`} link={'https://kenall4one.azurewebsites.net/'} logos={['html5', 'css', 'js', 'react', 'bootstrap', 'c#']} />

        <ProjectCard title={'Deal or No Deal'} image={dond} description={`This is a desktop app built in Unity that mimics the classic gameshow "Deal or No Deal"`} link={'https://simmer.io/@kensf/dnods9'} logos={['c#', 'unity']} />

        {/* <ProjectCard title={''} image={''} description={''} link={''} logos={[]}/> */}
      </div>

    </div>
  )
}
