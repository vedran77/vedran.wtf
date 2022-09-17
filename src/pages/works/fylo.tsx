import { Badge, Container, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import Paragraph from '../../components/Paragraph';
import { Meta, Title, WorkImage } from '../../components/Work';
import Layout from '../../layout/article';

const Work = () => {
    return (
        <Layout title="fylo">
            <Container mt={30}>
                <Title>
                    Fylo <Badge>2021</Badge>
                </Title>
                <Paragraph>Fylo landing Page.</Paragraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/vedran77/fylo-landing-page">
                            https://github.com/vedran77/fylo-landing-page
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, VueJS, Typescript, Tailwind</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/fylo.png" alt="FyloPage" />
            </Container>
        </Layout>
    );
};

export default Work;
