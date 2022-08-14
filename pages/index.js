import { Container,Wrap,WrapItem,Flex,SimpleGrid, Text, useColorMode, Button,IconButton, Box, Stack, Spacer, Heading, HStack, Image, Grid,GridItem, VStack, Center, useColorModeValue} from '@chakra-ui/react'
import ImageSlider from '../components/imageslider'
import { ImageSliderData } from '../components/imagesliderdata'
import tempImg from './process_rocket.png'


const Page = () => {
	return (
		<>
		<Container maxWidth="container.xl">
		<Container maxWidth="container.lg">
		
		<ImageSlider slides={ImageSliderData}/>
		
		
			<Container textAlign="center" maxHeight="lg" maxWidth="container.lg" overflow='hidden'>
					<Heading variant={'title-heading'}>
							Who we are...
					</Heading>
					<Box maxWidth="container.lg" paddingX={{base:'none',md:"32"}} paddingTop={5}>
							<Box>Birla Institute of Technology, Mesra, is one of the country's most prestigious and acclaimed educational universities. Founded and established by the ingenious industrialist, B.M. Birla over more than six decades ago, the college has been creating ripples of success ever since. It has churned out professionals in various fields: both technological and cultural. The university has one of the strongest alumni bases of any college in the eastern zone. The institute has always centred its focus on the welfare of its students and accordingly taken action for their nurture and education.</Box>
							
							<Container padding={5}>BIT Mesra had been conceived with a vision to be recognized as a world-class learning institution for engineering and technology. Now, it has moved beyond the fulfilment of a scholastic promise to re-defining education in the new age through the creation of aptitude and comprehensive intelligence.</Container>
					</Box>
			</Container>
		</Container>
		
			<Container maxWidth="container.lg" textAlign="center" justifyContent="center">
				<Heading justifyContent="center" alignContent='center' variant={'title-heading'} paddingY={5}>Our Services</Heading>
				We offer a plethora of services, including but not limited to...


				
				<Wrap spacing='30px' justify='center' paddingY={5} >
  				<WrapItem p={3}>
    				<Center bg='#343434' overflow='hidden' borderRadius={5} padding={5}>
						<Stack direction={{base:'column',md:'row'}}>
							<Heading variant={'title-heading'} paddingBottom={3} >Market Research</Heading>
									<Text color={useColorModeValue()}>We conduct detailed market research, competitor analysis and benchmarking to help our clients gain an in-depth understanding of the sectoral landscape, identify opportunities and navigate challenges.</Text>
						</Stack>
						</Center>
  				</WrapItem>
  				
					<WrapItem p={3}>
    				<Center bg='#343434' borderRadius={5} padding={5} gap={8}>
							<Stack direction={{base:'column',md:'row'}}>
								<Heading variant={'title-heading'} paddingBottom={3} >Branding &amp; Marketing</Heading>
							<Text color='#e9ebed'>We develop innovative branding and marketing campaigns which portray our clients’ work in the best way possible and maximise their reach.</Text>
							</Stack>
    				</Center>
  				</WrapItem>

  				<WrapItem>
    				<Center bg='#343434' borderRadius={5} padding={5} gap={8}>
						<Stack direction={{base:'column',md:'row'}}>
						<Heading variant={'title-heading'} paddingBottom={3} >Resource Management</Heading>
							<Text color={useColorModeValue()}>We help our clients attract and retain top talent by devising employee/volunteer recruitment and management strategies.</Text>
						</Stack>
						</Center>
  				</WrapItem>

  				<WrapItem>
  				  <Center bg='#343434' borderRadius={5} padding={5} gap={8}>
							<Stack direction={{base:'column',md:'row'}}>
							<Heading variant={'title-heading'} paddingBottom={3} >Process Optimization</Heading>
							<Text color={useColorModeValue()}>We identify key performance indicators and help our clients optimize business processes to maximize their operational efficiency.</Text>
							</Stack>
  				  </Center>
  				</WrapItem>

  				<WrapItem>
  				  <Center bg='#343434' borderRadius={5} padding={5} gap={8}>
						<Stack direction={{base:'column',md:'row'}}>
						<Heading variant={'title-heading'} paddingBottom={3} >Financial Planning</Heading>
							<Text color={useColorModeValue()}>We formulate funding, revenue generation and cost-cutting strategies thereby helping our clients build financially sustainable organisations.</Text>
						</Stack>
						</Center>
  				</WrapItem>

				</Wrap>
{/* 
				<Flex direction='column' gap={8} maxWidth="inherit" alignContent="center" padding={5}>

					<GridItem alignContent="top">
						<Box textAlign="center">
							<Center>
								<Img src="/process_rocket.png"></Img>
								</Center><Heading variant={'title-heading'} paddingBottom={5} >Market Research</Heading>
								We conduct detailed market research, competitor analysis and benchmarking to help our clients gain an in-depth understanding of the sectoral landscape, identify opportunities and navigate challenges.
						</Box>
					</GridItem>
				
					<GridItem alignContent="top">
						<Box textAlign="center">
							<Center><Img src="/process_rocket.png"></Img></Center>
							<Heading variant={'title-heading'} paddingBottom={5} >Branding &amp; Marketing</Heading>
							We develop innovative branding and marketing campaigns which portray our clients’ work in the best way possible and maximise their reach.
						</Box>
					</GridItem>
		 
					<GridItem alignContent="top">
						<Box textAlign="center">
							<Center><Img src="/process_rocket.png"></Img></Center>
							<Heading variant={'title-heading'} paddingBottom={5} >Resource Management</Heading>
							We help our clients attract and retain top talent by devising employee/volunteer recruitment and management strategies.
						</Box>
					</GridItem>
			
					<GridItem alignContent="top">
						<Box textAlign="center">
							<Center><Img src="/process_rocket.png"></Img></Center>
							<Heading variant={'title-heading'} paddingBottom={5} >Process Optimization</Heading>
							We identify key performance indicators and help our clients optimize business processes to maximize their operational efficiency.
						</Box>
					</GridItem>
					
					<GridItem alignContent="top">
						<Box textAlign="center">
							<Center><Img src="/process_rocket.png"></Img></Center>
							<Heading variant={'title-heading'} paddingBottom={5} >Financial Planning</Heading>
							We formulate funding, revenue generation and cost-cutting strategies thereby helping our clients build financially sustainable organisations.
						</Box>
					</GridItem>
					
				</Flex> */}

			</Container>
		
		</Container>
		</>
	)
}

export default Page