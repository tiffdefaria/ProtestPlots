import React from 'react'
import ZipcodeSection from './components/zipcode/zipcode'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {withRouter} from 'react-router';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#title">ProtestPlots</Navbar.Brand>
          <Nav activeKey="/">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/protestpg">Find Protests</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ZipcodeSection />
    </div>
  )
}
export default withRouter(App)