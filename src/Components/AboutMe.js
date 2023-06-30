import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import mugshot from '../Assets/Images/mugshot.png';
import './AboutMe.css';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

export default function AboutMe() {

    return (
        <div className={'AboutMe'}>
            <Row>
                <Col className="about-me-header">
                    <div className="d-flex align-items-center">
                        <span className="profile-name">Ken Fujimura</span>
                    </div>
                    <div className="text-end">
                        <span className="profile-title">Junior<br />Web Developer</span>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col><img src={mugshot} alt="Profile image" className='mugshot' style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}/></Col>
            </Row>

            <Row>
                <Col className="d-flex text-center justify-content-center" style={{marginBottom: '5%'}}>
                    <span className="email-loc">
                        kennethfujimura @ gmail .com<br/>
                        (209) 565 - 0015<br/>
                        Based in California
                    </span>
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center" style={{marginBottom: '7%'}}>
                    <a href="https://www.linkedin.com/in/kensf" target="_blank" title="LinkedIn Profile" alt="Link to LinkedIn Profile">
                    <div class="skill-icon">
                        <div className="icon-boarder"><FaLinkedin size={30} /></div>
                        <div style={{ position: 'absolute', top: '70px' }}>LinkedIn</div>
                    </div>
                    </a>

                    <a href="https://github.com/kenzodiac" target="_blank" title="GitHub Profile" alt="Link to LinkedInProfile">
                    <div class="skill-icon">
                        <div className="icon-boarder"><FaGithub size={30} /></div>
                        <div style={{ position: 'absolute', top: '70px' }}>GitHub</div>
                    </div>
                    </a>

                    <a href="https://drive.google.com/file/d/1XEaj610ObaagF99Xk7Lyo0SGSCg321iv/view?usp=sharing" target="_blank" title="Resume" alt="Link to Resume">
                        <div class="skill-icon">
                            <div className="icon-boarder"><FaFilePdf size={30} /></div>
                            <div style={{ position: 'absolute', top: '70px' }}>Resume</div>
                        </div>
                    </a>
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center" style={{marginBottom: '5%'}}>
                    <span style={{ fontSize: "10px", color: "#5d5d5d" }}>©2023 Kenneth Fujimura All Rights Reserved</span>
                </Col>
            </Row>
        </div>
    )
}
