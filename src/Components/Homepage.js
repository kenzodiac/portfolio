import React from 'react';
import AboutMe from './AboutMe';
import Landing from './Landing';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Homepage() {
  return (
    <Container fluid className='App-header'>
        <Row>
            <Col lg={4} md={5}>
                <AboutMe/>
            </Col>
            <Col lg={8} md={7} className='overflow-auto' style={{height: '90vh'}}>
                <Landing/>
                <Skills/>
                <Projects/>
                <Footer/>
            </Col>
        </Row>
    </Container>
  )
}
