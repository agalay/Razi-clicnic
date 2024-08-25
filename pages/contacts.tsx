import React from 'react'
import {NextPage} from "next";
import PageLayout from "../layouts/PageLayout";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
    Box, Button,
    Container,
    FormControl,
    List,
    ListItem,
    TextField,
    Typography
} from "@mui/material";
import appConfig from '../app.config.json'
import {phoneFormat} from "../utils/helpers/phoneFormat";


const Contacts: NextPage = () => {
    const { contacts } = appConfig
    return (
        <PageLayout title="Контакты">
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
                            <div>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: 36,
                                        color: 'var(--heading-color)',
                                        '&::before': {
                                            content: '""',
                                            clear: 'both',
                                            display: 'table',
                                            height: '3px',
                                            width: '50px',
                                            backgroundColor: 'var(--primary-color)',
                                            margin: '4px 0'
                                        }
                                    }}
                                >
                                    Наши контакты
                                </Typography>
                                <Grid2 container sx={{ marginTop: '30px'}}>
                                    <Grid2 md={5} component="address" sx={{ fontStyle: 'normal'}}>
                                        <List sx={{ width: 'max-content' }}>
                                            <ListItem sx={{
                                                p: '0',
                                                lineHeight: '30px',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                color: '#585858',
                                            }}>

                                                <Box component="span" sx={{width: '100px'}}>Email</Box>
                                                <a href={`mailto:${contacts.email}`}>
                                                    {contacts.email}
                                                </a>
                                            </ListItem>
                                            <ListItem sx={{
                                                p: '0',
                                                lineHeight: '30px',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                color: '#585858',
                                            }}>

                                                <Box component="span" sx={{width: '100px'}}>Телефон</Box>
                                                <a href={`tel:${contacts.phone}`}>
                                                    {phoneFormat(contacts.phone)}
                                                </a>
                                            </ListItem>
                                            <ListItem sx={{
                                                p: '0',
                                                lineHeight: '30px',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                color: '#585858',
                                            }}>

                                                <Box component="span" sx={{width: '100px'}}>Адрес</Box>
                                                <a href={appConfig.contacts.google_map_link}>
                                                    {contacts.address}
                                                </a>
                                            </ListItem>
                                        </List>
                                    </Grid2>
                                </Grid2>
                            </div>
                            <Box sx={{ marginTop: '40px'}}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: 36,
                                        color: 'var(--heading-color)',
                                        '&::before': {
                                            content: '""',
                                            clear: 'both',
                                            display: 'table',
                                            height: '3px',
                                            width: '50px',
                                            backgroundColor: 'var(--primary-color)',
                                            margin: '4px 0'
                                        }
                                    }}
                                >
                                    Напишите нам
                                </Typography>
                                <FormControl sx={{marginTop: '30px', width: '450px'}} component="form">
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
                                            Сообщение
                                        </Box>
                                        <TextField
                                            size="small"
                                            fullWidth
                                            multiline
                                            rows={5}
                                            maxRows={10}
                                            sx={{mb: 2, background: 'rgba(var(--input-bg), .15)'}}
                                        />
                                    </div>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{ marginTop: '30px', width: 'max-content'}}
                                    >
                                        Отправить сообщение
                                    </Button>
                                </FormControl>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </PageLayout>
    )
}

export default Contacts;
