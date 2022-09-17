import { Badge, Container, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import Paragraph from '../../components/Paragraph';
import { Meta, Title, WorkImage } from '../../components/Work';
import Layout from '../../layout/article';

const Work = () => {
    return (
        <Layout title="chatapp">
            <Container mt={30}>
                <Title>
                    ChatApp <Badge>2021</Badge>
                </Title>
                <Paragraph>Chat app.</Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/vedran77/chat-app">
                            https://github.com/vedran77/chat-app
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            NodeJS, VueJS, MySQL, Express, Typescript, Tailwind
                        </span>
                    </ListItem>
                </List>

                <WorkImage src="/images/chatapp.png" alt="ChatApp" />
            </Container>
        </Layout>
    );
};

export default Work;
