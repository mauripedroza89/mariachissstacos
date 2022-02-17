import React from 'react';
import { MexFoodGrid, Footer, Navbar} from '../../components';
import { Heading,Box, Button  } from '@chakra-ui/react';

export default function MexFood(){
    return(
        <div>
            <Navbar/>
            <Box bg={'#a9927d'} 
                  w='100%' 
                  p={4} 
                  color='#f2f4f3' 
                  borderWidth='3px' 
                  borderRadius='lg' 
                  overflow='hidden'
                  align='center'>
            <Heading>Choose between Asada, Pastor, Chicken, Birria, Barbacoa or Campechano.</Heading>

            </Box>
            <a href="/menu/food/">
            <Button
                size='md'
                bgColor='#49111c'
                textColor='#f2f4f3'
                height='48px'
                width='200px'
                border='2px'
                borderColor='#a9927d'
                >
                Go Back
                </Button>
                </a>
            <MexFoodGrid/>
            <Footer/>
        </div>
    )
}