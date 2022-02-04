import React from "react";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    IconButton,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import { TiLocationOutline } from 'react-icons/ti';
import { FaMobileAlt } from 'react-icons/fa';
import { SiDoordash } from "react-icons/si";


  
  export default function Contact() {
    return (
      <Stack id="contact" 
            direction="row" 
            py={6} 
            spacing='8' 
            justifyContent={"center"}
            align={'center'}
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
       <Link href='https://goo.gl/maps/rPZHwA1gc3ftdWGm6'>         
        <Box
          maxW={'320px'}
          w={'100,500,full'}
          h={'70,170,220px'}
          bg={useColorModeValue('white', 'red.900')}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          paddingTop={50}
          >
          <IconButton  icon={<TiLocationOutline fontSize="60px" />}/>
          <Heading marginTop={3} fontSize={'2xl'} fontFamily={'body'}>
          Visit us
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('red.700', 'red.400')}
            px={3}>
            11922 Potranco Rd, San Antonio, TX 78253
          </Text>
        </Box>
        </Link>
        <Link href={"tel:+1-210-417-6754"}>
        <Box
          maxW={'320px'}
          w={'full'}
          h={'220px'}
          bg={useColorModeValue('white', 'red.900')}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          paddingTop={50}
          >
          <IconButton icon={<FaMobileAlt fontSize="60px" />}/>
          <Heading marginTop={3} fontSize={'2xl'} fontFamily={'body'}>
          Call us
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('red.700', 'red.400')}
            px={3}>
            210-417-6754
          </Text>
        </Box>
        </Link>
        <Link href={"https://food.google.com/chooseprovider?restaurantId=/g/11nmq1lvk7&g2lbs=AGgkzMwBs88DqJEq_lmHmagRPHUVL7DVA4SL4twZQFick6E4Y1QD-s60sxgKjNXE7Y4xKqJcAWGa6EON7n4hHmri2enEPCCZGQ%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMWwP9igWZeWQMczq7voErUdXMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUOzJVpjPL1YMfaXTPp5KXh-OAE%3D&gei=Dbr8YZv2DcyWaMjvsMAL&fo_s=OA,AH&orderType=1&sei=CcPHbosl7byqEZSCiFc_zWDo&utm_campaign&utm_source=search"}>
        <Box
          maxW={'320px'}
          w={'full'}
          h={'220px'}
          bg={useColorModeValue('white', 'red.900')}
          boxShadow={'dark-lg'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          paddingTop={50}
          >
          <IconButton icon={<SiDoordash fontSize="60px" />}/>
          <Heading marginTop={3} fontSize={'2xl'} fontFamily={'body'}>
          Visit us
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('red.700', 'red.400')}
            px={3}>
            Place a delivery order
          </Text>
        </Box>
        </Link>
      </Stack>
    );
  }


