import React from 'react';
import {Button, Carousel, Col, Row} from "react-bootstrap";

import classes from '../styles/MainSlider.module.scss'


const slides = [
    {
        image: 'https://i.picsum.photos/id/679/900/900.jpg?hmac=djA16Fqy3klscx2S9SF3OjgTL5j4XpK4Dw3Nf143T8k',
        title: 'Uncompromising excellence. Commitment to care.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
        link: 'test',
    },
    {
        image: 'https://i.picsum.photos/id/244/900/900.jpg?hmac=w8yBVcv0Y6YdCBm6fe8t21vc_7AnQx4IDszS4vs7Ft8',
        title: 'Your Community Hospital Providing Generations of Caring',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
        link: 'test1',
    },
    {
        image: 'https://i.picsum.photos/id/925/900/900.jpg?hmac=ciWUHxcnQsbjkMmo2PfConEljKNJFt_0fT8SHUBA7Gc',
        title: 'World class care right where you need it ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
        link: 'test2',
    }
]

export default function MainSlider() {
    return (
        <Carousel indicators={false}>
            {slides.map(slide => (
                <Carousel.Item key={slide.title}>
                    <Row className="align-items-center">
                        <Col md={4}>
                            <h1 className="mb-4">{slide.title}</h1>
                            <p className="mb-4">{slide.text}</p>
                            <Button variant={"primary"} href={slide.link}>Make Appointment</Button>
                        </Col>
                        <Col md={8}>
                            <figure
                                className={classes.sliderImage}
                                style={{backgroundImage: `url(${slide.image})`}}
                            />
                        </Col>
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

