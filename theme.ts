import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontFamily: 'var(--main-font)',
        fontSize: 16,
        h1: {
            fontWeight: 600,
            fontSize: 46,
            color: 'var(--heading-color)',
            fontFamily: 'var(--heading-font)',
        },
        h3: {
            fontWeight: 600,
            fontSize: 30,
            color: 'var(--heading-color)',
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
                    borderRadius: '6px',
                    textTransform: 'none',
                    transition: 'none',
                },
                contained: {
                    color: '#fff',
                    boxShadow: '0 6px 20px -8px rgb(255 134 134 / 90%)',
                }
            },
        },
    },
});

