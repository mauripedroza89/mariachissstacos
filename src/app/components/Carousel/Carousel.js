import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';



  function Carousels() {
   
    return (
      <div>
          <Stack id="favourites" height={{ base: '400', md: '700' }} marginX='1' marginY='1'>
                           <div className='container-fluid' style={{ display: 'block', height: 900, padding: 0 }}>  
                           <Carousel >  
                           <Carousel.Item > 
                                <Box
                                    role={'group'}
                                    p={6}
                                    w={'full'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={1}>
                                    <Box
                                        align={'center'}
                                        rounded={'lg'}
                                        borderRadius='full'
                                        mt={-12}
                                        pos={'relative'}
                                        height={{ base: '400', md: '700' }}
                                        _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                        }}
                                        _groupHover={{
                                        _after: {
                                            filter: 'blur(50px)',
                                        },
                                        }}>
                                        <Image
                                        align={'center'}
                                        rounded={'lg'}
                                        height={{ base: '400', md: '700' }}
                                        width={'90%'}
                                        objectFit={'cover'}
                                        src={'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx'}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading>1st Demo </Heading>
                                    </Carousel.Caption>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item  > 
                                <Box
                                    role={'group'}
                                    p={6}
                                    w={'full'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={1}>
                                    <Box
                                        align={'center'}
                                        rounded={'lg'}
                                        borderRadius='full'
                                        mt={-12}
                                        pos={'relative'}
                                        height={{ base: '400', md: '700' }}
                                        _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                        }}
                                        _groupHover={{
                                        _after: {
                                            filter: 'blur(50px)',
                                        },
                                        }}>
                                        <Image
                                        align={'center'}
                                        rounded={'lg'}
                                        height={{ base: '400', md: '700' }}
                                        width={'90%'}
                                        objectFit={'cover'}
                                        src={'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx'}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading>2nd Demo </Heading>
                                    </Carousel.Caption>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item  > 
                                <Box
                                    role={'group'}
                                    p={6}
                                    w={'full'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={1}>
                                    <Box
                                        align={'center'}
                                        rounded={'lg'}
                                        borderRadius='full'
                                        mt={-12}
                                        pos={'relative'}
                                        height={{ base: '400', md: '700' }}
                                        _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                        }}
                                        _groupHover={{
                                        _after: {
                                            filter: 'blur(50px)',
                                        },
                                        }}>
                                        <Image
                                        align={'center'}
                                        rounded={'lg'}
                                        height={{ base: '400', md: '700' }}
                                        width={'90%'}
                                        objectFit={'cover'}
                                        src={'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx'}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading>3rd Demo </Heading>
                                    </Carousel.Caption>
                                    </Box>
                                </Carousel.Item>
                                <Carousel.Item > 
                                <Box
                                    role={'group'}
                                    p={6}
                                    w={'full'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    rounded={'lg'}
                                    pos={'relative'}
                                    zIndex={1}>
                                    <Box
                                    align={'center'}
                                        rounded={'lg'}
                                        borderRadius='full'
                                        mt={-12}
                                        pos={'relative'}
                                        height={{ base: '400', md: '700' }}
                                        _after={{
                                        transition: 'all .3s ease',
                                        content: '""',
                                        w: 'full',
                                        h: 'full',
                                        pos: 'absolute',
                                        top: 5,
                                        left: 0,
                                        backgroundImage: `https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx`,
                                        filter: 'blur(15px)',
                                        zIndex: -1,
                                        }}
                                        _groupHover={{
                                        _after: {
                                            filter: 'blur(50px)',
                                        },
                                        }}>
                                        <Image
                                        align={'center'}
                                        rounded={'lg'}
                                        height={{ base: '400', md: '700' }}
                                        width={'90%'}
                                        objectFit={'cover'}
                                        src={'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx'}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading>4th Demo </Heading>
                                    </Carousel.Caption>
                                    </Box>
                                </Carousel.Item>
                                          </Carousel>  
                                  </div> 
                                  </Stack> 
                          </div>  
    );
  }
  
  export default Carousels;