import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import React from 'react';

import Navbar from '../components/Navbar';

const Main = ({ children, router }: any) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>vedran.wtf - Software Developer</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    );
};

export default Main;
