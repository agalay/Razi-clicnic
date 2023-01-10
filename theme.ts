import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--main-font)',
        fontSize: 14,
        h1: {
            fontWeight: 600,
            fontSize: 46,
            color: 'var(--heading-color)',
            fontFamily: 'var(--heading-font)',
        },
        h2: {
            fontWeight: 600,
            fontFamily: 'var(--heading-font)',
        },
        h3: {
            fontWeight: 600,
            fontSize: 30,
            color: 'var(--heading-color)',
            fontFamily: 'var(--heading-font)',
        },
        h4: {
            fontWeight: 600,
            fontSize: 24,
            color: 'var(--heading-color)',
            fontFamily: 'var(--heading-font)',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'var(--heading-font)',
        },
    },
    palette: {
        primary: {
            main: 'rgba(255, 134, 134, 0.9)',
        },
        secondary: {
            main: '#585858',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    borderRadius: 100,
                    textTransform: 'none',
                    transition: 'none',
                    padding: '10px 25px',
                },
                contained: {
                    color: '#fff',
                    boxShadow: '0 6px 20px -8px rgb(255 134 134 / 90%)',
                }
            },
        },
    },
});

