import React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Button, Typography} from "@mui/material";

export interface IDoctor {
    id: number,
    image: string,
    name: string,
    position: string,
    description?: string,
    link: string,
    video?: string
}

const Doctor: React.FC<IDoctor> = (props) => {
    return (
        <Grid2 container spacing={3} alignItems={"center"}>
            <Grid2 md={6}>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        borderRadius: 'var(--border-radius)'
                    }}
                    alt={props.name}
                    src={props.image}
                />
            </Grid2>
            <Grid2 md={6} sx={{ paddingLeft: 4 }}>
                <Typography variant="h4" sx={{ mb: 1}}>
                    {props.name}
                </Typography>
                <Typography variant="h6" sx={{ color: '#8596A7'}}>
                    {props.position}
                </Typography>
                <Typography variant="caption" sx={{ my: 4, display: 'block '}}>
                    {props.description}
                </Typography>
                <Button variant="contained">
                    Узнать больше
                </Button>
            </Grid2>
        </Grid2>
    )
}

export default Doctor;
