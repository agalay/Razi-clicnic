import React from "react";
import {Container, Button, Typography, Box, Stack} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import MainLayout from '../layouts/MainLayout'
import { SliderMain } from "../components/SliderMain"
import { ServiceItem, IServiceItem } from "../components/ServiceItem"

import styles from '../styles/Home.module.scss'
import {NextPage} from "next";
import {CardCheckup, ICheckup} from "../components/CardCheckup";

const serviceItems: IServiceItem[] = [
    {
        image: '/page-main/icon-02.png',
        title: 'dental  ',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: '/page-main/icon-01.png',
        title: 'cardiovascular',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: '/page-main/icon-03.png',
        title: 'neurology',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: '/page-main/icon-04.png',
        title: 'ophtalmologue',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
]

const checkups: ICheckup[] = [
    {
        image: 'https://i.picsum.photos/id/158/900/900.jpg?hmac=Y_3Ec9S0exZVqUGGuRp-XSlJm4Xo9LX9FXlmMPHU7ls',
        name: 'dental',
        price: 150,
        points: ['1 test', '2 test'],
        link: 'adasd'
    },
    {
        image: 'https://i.picsum.photos/id/182/900/900.jpg?hmac=q0ngu4s_7P-Qu5LecKNdychs38Hp1f5Cay1wrZLzEY8',
        name: 'dental',
        price: 200,
        points: ['1 test', '2 test'],
        link: 'adasd'
    },
    {
        image: 'https://i.picsum.photos/id/72/900/900.jpg?hmac=bhwKHEu1K27FICxIYL0Okr0hg-adXoefjl4IToY5ohA',
        name: 'dental',
        price: 300,
        points: ['1 test', '2 test'],
        link: 'adasd'
    },
]

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Container>
            <SliderMain />
        </Container>
        <Box sx={{ py: 5 }} className={styles.service}>
            <Container>
                <Grid2 container spacing={3} alignItems={"center"}>
                    <Grid2 md={4}>
                        <Typography variant="h3">
                            Why Patients Choose Our Hospital ?
                        </Typography>
                        <Typography sx={{my: 4}}>
                            Dr Linda Freemanis one of the best in, In the world, In the Galaxy. There are many variations of passages of Lorem available, but the have suffered alteration in some form, by injected humour.
                        </Typography>
                        <Button variant="contained">Learn more</Button>
                    </Grid2>
                    <Grid2 md={7} mdOffset={1}>
                        <Grid2 container>
                            <Grid2 md={6}>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', pr: 3}}>
                                    {serviceItems.filter((_, i) => i < 2).map(item => (
                                        <ServiceItem key={item.title} {...item} />
                                    ))}
                                </Box>
                            </Grid2>
                            <Grid2 md={6}>
                                <Box sx={{ pt: 5, mt: 3}}>
                                    {serviceItems.filter((_, i) => i >= 2).map(item => (
                                        <ServiceItem key={item.title} {...item} />
                                    ))}
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
        <Box>
            <Container>
                <Grid2 container spacing={3} alignItems={"center"}>
                    {checkups.map(checkup => (
                        <Grid2 md={4} key={checkup.name}>
                            <CardCheckup
                                {...checkup}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
      </MainLayout>
    </>
  )
}

export default Home;
