import React from "react";
import {Container, Button, Typography, Box} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import MainLayout from '../layouts/MainLayout'
import { MainSlider } from "../components/MainSlider"
import { ServiceItem, IServiceItem } from "../components/ServiceItem"

import styles from '../styles/Home.module.scss'
import {NextPage} from "next";

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

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Container>
            <MainSlider />
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

            </Container>
        </Box>
      </MainLayout>
    </>
  )
}

export default Home;
