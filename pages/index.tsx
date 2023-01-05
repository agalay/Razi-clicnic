import React from "react";
import {Container, Button, Typography} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import MainLayout from '../layouts/MainLayout'
import MainSlider from "../components/MainSlider"
import ServiceItem, {IServiceItem} from "../components/ServiceItem"

import styles from '../styles/Home.module.scss'

const serviceItems: IServiceItem[] = [
    {
        image: 'https://i.picsum.photos/id/809/63/63.jpg?hmac=PdNbiAHAICj7wd6qkwzamQOacNE9voJTOYUmdWOmrbo',
        title: 'dental  ',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: 'https://i.picsum.photos/id/809/63/63.jpg?hmac=PdNbiAHAICj7wd6qkwzamQOacNE9voJTOYUmdWOmrbo',
        title: 'cardiovascular',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: 'https://i.picsum.photos/id/809/63/63.jpg?hmac=PdNbiAHAICj7wd6qkwzamQOacNE9voJTOYUmdWOmrbo',
        title: 'neurology',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: 'https://i.picsum.photos/id/809/63/63.jpg?hmac=PdNbiAHAICj7wd6qkwzamQOacNE9voJTOYUmdWOmrbo',
        title: 'ophtalmologue',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
]

export default function Home() {
  return (
    <>
      <MainLayout>
        <section>
            <Container>
                <MainSlider />
            </Container>
        </section>
        <section className={`py-5 text-bg-gray ${styles.service}`}>
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
                                <div className="d-flex flex-column align-items-end pe-3">
                                    {serviceItems.filter((_, i) => i < 2).map(item => (
                                        <ServiceItem key={item.title} {...item} />
                                    ))}
                                </div>
                            </Grid2>
                            <Grid2 md={6}>
                                <div className="pt-5 mt-3">
                                    {serviceItems.filter((_, i) => i >= 2).map(item => (
                                        <ServiceItem key={item.title} {...item} />
                                    ))}
                                </div>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </section>
        <section>
            <Container>

            </Container>
        </section>
      </MainLayout>
    </>
  )
}
