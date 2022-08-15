import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  import Contactform from '../components/contactForm';
  
  export default function Contact() {
    return (
        <Box paddingY={12}>  
      <Container borderRadius={5} paddingY={5} bg="#2b2b28" maxW="full" mt={0} centerContent overflow="hidden">
            <Contactform/>
      </Container>
      </Box>
    );
  }
  