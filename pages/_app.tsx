import React from "react";

import type { AppProps } from 'next/app'
import Head from 'next/head'
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

import {theme} from "../theme";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Razi clinic</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>

  )
}
