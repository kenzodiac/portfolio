import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import { Row, Col, Container } from 'react-bootstrap';
import React, {useEffect} from 'react';

function App() {
  useEffect (() => {
    document.body.style.backgroundColor = '#1f1f21';
  }, []);

  return (
    <Homepage/>
  );
}

export default App;
