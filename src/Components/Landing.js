import React from 'react';
import './Landing.css';

export default function Landing() {
  return (
    <div>
        <div className={"landing-title mt-5 pt-5"}>
            Hi, I'm <span style={{color: '#2be88d', fontSize: 'calc(10px + 8vmin)'}}>Ken</span><br/>
            <span style={{fontSize: 'calc(10px + 4vmin)'}}>An upstart junior web developer</span>
        </div>
        <div className={"text-end"}>
            <span className={"landing-subtitle"} style={{marginRight: '6%'}}>Just starting my adventure as a programmer and looking forward to it!</span>
        </div>
    </div>
  )
}
