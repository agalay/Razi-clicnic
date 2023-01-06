import React from 'react';
import Slider from "react-slick";

import {Typography, Button, Box} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import styles from './main.module.scss'

type TSlide = {
    image: string
    title: string
    text: string
    link: string
}

export const CarouselMain: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides: TSlide[] = [
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
    return (
        <Slider {...settings}>
            {slides.map(slide => (
                <Box key={slide.title}>
                    <Grid2 container alignItems="center" spacing={3}>
                        <Grid2 md={4}>
                            <Typography variant="h1">{slide.title}</Typography>
                            <Typography sx={{my: 3}}>{slide.text}</Typography>
                            <Button variant="contained" href={slide.link}>Make Appointment</Button>
                        </Grid2>
                        <Grid2 md={8}>
                            <figure
                                className={styles.sliderImage}
                                style={{backgroundImage: `url(${slide.image})`}}
                            />
                        </Grid2>
                    </Grid2>
                </Box>
            ))}
        </Slider>
    );
}

