import React, { useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs, FaUnity, FaGithub, FaGit, FaSlack, FaFigma, FaAngular, FaSass } from 'react-icons/fa';
import { TbBrandTailwind, TbBrandCSharp, TbSql } from 'react-icons/tb';
import { SiTypescript, SiDotnet, SiVisualstudiocode, SiPostman, SiMicrosoftazure, SiNotion, SiJirasoftware, SiAzuredevops, SiBulma, SiVisualstudio } from 'react-icons/si';
import iconJson from './Skills.json';

export default function Skills() {

    const [iconData, setIconData] = useState(iconJson);
    console.log(iconData);

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case 'FaAngular': return <FaAngular size={50} />;
            case 'FaBootstrap': return <FaBootstrap size={50} />;
            case 'FaCss3Alt': return <FaCss3Alt size={50} />;
            case 'FaFigma': return <FaFigma size={50} />;
            case 'FaGit': return <FaGit size={50} />;
            case 'FaGithub': return <FaGithub size={50} />;
            case 'FaHtml5': return <FaHtml5 size={50} />;
            case 'FaJs': return <FaJs size={50} />;
            case 'FaReact': return <FaReact size={50} />;
            case 'FaSass' : return <FaSass size={50} />;
            case 'FaSlack': return <FaSlack size={50} />;
            case 'FaUnity': return <FaUnity size={50} />;
            case 'TbBrandCSharp': return <TbBrandCSharp size={50} />;
            case 'TbBrandTailwind': return <TbBrandTailwind size={50} />;
            case 'TbSql': return <TbSql size={50} />;
            case 'SiAzuredevops': return <SiAzuredevops size={50} />;
            case 'SiBulma': return <SiBulma size={50} />;
            case 'SiDotnet': return <SiDotnet size={50} />;
            case 'SiJirasoftware': return <SiJirasoftware size={50} />;
            case 'SiMicrosoftazure': return <SiMicrosoftazure size={50} />;
            case 'SiNotion': return <SiNotion size={50} />;
            case 'SiPostman': return <SiPostman size={50} />;
            case 'SiTypescript': return <SiTypescript size={50} />;
            case 'SiVisualstudio': return <SiVisualstudio size={50} />;
            case 'SiVisualstudiocode': return <SiVisualstudiocode size={50} />;
            default: return null;
        };
    };

    return (
        <div style={{ marginLeft: '10px', marginTop: '10vh' }}>

            <div className={"skills-title mb-5"} style={{ textAlign: 'center' }}>
                My <span style={{ color: "#2be88d" }}>Skills</span>
            </div>

            <div>
                <span className={"skills-section-title"}>Programming Languages:</span>
            </div>
            <div className={"d-flex justify-content-center flex-wrap mb-4"}>
                {
                    iconData != [] ? iconData.Languages.map((item, idx) => {
                        {
                            const Component = getIconComponent(item.Icon);
                            return (
                                <div className={'skill-icon'} style={{ marginTop: '6px' }} key={idx}>
                                    <div className={'icon-border'} alt={item.Alt} title={item.Name}>{Component}</div>
                                    <div style={{ position: 'absolute', top: '90px' }}>{item.Name}</div>
                                </div>
                            );
                        }
                    }) : null
                }
            </div>

            <div>
                <span className={"skills-section-title"}>Frameworks:</span>
            </div>
            <div className={"d-flex justify-content-center flex-wrap mb-4"}>
                {
                    iconData != [] ? iconData.Frameworks.map((item, idx) => {
                        {
                            const Component = getIconComponent(item.Icon);
                            return (
                                <div className={'skill-icon'} style={{ marginTop: '6px' }} key={idx}>
                                    <div className={'icon-border'} alt={item.Alt} title={item.Name}>{Component}</div>
                                    <div style={{ position: 'absolute', top: '90px' }} className={'text-center'}>{item.Name}</div>
                                </div>
                            );
                        }
                    }) : null
                }
            </div>

            <div>
                <span className={"skills-section-title"}>Productivity:</span>
            </div>
            <div className={"d-flex justify-content-center flex-wrap mb-4"}>
                {
                    iconData != [] ? iconData.Productivity.map((item, idx) => {
                        {
                            const Component = getIconComponent(item.Icon);
                            return (
                                <div className={'skill-icon'} style={{ marginTop: '6px' }} key={idx}>
                                    <div className={'icon-border'} alt={item.Alt} title={item.Name}>{Component}</div>
                                    <div style={{ position: 'absolute', top: '90px' }}>{item.Name}</div>
                                </div>
                            );
                        }
                    }) : null
                }
            </div>
        </div>
    )
}
