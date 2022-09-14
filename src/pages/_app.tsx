import { ChakraProvider } from '@chakra-ui/react';

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
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    );
};

export default Website;
