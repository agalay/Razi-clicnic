import React from "react";
import { NextPage } from "next";


import { Container, Button, Typography, Box, CardContent, Card, TextField, MenuItem } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import MainLayout from '../layouts/MainLayout'
import SectionLayout from "../layouts/SectionLayout";

import { CarouselMain } from "../components/Carousels/Main";
import { CarouselDoctors } from "../components/Carousels/Doctors";
import { ServiceItem, IServiceItem } from "../components/ServiceItem"
import { Checkup, ICheckup } from "../components/Cards/Checkup";

import styles from '../styles/Home.module.scss'
import CarouselReviews from "../components/Carousels/Reviews";
import CarouselNews from "../components/Carousels/News";

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
        image: 'https://placehold.co/900',
        name: 'dental',
        price: 150,
        points: ['1 test asdasd asd', '2 test test', '3 test', '4 test test test test'],
        link: 'adasd'
    },
    {
        image: 'https://placehold.co/900',
        name: 'dental2',
        price: 200,
        points: ['3 Departments', '15 Test', '15 Emergency', 'No Medical Assisdance'],
        link: 'adasd'
    },
    {
        image: 'https://placehold.co/900',
        name: 'dental3',
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
                                <Typography sx={{ my: 4 }}>
                                    Dr Linda Freemanis one of the best in, In the world, In the Galaxy. There are many variations of passages of Lorem available, but the have suffered alteration in some form, by injected humour.
                                </Typography>
                                <Button variant="contained">Learn more</Button>
                            </Grid2>
                            <Grid2 md={7} mdOffset={1}>
                                <Grid2 container>
                                    <Grid2 md={6}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', pr: 3 }}>
                                            {serviceItems.filter((_, i) => i < 2).map(item => (
                                                <ServiceItem key={item.title} {...item} />
                                            ))}
                                        </Box>
                                    </Grid2>
                                    <Grid2 md={6}>
                                        <Box sx={{ pt: 5, mt: 3 }}>
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
                    <Card sx={{
                        py: 10,
                        border: '1px solid rgba(133, 150, 167, 0.36)',
                        boxShadow: 'none',
                        borderRadius: '20px'
                    }} >
                        <Grid2 container alignItems="center">
                            <Grid2 md={4}>
                                <Box
                                    component="img"
                                    src="https://placehold.co/900"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '0 var(--border-radius) var(--border-radius) 0',
                                        objectFit: 'cover'
                                    }}
                                >

                                </Box>
                            </Grid2>
                            <Grid2 md={8} sx={{ px: 5 }}>
                                <Grid2 container spacing={3}>
                                    <Grid2 md={6}>
                                        <div>
                                            <Box
                                                component="label"
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    color: '#585858'
                                                }}
                                            >
                                                Имя
                                            </Box>
                                            <TextField
                                                size="small"
                                                fullWidth
                                                sx={{mb: 2, background: 'rgba(var(--input-bg), .15)'}}
                                            />
                                        </div>
                                        <div>
                                            <Box
                                                component="label"
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    color: '#585858'
                                                }}
                                            >
                                                Email
                                            </Box>
                                            <TextField
                                                size="small"
                                                fullWidth
                                                sx={{mb: 2, background: 'rgba(var(--input-bg), .15)'}}
                                            />
                                        </div>
                                        <div>
                                            <Box
                                                component="label"
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    color: '#585858'
                                                }}
                                            >
                                                Доктор
                                            </Box>
                                            <TextField
                                                select
                                                size="small"
                                                fullWidth
                                                sx={{mb: 2, background: 'rgba(var(--input-bg), .15)'}}
                                            >
                                                {['Гинеколог', 'Невролог', 'Педиатр'].map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>

                                        <Button variant="contained" sx={{ marginTop: '20px' }}>Создать запись</Button>
                                    </Grid2>
                                    <Grid2 md={6}>
                                        <div>
                                            <Box
                                                component="label"
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    color: '#585858'
                                                }}
                                            >
                                                Ваш пол
                                            </Box>
                                            <TextField
                                                select
                                                size="small"
                                                fullWidth
                                                sx={{mb: 2, background: 'rgba(var(--input-bg), .15)'}}
                                            >
                                                {['Муж.', 'Жен.'].map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>
                                        <div>
                                            <Box
                                                component="label"
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    color: '#585858'
                                                }}
                                            >
                                                Дата приема
                                            </Box>
                                            <TextField
                                                type="date"
                                                size="small"
                                                fullWidth
                                                sx={{mb: 2, background: 'rgba(var(--input-bg), .15)'}}
                                            />
                                        </div>

                                        <div>
                                            <Box
                                                component="label"
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    color: '#585858'
                                                }}
                                            >
                                                Отделение
                                            </Box>
                                            <TextField
                                                select
                                                size="small"
                                                fullWidth
                                            >
                                                {['Гинекология', 'Терапия', 'Урология'].map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>

                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Card>
                </SectionLayout>
                <SectionLayout title="Отзывы" container={false}>
                    <CarouselReviews/>
                </SectionLayout>
                <SectionLayout title="Наши новости" container={false}>
                    <Box sx={{marginLeft: 'calc((100% - min(90%, 70.5rem))/2)'}}>
                        <CarouselNews/>
                    </Box>
                </SectionLayout>
                <section>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11625.100768565688!2d44.8098561!3d43.245654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3f5e856b63c4858!2z0JfQtNC-0YDQvtCy0YzQtSDQv9C70Y7RgQ!5e0!3m2!1sru!2sru!4v1673267497613!5m2!1sru!2sru"
                        width="100%" height="450" style={{border: 0}} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </section>
            </MainLayout>
        </>
    )
}

export default Home;
