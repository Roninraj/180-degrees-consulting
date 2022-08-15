import { Container, Text, useColorMode, Button,IconButton, Box, Stack, Spacer, Heading, HStack, Img, Grid} from '@chakra-ui/react'

const About = () => {
    return(
        <>
            <Container paddingTop={5} paddingBottom={5} maxWidth="container.xl" bg="whiteAlpha.50">
                <Box paddingBottom={5} textAlign="center"><Heading variant='title-heading'>ABOUT US</Heading></Box>
                <Text paddingBottom={5} textAlign='center'>180 DC, BIT Mesra is a student-run consulting services provider being mentored by MBB and Big 4 consultants.</Text>
                <Text paddingBottom={5} textAlign='center'>180 DC BIT Mesra provides global networking opportunities, real-time consulting projects and novel research contributions. We work with organisations to augment ingenious, pragmatic, and sustainable solutions to whatever impediments they face.</Text>
                <Text paddingBottom={5} textAlign='center'>180 DC yokes the untapped capabilities of crème de la crème undergraduate students with the unmet needs of socially conscious organisations. 
                            It also provides an opportunity to pact, supporting non-profits organisations and social entrepreneurs in the process. We strive to educate the students about the world of Consulting, Non-Profits and other social enterprises. 
                            We focus on creating student leaders who are committed to creating a difference through a holistic learning experience</Text>
                <Box borderRadius={8} maxWidth="100%" bg='blackAlpha.500' ht={5} paddingTop={8}>
                    
                    <Heading><Container textAlign="center">Mission and Vision</Container></Heading>
                    <Container maxWidth="100%">
                        <HStack padding={10} maxWidth="100%" justifyContent="space-around" gap={2}>
                            <Container paddingBottom={5} borderRadius={5} bg="whiteAlpha.400" textAlign="center"><Heading paddingBottom={4} size="lg">MISSION</Heading>
                                <Box>To help non-profits and social enterprises overcome challenges for the greatest possible social impact by providing affordable and high quality consulting services.</Box>
                            </Container>
                            <Container paddingBottom={5} borderRadius={5} bg="whiteAlpha.400" textAlign="center"><Heading paddingBottom={4} size="lg">VISION</Heading>
                                <Box>To ensure that the movement towards resolving pressing world issues is unfettered by constraints and thereby develop the next generation of leaders.</Box>
                            </Container>
                        </HStack>
                    </Container>
                </Box>
            </Container>
        
        </>
    )
}

export default About