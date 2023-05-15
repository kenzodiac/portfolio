import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs, FaUnity } from 'react-icons/fa';
import { TbBrandTailwind, TbBrandCSharp } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';

export default function ProjectCard(props) {

    // function ResolveLogo(input){
    //     switch(input){
    //         case 'html5':
    //             return FaHtml5;
    //         case 'css':
    //             return FaCss3Alt;
    //         case 'boostrap':
    //             return FaBootstrap;
    //         case 'react':
    //             return FaReact;
    //         case 'js':
    //             return FaJs;
    //         case 'unity':
    //             return FaUnity;
    //         case 'tailwind':
    //             return TbBrandTailwind;
    //         case 'c#':
    //             return TbBrandCSharp;
    //         case 'ts':
    //             return SiTypescript;
    //         default:
    //             return 'error';
    //     }
    // }

    return (
        <div className={"proj-card"}>
            <div>
                <a href={props.link} target="_blank" title={props.title} alt={`Link to ${props.title}`} className={"d-flex justify-content-center my-2"}>
                    <img src={props.image} alt="" title="" style={{ width: '90%', height: 'auto', borderRadius: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'}} />
                </a>
            </div>
            <div>
                <span className={"card-title"}>{props.title}</span>
            </div>
            <div className={"my-2"} style={{width: '90%'}}>
                <span className={"card-text"}>{props.description}</span>
            </div>
            {/* <div>
                {props.logos.map((txt, idx) => (
                    let result = ResolveLogo(txt);
                    <div className="icon-boarder"><result size={30} /></div>
            ))}
            </div> */}
        </div>
    )
}