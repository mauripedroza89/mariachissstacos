import React from 'react';
import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    Image 
   
  } from '@chakra-ui/react';
  import './style.css'
import { Footer, Navbar, Carousels, Owner, Testimonials, Contact } from '../../components';
import mariachiphoto from '../../assets/images/mariachistruck.jpeg';
import foodmenu from '../../assets/images/menu.jpeg';
  
  export default function Dashboard() {
    return (
      <Stack backgroundColor='#f2f4f3'>
        
      <Navbar/>
      <Stack>
        <Image 
        align={'center'}
        rounded={'lg'}
        maxW={'100%'}
        maxH={'60%'}
        objectFit={'cover'}
        src={''}/>
      </Stack>
      <Carousels/>
      <Stack marginX='1' marginY='1'>
      <Flex
      
        w={{ base: '400', md: 'full' }}
        h={{ base: '400', md: '100vh' }}
        align={'center'}
        backgroundImage={
          mariachiphoto
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={900}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Welcome to <br/>
              Mariachisss Tacos!<br/>
              From Jalisco to USA!
            </Text>
          </Stack>
        </VStack>
      </Flex>
      </Stack>
      <Stack marginX='1' marginY='1'>
      <Flex
        id='prices'
        w={{ base: '400', md: '70vh', lg: '120vh' }}
        h={{ base: '400', md: '70vh', lg: '120vh' }}
        marginLeft={{ base: '', md: '', lg: '15%' }}
        align={'center'}
        backgroundImage={
          foodmenu
        }
        backgroundSize={'100%'}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={'center center'}>
      </Flex>
      </Stack>
      

      <Owner/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </Stack>
    );
  }
