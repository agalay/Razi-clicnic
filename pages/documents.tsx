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
        <PageLayout title="Документы">
            <Container>
                <Box
                    sx={{
                        padding: '100px 0',
                    }}
                >
                    asdas
                </Box>
            </Container>
        </PageLayout>
    )
}

export default Contacts;
