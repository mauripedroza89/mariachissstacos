import React from 'react';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import './style.css'
import { Footer, Navbar, Carousels, Owner, Testimonials, Contact } from '../../components';
import mariachiphoto from '../../assets/images/mariachistruck.jpeg'
  
  export default function Dashboard() {
    return (
      <>
      <Navbar/>
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
      <Carousels/>

      <Owner/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </>
    );
  }
