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
import { Footer, Navbar } from '../../components';
import mariachiphoto from '../../assets/images/mariachistruck.jpeg'
  
  export default function Dashboard() {
    return (
      <>
      <Navbar/>
      <Flex
        w={'full'}
        h={'100vh'}
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
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Footer/>
      </>
    );
  }
