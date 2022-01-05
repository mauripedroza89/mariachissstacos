import React from 'react';
import { MexFoodGrid, Footer, Navbar} from '../../components';
import { Heading,Box } from '@chakra-ui/react';

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
            <MexFoodGrid/>
            <Footer/>
        </div>
    )
}