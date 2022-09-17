import { Badge, Container, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import Paragraph from '../../components/Paragraph';
import { Meta, Title, WorkImage } from '../../components/Work';
import Layout from '../../layout/article';

const Work = () => {
    return (
        <Layout title="deliverapp">
            <Container mt={30}>
                <Title>
                    DeliverApp <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    App for food delivery, written in React Native with Expo.
                </Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/vedran77/deliver-app">
                            https://github.com/vedran77/deliver-app
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Expo, ReactNative, Tailwind</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/deliver.png" alt="deliverapp" />
            </Container>
        </Layout>
    );
};

export default Work;
