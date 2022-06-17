import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar className='navBar' fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listado">Listado</Nav.Link>
            <Nav.Link href="/pelis/id">Detalles</Nav.Link>
          </Nav>
          <Search/>
        </Container>
      </Navbar>
       
    );
};

export default Header;