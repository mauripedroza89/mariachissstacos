import React from 'react';
import { MexFoodGrid, Footer, Navbar} from '../../components';
import { Heading,Box, Button, ButtonGroup  } from '@chakra-ui/react';

export default function MexFood(){
    return(
        <div>
            <Navbar/>
            <Box bg={'red.400'} 
                  w='100%' 
                  p={4} 
                  color='white' 
                  borderWidth='3px' 
                  borderRadius='lg' 
                  overflow='hidden'
                  align='center'>
            <Heading>Choose between Asada, Pastor, Chicken, Birria, Barbacoa or Campechano.</Heading>

            </Box>
            <a href="/menu/food/">
                <Button
                size='md'
                colorScheme='red'
                height='48px'
                width='200px'
                border='2px'
                borderColor='red.500'
                >
                Go Back
                </Button>
                </a>
            <MexFoodGrid/>
            <Footer/>
        </div>
    )
}