import React from "react";
import "./Navbar.css";
import {Container,Nav,Navbar} from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom";

const Menu = () => {

    return (
<>   

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to=""> Aura Design </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio </Nav.Link>
                        <Nav.Link as={Link} to="/productos"> Productos</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet/>
</>
    );
};

export default Menu;