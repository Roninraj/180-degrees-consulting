import {Container,Flex,Box, Heading, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement,  Textarea,} from '@chakra-ui/react';
import {MdPhone,MdEmail,MdLocationOn,MdFacebook,MdOutlineEmail,} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 


export default function Contactform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('180DC_DEV_SERV', 'template_6vso97m', form.current, 'pts1kV_kYrcT8ugEf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }  
  return (
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box bg="#02054B" color="white" borderRadius="lg" >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button size="md" height="48px" width="200px" variant="ghost" color="#DCE2FF" _hover={{ border: '2px solid #1C6FEB' }} leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-9523593899
                        </Button>
                        <Button size="md" height="48px" width="200px" variant="ghost" color="#DCE2FF" _hover={{ border: '2px solid #1C6FEB' }} leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          bitm180dc@gmail.com
                        </Button>
                        <Button size="md" height="48px" width="200px" variant="ghost" color="#DCE2FF" _hover={{ border: '2px solid #1C6FEB' }} leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Mesra, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                      <IconButton aria-label="facebook" variant="ghost" size="lg" isRound={true} _hover={{ bg: '#0D74FF' }} icon={<MdFacebook size="28px" />}/>
                      <IconButton aria-label="github" variant="ghost" size="lg" isRound={true} _hover={{ bg: '#0D74FF' }} icon={<BsGithub size="28px" />}/>
                      <IconButton aria-label="discord" variant="ghost" size="lg" isRound={true} _hover={{ bg: '#0D74FF' }} icon={<BsDiscord size="28px" />}/>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                    <form ref={form} onSubmit={sendEmail}>
                      <VStack spacing={5}>
                      <FormControl name="from_name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />}/>
                                <Input type="text" name="from_name" size="md" />
                          </InputGroup>
                        </FormControl>

                        <FormControl name="reply_to">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />}/>
                            <Input type="email" name="reply_to" size="md" />
                          </InputGroup>
                        </FormControl>

                        <FormControl name="message">
                          <FormLabel>Message</FormLabel>
                          <Textarea name="message" borderColor="gray.300" _hover={{borderRadius: 'gray.300',}} placeholder="message"/>
                        </FormControl>

                        <FormControl id="submit-btn" float="right">
                          <Button value='Send' type='submit' variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                      </form>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }


  