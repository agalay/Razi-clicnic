import React from 'react';
import {Badge, Box, Button, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";

export interface ICheckup {
    image: string
    name: string
    price: number
    points: string[]
    link: string
}

export const CardCheckup: React.FC<ICheckup> = (props) => {
    return (
        <Paper
            elevation={3}
            sx={{
                textAlign: 'center',
                py: 10,
                borderRadius: 5,
                background: `url(${props.image}) no-repeat center / cover`,
                color: '#fff',
                position: 'relative',
                zIndex: 0,
                '&::after': {
                    content: '""',
                    backgroundImage: 'linear-gradient(rgba(131, 148, 165, 0.49), rgba(131, 148, 165, 0.49))',
                    cursor: 'pointer',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 5,
                },
                '&:nth-child(2)': {
                    transform: 'scaleY(1.1)'
                },
            }}
        >
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}
                >
                    {props.name}
                </Typography>
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            py: 2
                        }}
                    >
                        ${props.price}
                    </Typography>
                    <Badge>Per Year</Badge>
                    <List dense sx={{textAlign: 'center'}}>
                        {props.points.map(point => (
                            <ListItem key={point}>
                                <ListItemText primary={point} />
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained">Выбрать</Button>
                </Box>
            </Box>
        </Paper>
    );
};
