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
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Welcome to Mariachisss Tacos!
              The best birria in San Antonio!
            </Text>
          </Stack>
        </VStack>
      </Flex>
      </Stack>
      

      <Owner/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </Stack>
    );
  }
