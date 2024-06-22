import React from 'react'
import {NextPage} from "next";
import PageLayout from "../layouts/PageLayout";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Container, Typography} from "@mui/material";

const Contacts: NextPage = () => {
    return (
        <PageLayout title="Контанты">
            <Box
                sx={{
                    padding: '100px 0',
                    background: `url(./page-contacts/cable-call-communication.png) no-repeat center / cover`,
                }}
            >
                <Container>
                    <Grid2 container>
                        <Grid2 md={5}>

                        </Grid2>
                        <Grid2 md={7}>
                            <Typography
                                variant="h2"
                                sx={{
                                    textAlign: 'center',
                                    fontSize: 36,
                                    color: 'var(--heading-color)',
                                    '&::before': {
                                        content: '""',
                                        clear: 'both',
                                        display: 'table',
                                        height: '3px',
                                        width: '50px',
                                        backgroundColor: 'var(--primary-color)',
                                        margin: '0 auto 4px'
                                    }
                                }}
                            >
                                Наши контакты
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </PageLayout>
    )
}

export default Contacts;
