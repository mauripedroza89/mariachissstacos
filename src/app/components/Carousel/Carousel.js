import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {
    Box,
    useColorModeValue,
    Heading,
    Stack,
    Image,
  } from '@chakra-ui/react';

import image1 from '../../assets/images/banner.jpeg';
import image2 from '../../assets/images/freshdrinks.jpeg';
import image3 from '../../assets/images/food/wings.jpeg';
import image4 from '../../assets/images/food/carousel2.jpeg';
import image5 from '../../assets/images/food/carousel3.jpeg';
import image6 from '../../assets/images/cristo1.jpeg';  
import image7 from '../../assets/images/newcarousel.jpeg';


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
                                        backgroundImage: `url(${image6})`,
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
                                        maxW={'100%'}
                                        maxH={'100%'}
                                        objectFit={'cover'}
                                        src={image6}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                {/* <Heading textShadow="2px 2px #ff0000" > Dear customers, we are located in 12275 Potranco Rd, 78253, Area 51 Food Park, thanks!</Heading> */}
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
                                        backgroundImage: `url(${image7})`,
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
                                        maxW={'100%'}
                                        maxH={'100%'}
                                        objectFit={'cover'}
                                        src={image7}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading textShadow="2px 2px #ff0000" > </Heading>
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
                                        backgroundImage: `url(${image1})`,
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
                                        maxW={'100%'}
                                        maxH={'100%'}
                                        objectFit={'cover'}
                                        src={image1}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading textShadow="2px 2px #ff0000" > </Heading>
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
                                        backgroundImage: `url(${image2})`,
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
                                        maxW={'100%'}
                                        maxH={'100%'}
                                        objectFit={'cover'}
                                        src={image2}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading textShadow="2px 2px #ff0000" >Lemonade and Horchata </Heading>
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
                                        backgroundImage: `url(${image3})`,
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
                                        maxW={'100%'}
                                        maxH={'100%'}
                                        objectFit={'cover'}
                                        src={image3}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading textShadow="2px 2px #ff0000" >Wings</Heading>
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
                                        backgroundImage: `url(${image4})`,
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
                                        maxW={'100%'}
                                        maxH={'100%'}
                                        objectFit={'cover'}
                                        src={image4}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading textShadow="2px 2px #ff0000" >Dorados </Heading>
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
                                        backgroundImage: `url(${image5})`,
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
                                        maxW={'100%'}
                                        maxH={'100%'}
                                        objectFit={'cover'}
                                        src={image5}
                                        />
                                    </Box>
                                    <Carousel.Caption>
                                <Heading textShadow="2px 2px #ff0000" >Birria, asada, suadero, pastor, buche, tripas, barbacoa and chorizo </Heading>
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