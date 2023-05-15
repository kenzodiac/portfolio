import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import mugshot from '../Assets/Images/mugshot.png';
import './AboutMe.css';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

export default function AboutMe() {

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }

    return (
        <div className={'AboutMe'}>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Resume PDF Viewer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Document file="../Assets/resume.pdf">
                        <Page pageNumber={1}/>
                    </Document>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

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
                <Col><img src={mugshot} alt="Profile image" className='mugshot' /></Col>
            </Row>

            <Row>
                <Col className="d-flex text-center justify-content-center mb-4">
                    <span className="email-loc">kennethfujimura@gmail.com<br />
                        Based in California</span>
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center mb-5">
                    <span style={{ fontSize: "10px", color: "#5d5d5d" }}>©2023 Kenneth Fujimura All Rights Reserved</span>
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/kensf" target="_blank" title="LinkedIn Profile" alt="Link to LinkedIn Profile">
                        <div className="icon-boarder"><FaLinkedin size={30} /></div>
                    </a>

                    <a href="https://github.com/kenzodiac" target="_blank" title="GitHub Profile" alt="Link to LinkedInProfile">
                        <div className="icon-boarder"><FaGithub size={30} /></div>
                    </a>

                    <a href="#" onClick={handleShow} title="Resume" alt="Link to Resume">
                        <div className="icon-boarder"><FaFilePdf size={30} /></div>
                    </a>
                </Col>
            </Row>

        </div>
    )
}
