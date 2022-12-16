import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Navbar() {
    return (
        <header className='py-5'>
            <Container fluid>
                <Row>
                    <Col>Reza Clinic</Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </header>
    )
}
