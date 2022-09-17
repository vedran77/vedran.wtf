//@ts-nocheck

import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import Layout from '../layout/';
import theme from '../util/Theme';
import Fonts from '../components/Fonts';

type Props = {
    [key: string]: any;
};

const Website = ({ Component, pageProps, router }: Props) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
};

export default Website;
