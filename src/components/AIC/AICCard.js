
import React, { useState } from "react"

import AICModalDetails from "./AICModalDetails";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

export default function AICCard(props) {

    // TODO: Add a carousel type scroll from modal to modal.

    const [showModal, setShowModal] = useState(false);
    const [modalDetails, setModalDetails] = useState([]);
    const [detailsLoaded, setDetailsLoaded] = useState(false);

    const handleClose = () => setShowModal(false);

    const handleOpen = () => {
        setShowModal(true);

        fetch("https://api.artic.edu/api/v1/artworks/" + item.id)
            .then((res) => res.json())
            .then(
                (result) => {
                    setModalDetails(result);
                    setDetailsLoaded(true);
                },
                (error) => {
                    setDetailsLoaded(true);
                }
            );
    };

    const renderDetails = () => {
        if (detailsLoaded == false) {
            return <p>Loading...</p>
        } else if (detailsLoaded == true && modalDetails == []) {
            return <p><strong>Failed to Load Data</strong></p>
        } else {
            return <AICModalDetails data={modalDetails} />
        }
    }

    var item = props.item;

    const imageUrl = "https://www.artic.edu/iiif/2/" + item.image_id + "/full/843,/0/default.jpg";

    return (
        <>
            <Card key={item.id} onClick={handleOpen}>
                <Card.Img variant="top" src={imageUrl} alt={item.title} />
                <section>
                    <h3>{item.title}</h3>
                    <p>{item.artist_title}</p>
                </section>
            </Card>
            <Modal backdrop="static" show={showModal} onHide={handleClose} size="xl" className="artwork-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid" style={{height: "100% - 4.5rem"}}>
                    <Container>
                        <Row>
                            <Col xs={12} md={8} lg={6}>
                                <Image fluid src={imageUrl} alt={item.title} />
                            </Col>
                            <Col xs={6} md={4} lg={6}>
                                {
                                    renderDetails()
                                }
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}