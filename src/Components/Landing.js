import React from 'react';
import './Landing.css';
import useTypeWriter from 'react-typewriter-hook';

export default function Landing() {

    const text = useTypeWriter(`An upstart junior web developer`, { delay: 30 })

    return (
        <div>
            <div className={"landing-title mt-5 pt-5"}>
                Hi, I'm <span style={{ color: '#2be88d', fontSize: 'calc(10px + 8vmin)' }}>Ken</span><br />
                <span style={{ fontSize: 'calc(10px + 4vmin)' }}>{text}</span>
            </div>
            <div className={"mt-2 landing-about-txt-div"}>
                <span className={"landing-subtitle"}>I've been an educator for over a decade, but now I'm challenging myself to take a leap into an exiciting career change of becoming a web developer. To date, I've spent nine months and over 1,000 hours of intense, instructor-led coursework to learn a firm foundation in web development. Combining all the skills I've accured through working as a teacher, the experience and maturity I've gained over the years, and this new passion for coding, I hope to make my mark and leave a lasting impression on everyone and everything I work with.</span>
            </div>
        </div>
    )
}