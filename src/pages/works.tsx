import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../layout/article';
import Section from '../components/Section';
import { WorkGridItem } from '../components/GridItem';

import Deliver from '../../public/images/deliver.png';
import TicTacToeImage from '../../public/images/tictactoe.png';
import FyloImage from '../../public/images/fylo.png';
import Chatapp from '../../public/images/chatapp.png';

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="deliverapp"
                        title="Deliver App"
                        thumbnail={Deliver}
                    >
                        App for food delivery, written in React Native.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="tictactoe"
                        title="Tic-Tac-Toe"
                        thumbnail={TicTacToeImage}
                    >
                        TicTacToe game online.
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem
                        id="fylo"
                        title="Fylo Landing Page"
                        thumbnail={FyloImage}
                    >
                        Simple landing page for Fylo.
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="chatapp"
                        thumbnail={Chatapp}
                        title="Chat app"
                    >
                        Backend and Frotend for chat app.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
);

export default Works;
