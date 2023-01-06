import React from 'react';
import {Box, Container, Typography} from "@mui/material";

interface ISectionLayoutProps {
    title: string,
    children: React.ReactNode
}

const SectionLayout: React.FC<ISectionLayoutProps> = ({title, children}) => {
    return (
        <Box
            sx={{
                py: 12
            }}
        >
            <Container>
                <Box
                    sx={{
                        mb: 10
                    }}
                >
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
                        {title}
                    </Typography>
                </Box>
                <Box>
                    {children}
                </Box>
            </Container>
        </Box>
    )
};

export default SectionLayout;
