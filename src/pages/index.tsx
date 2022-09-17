//@ts-nocheck

import React from 'react';
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { FaChevronRight } from 'react-icons/fa';
import NextLink from 'next/link';
import { BioSection, Bold } from '../components/Bio';

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                mt={14}
                textAlign="center"
            >
                Hello, I&apos;m a Software Developer.
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Vedran Vucic
                    </Heading>
                    <p>Software Developer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/vedran.png"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About Me
                </Heading>
                <Paragraph>
                    I currently live in Banja Luka, a city in Bosnia and
                    Herzegovina. I am 19 years old and I create web and desktop
                    applications. Ever since I was a kid I have had love for
                    computers and the way they work. I&apos;m constantly working
                    on myself and trying to grasp as much new knowledge as I
                    can.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button
                            rightIcon={<FaChevronRight />}
                            colorScheme="teal"
                        >
                            Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Experience
                </Heading>
                <BioSection>
                    <Bold>
                        <span>&#8226; </span> 2003
                    </Bold>
                    Born in Banja Luka, Bosnia and Herzegovina.
                </BioSection>
                <BioSection>
                    <Bold>
                        <span>&#8226; </span> 2017
                    </Bold>
                    Computer science high school.
                </BioSection>
                <BioSection>
                    <Bold>
                        <span>&#8226; </span> 2019
                    </Bold>
                    Working as a freelancer.
                </BioSection>
                <BioSection>
                    <Bold>
                        <span>&#8226; </span> 2022
                    </Bold>
                    Software Developer at Codaxy.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Technologies
                </Heading>
                <Paragraph>
                    <Bold>Frontend</Bold>
                    <Paragraph>
                        <span>&#8226; </span> JavaScript | Typescript | React |
                        Vue | ReactNative | NextJS
                    </Paragraph>
                </Paragraph>
                <Paragraph>
                    <Bold>UI Libraries</Bold>
                    <Paragraph>
                        <span>&#8226; </span> TailwindCSS | ChakraUI | daisyUI
                    </Paragraph>
                </Paragraph>
            </Section>
        </Container>
    );
};

export default Page;
