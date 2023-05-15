import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs, FaUnity, FaGithub, FaGit, FaSlack, FaFigma } from 'react-icons/fa';
import { TbBrandTailwind, TbBrandCSharp, TbSql } from 'react-icons/tb';
import { SiTypescript, SiDotnet, SiVisualstudiocode, SiPostman, SiMicrosoftazure, SiNotion, SiJirasoftware } from 'react-icons/si';

export default function Skills() {
  return (
    <div style={{marginLeft: '10px', marginTop: '10vh'}}>
        
        <div className={"skills-title mb-5"} style={{textAlign: 'center'}}>
            My <span style={{color: "#2be88d"}}>Skills</span>
        </div>

        <div>
            <span className={"skills-section-title"}>Programming Langauges:</span>
        </div>

        <div className={"d-flex justify-content-center flex-wrap mb-4"}>
            <div className="icon-boarder" alt={"HTML5 icon"} title={"HTML5"}><FaHtml5 size={50} /></div>
            <div className="icon-boarder" alt={"CSS icon"} title={"CSS"}><FaCss3Alt size={50} /></div>
            <div className="icon-boarder" alt={"JS icon"} title={"JavaScript"}><FaJs size={50} /></div>
            <div className="icon-boarder" alt={"C# icon"} title={"C#"}><TbBrandCSharp size={50} /></div>
            <div className="icon-boarder" alt={"TS icon"} title={"TypeScript"}><SiTypescript size={50} /></div>
            <div className="icon-boarder" alt={"SQL icon"} title={"SQL"}><TbSql size={50} /></div>
        </div>

        <div>
            <span className={"skills-section-title"}>Frameworks:</span>
        </div>
        
        <div className={"d-flex justify-content-center flex-wrap mb-4"}>
            <div className="icon-boarder" alt={"React icon"} title={"React"}><FaReact size={50} /></div>
            <div className="icon-boarder" alt={"Bootstrap icon"} title={"Bootstrap"}><FaBootstrap size={50} /></div>
            <div className="icon-boarder" alt={"Unity icon"} title={"Unity"}><FaUnity size={50} /></div>
            <div className="icon-boarder" alt={"Tailwind CSS icon"} title={"Tailwind CSS"}><TbBrandTailwind size={50} /></div>
            <div className="icon-boarder" alt={"Dotnet icon"} title={"Dotnet"}><SiDotnet size={50} /></div>
        </div>

        <div>
            <span className={"skills-section-title"}>Productivity:</span>
        </div>
        
        <div className={"d-flex justify-content-center flex-wrap mb-4"}>
            <div className="icon-boarder" alt={"GitHub icon"} title={"GitHub"}><FaGithub size={50} /></div>
            <div className="icon-boarder" alt={"Git icon"} title={"Git"}><FaGit size={50} /></div>
            <div className="icon-boarder" alt={"Slack icon"} title={"Slack"}><FaSlack size={50} /></div>
            <div className="icon-boarder" alt={"VSCode icon"} title={"Visual Studio Code"}><SiVisualstudiocode size={50} /></div>
            <div className="icon-boarder" alt={"Postman icon"} title={"Postman"}><SiPostman size={50} /></div>
            <div className="icon-boarder" alt={"Azure icon"} title={"Azure"}><SiMicrosoftazure size={50} /></div>
            <div className="icon-boarder" alt={"Notion icon"} title={"Notion"}><SiNotion size={50} /></div>
            <div className="icon-boarder" alt={"Figma icon"} title={"Figma"}><FaFigma size={50} /></div>
            <div className="icon-boarder" alt={"Jira icon"} title={"Jira"}><SiJirasoftware size={50} /></div>
        </div>
    </div>
  )
}
