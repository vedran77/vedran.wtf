import { Badge, Container, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import Paragraph from '../../components/Paragraph';
import { Meta, Title, WorkImage } from '../../components/Work';
import Layout from '../../layout/article';

const Work = () => {
    return (
        <Layout title="tictactoe">
            <Container mt={30}>
                <Title>
                    TicTacToe <Badge>2021</Badge>
                </Title>
                <Paragraph>Simple TicTacToe game.</Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/vedran77/tic-tac-toe">
                            https://github.com/vedran77/tic-tac-toe
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, VueJS, Typescript, Tailwind</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/tictactoe.png" alt="TicTacToeLogo" />
            </Container>
        </Layout>
    );
};

export default Work;
