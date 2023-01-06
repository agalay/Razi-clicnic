import React from "react";
import {NextPage} from "next";


import {Container, Button, Typography, Box} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import MainLayout from '../layouts/MainLayout'
import SectionLayout from "../layouts/SectionLayout";

import { CarouselMain } from "../components/Carousels/Main";
import { CarouselDoctors } from "../components/Carousels/Doctors";
import { ServiceItem, IServiceItem } from "../components/ServiceItem"
import { Checkup, ICheckup } from "../components/Cards/Checkup";

import styles from '../styles/Home.module.scss'

const serviceItems: IServiceItem[] = [
    {
        image: '/page-main/icon-02.png',
        title: 'Стоматология',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: '/page-main/icon-01.png',
        title: 'Кардиология',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: '/page-main/icon-03.png',
        title: 'Неврология',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
    {
        image: '/page-main/icon-04.png',
        title: 'Офтмальмология',
        text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
    },
]

const checkups: ICheckup[] = [
    {
        image: 'https://i.picsum.photos/id/158/900/900.jpg?hmac=Y_3Ec9S0exZVqUGGuRp-XSlJm4Xo9LX9FXlmMPHU7ls',
        name: 'dental',
        price: 150,
        points: ['1 test asdasd asd', '2 test test', '3 test', '4 test test test test'],
        link: 'adasd'
    },
    {
        image: 'https://i.picsum.photos/id/182/900/900.jpg?hmac=q0ngu4s_7P-Qu5LecKNdychs38Hp1f5Cay1wrZLzEY8',
        name: 'dental',
        price: 200,
        points: ['3 Departments', '15 Test', '15 Emergency', 'No Medical Assisdance'],
        link: 'adasd'
    },
    {
        image: 'https://i.picsum.photos/id/72/900/900.jpg?hmac=bhwKHEu1K27FICxIYL0Okr0hg-adXoefjl4IToY5ohA',
        name: 'dental',
        price: 300,
        points: ['1 test asdasd asd', '2 test test', '3 test', '4 test test test test'],
        link: 'adasd'
    },
]



const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Box sx={{ pb: 5 }}>
            <Container>
                <CarouselMain />
            </Container>
        </Box>
        <Box sx={{ py: 5 }} className={styles.service}>
            <Container>
                <Grid2 container spacing={3} alignItems={"center"}>
                    <Grid2 md={4}>
                        <Typography variant="h3">
                            Почему пациенты выбирают нашу клинику?
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
        <SectionLayout title="Наши чекапы">
            <Grid2 container spacing={3} alignItems={"center"}>
                {checkups.map(checkup => (
                    <Grid2 md={4} key={checkup.name} sx={{
                        '&:nth-child(2)': {
                            transform: 'scaleY(1.1)'
                        },
                    }}>
                        <Checkup
                            {...checkup}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </SectionLayout>
        <SectionLayout title="Наши доктора">
            <CarouselDoctors />
        </SectionLayout>
          <SectionLayout title="Записаться на прием">

          </SectionLayout>
      </MainLayout>
    </>
  )
}

export default Home;
