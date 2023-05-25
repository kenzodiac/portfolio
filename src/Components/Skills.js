import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs, FaUnity, FaGithub, FaGit, FaSlack, FaFigma } from 'react-icons/fa';
import { TbBrandTailwind, TbBrandCSharp, TbSql } from 'react-icons/tb';
import { SiTypescript, SiDotnet, SiVisualstudiocode, SiPostman, SiMicrosoftazure, SiNotion, SiJirasoftware } from 'react-icons/si';
import SkillIcon from './SkillIcon';

export default function Skills() {

    const htmlIcon = <FaHtml5 size={50} />;

    return (
        <div style={{ marginLeft: '10px', marginTop: '10vh' }}>

            <div className={"skills-title mb-5"} style={{ textAlign: 'center' }}>
                My <span style={{ color: "#2be88d" }}>Skills</span>
            </div>

            <div>
                <span className={"skills-section-title"}>Programming Langauges:</span>
            </div>

            <div className={"d-flex justify-content-center flex-wrap mb-4"}>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'HTML5 icon'} title={'HTML5'} icon={<FaHtml5 size={50}/>}/>
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'CSS icon'} title={'CSS'} icon={<FaCss3Alt size={50}/>}/>
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'JS icon'} title={'JavaScript'} icon={<FaJs size={50}/>}/>
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'C# icon'} title={'C#'} icon={<TbBrandCSharp size={50}/>}/>
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'TS icon'} title={'TypeScript'} icon={<SiTypescript size={50}/>}/>
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'SQL icon'} title={'SQL'} icon={<TbSql size={50}/>}/>
                </div>
            </div>

            <div>
                <span className={"skills-section-title"}>Frameworks:</span>
            </div>

            <div className={"d-flex justify-content-center flex-wrap mb-4"}>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'React icon'} title={'React'} icon={<FaReact size={50}/>} />
                </div>                
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Bootstrap icon'} title={'Bootstrap'} icon={<FaBootstrap size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Unity icon'} title={'Unity'} icon={<FaUnity size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Tailwind CSS icon'} title={'Tailwind CSS'} icon={<TbBrandTailwind size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Dotnet icon'} title={'.NET'} icon={<SiDotnet size={50}/>} />
                </div>
            </div>

            <div>
                <span className={"skills-section-title"}>Productivity:</span>
            </div>

            <div className={"d-flex justify-content-center flex-wrap mb-4"}>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'GitHub icon'} title={'GitHub'} icon={<FaGithub size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Git icon'} title={'Git'} icon={<FaGit size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Slack icon'} title={'Slack'} icon={<FaSlack size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'VSCode icon'} title={'Visual Studio Code'} icon={<SiVisualstudiocode size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Postman icon'} title={'Postman'} icon={<SiPostman size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Azure icon'} title={'Azure'} icon={<SiMicrosoftazure size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Notion icon'} title={'Notion'} icon={<SiNotion size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Figma icon'} title={'Figma'} icon={<FaFigma size={50}/>} />
                </div>
                <div className={'skill-icon'}>
                    <SkillIcon alt={'Jira icon'} title={'Jira'} icon={<SiJirasoftware size={50}/>} />
                </div>
            </div>
        </div>
    )
}
