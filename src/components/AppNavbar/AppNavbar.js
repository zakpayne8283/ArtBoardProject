import React, { useState, useContext } from "react";

import { _AppContext } from "../../context";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNavbar(props) {

    const [ appState, dispatch ] = useContext(_AppContext);
    const [ typing, setTyping ] = useState(0);

    const callUpdateSearch = (e) => {
        e.preventDefault();
        
        if (typing) {
            clearTimeout(typing);
        }

        setTyping(setTimeout(function() {
            dispatch({ type: 'dataPage', dataPage: 1})
            dispatch({ type: 'queryURL', queryURL: "https://api.artic.edu/api/v1/artworks/search?q=" + e.target.value + "&limit=24&fields=id,image_id,title,artist_title"})
        }, 500))
    }

    let background = appState.darkMode ? "dark" : "light";

    return (
        <Navbar className="fixed-top" bg={background} expand="lg" id="Nav"> 
            <Container>
                <Navbar.Brand href="#" onClick={(e) => e.preventDefault()}>Art Lookup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Text>Chicago Institute of Art</Navbar.Text>
                        <Form>
                            <FormControl                            
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => callUpdateSearch(e)}
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}