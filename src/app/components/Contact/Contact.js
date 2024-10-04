import React from "react";
import {
    Heading,
    Box,
    Text,
    Stack,
    IconButton,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
import { TiLocationOutline } from 'react-icons/ti';
import { FaMobileAlt } from 'react-icons/fa';
import { SiDoordash } from "react-icons/si";


  export default function Contact() {
    return (
      <Stack id="contact" 

            py={6} 
            spacing='8' 
            justifyContent={"center"}
            align={'center'}
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
       <Link href='https://g.page/area51foodpark?share'>         
        <Box
          maxW={'320px'}
          w={'100,500,full'}
          h={'70,170,220px'}
          bg={useColorModeValue('#49111c', '#49111c')}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          paddingTop={50}
          >
          <IconButton icon={<TiLocationOutline color={'#a9927d'} fontSize="60px" />}/>
          <Heading color={'#f2f4f3'} marginTop={3} fontSize={'2xl'} fontFamily={'body'}>
          Visit us
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('#f2f4f3', 'red.400')}
            px={3}>
            9822 Potranco Rd, San Antonio, TX 78251
          </Text>
        </Box>
        </Link>
        <Link href={"tel:+1-210-417-6754"}>
        <Box
          maxW={'320px'}
          w={'full'}
          h={'220px'}
          bg={useColorModeValue('#49111c', 'red.900')}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          paddingTop={50}
          >
          <IconButton  icon={<FaMobileAlt color={'#a9927d'} fontSize="60px" />}/>
          <Heading color={'#f2f4f3'} marginTop={3} fontSize={'2xl'} fontFamily={'body'}>
          Call us
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('#f2f4f3', 'red.400')}
            px={3}>
            210-276-0577
          </Text>
        </Box>
        </Link>
        <Link href={"https://maps.app.goo.gl/7pX5kddJbcMu6a2G8"}>
        <Box
          maxW={'320px'}
          w={'full'}
          h={'220px'}
          bg={useColorModeValue('#49111c', 'white')}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          paddingTop={50}
          >
          <IconButton icon={<SiDoordash color={'#a9927d'} fontSize="60px" />}/>
          <Heading color={'#f2f4f3'} marginTop={3} fontSize={'2xl'} fontFamily={'body'}>
          Place an order
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('#f2f4f3', 'red.400')}
            px={3}>
            Click here
          </Text>
        </Box>
        </Link>
        
         <Box
          maxW={'320px'}
          w={'full'}
          h={'220px'}
          bg={useColorModeValue('#49111c', 'white')}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          paddingTop={50}
          >
          
          <Heading color={'#f2f4f3'} marginTop={-9} fontSize={'2xl'} fontFamily={'body'}>
          Store Hours:
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('#f2f4f3', 'red.400')}
            px={3}>
            Monday - Thursday:	
            8:00am - 11:00pm
            Friday & Saturday:
            8:00am - 12:00am
            Sunday: 8:00am - 10:00pm
          </Text>
        </Box>
        
      </Stack>
    );
  }


