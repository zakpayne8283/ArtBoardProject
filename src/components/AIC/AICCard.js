
import React, { useState } from "react"

import AICModalDetails from "./AICModalDetails";
import AICModalArtist from "./AICModalArtist";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function AICCard(props) {

    // TODO: Add a carousel type scroll from modal to modal.

    const [showModal, setShowModal] = useState(false);
    const [modalDetails, setModalDetails] = useState([]);
    const [detailsLoaded, setDetailsLoaded] = useState(false);
    const [artistDetails, setArtistDetails] = useState([]);
    const [artistLoaded, setArtistLoaded] = useState(false);

    const handleClose = () => setShowModal(false);

    const handleOpen = () => {
        setShowModal(true);

        fetch("https://api.artic.edu/api/v1/artworks/" + item.id)
            .then((res) => res.json())
            .then(
                (result) => {
                    setModalDetails(result);
                    setDetailsLoaded(true);
                    fetch("https://api.artic.edu/api/v1/agents/" + result.data.artist_id)
                        .then((aRes) => aRes.json())
                        .then(
                            (artistResult) => {
                                setArtistDetails(artistResult);
                                setArtistLoaded(true);
                            },
                            (error) => {
                                alert("ERROR");
                            }
                        )
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

    const renderArtist = () => {
        if (artistLoaded == false) {
            return <p>Loading...</p>
        } else if (artistLoaded == true && artistDetails == []) {
            return <p><strong>Failed to Load Data</strong></p>
        } else {
            return <AICModalArtist data={artistDetails} />
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
            <Modal backdrop="static" show={showModal} onHide={handleClose} fullscreen={true} size="xl" className="artwork-modal">
                <Modal.Header closeButton className={props.darkMode ? 'dark-mode' : ''} >
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={props.darkMode ? 'dark-mode show-grid' : 'show-grid'} style={{height: "100% - 4.5rem"}}>
                    <Container>
                        <Row>
                            <Col xs={12} md={8} lg={6}>
                                <Image fluid src={imageUrl} alt={item.title} />
                            </Col>
                            <Col xs={6} md={4} lg={6}>
                                <Tabs defaultActiveKey="details">
                                    <Tab eventKey="details" title="Details">
                                    {
                                        renderDetails()
                                    }
                                    </Tab>
                                    <Tab eventKey="artist" title="Artist">
                                    {
                                        renderArtist()
                                    }
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