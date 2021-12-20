import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function InfoBubble() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    const handleOpen = () => {
        setShowModal(true);
    }

    return (
        <>
            <div id="InfoBubble" onClick={handleOpen}>
                <span id="InfoBubbleMain">i</span>
            </div>
            <Modal show={showModal} onHide={handleClose} className="info-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Tabs defaultActiveKey="about">
                                    <Tab eventKey="about" title="About">
                                        <h2>About</h2>
                                        <p>Thank you for visiting my Art Board Project.</p>
                                        <p>I found this API from <a href="https://github.com/public-apis/public-apis" target="_blank">this</a> list and thought it would be a good API to build a portfolio piece around.</p>
                                        <p>Since the data is centered around pieces of art, I looked to keep the interface as clean as possible to keep the focus on the art.</p>
                                        <p>Data provided by <a href="https://api.artic.edu/docs/#introduction" target="_blank">Art Institute of Chicago API</a></p>
                                        <p>You can view the repository <a href="https://github.com/zakpayne8283/ArtBoardProject" target="_blank">here</a>.</p>
                                    </Tab>
                                    <Tab eventKey="coming" title="Coming Soon">
                                        <p>The following list are items I'm hoping to add in the near future.</p>
                                        <ul>
                                            <li>SCSS Support</li>
                                            <li>Arrows to change what piece is open</li>
                                            <li>Links to artists</li>
                                            <li>Caching</li>
                                            <li>More museums</li>
                                        </ul>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}