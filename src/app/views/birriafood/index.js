import React from 'react';
import { BirriaFoodGrid, Footer, Navbar } from '../../components';
import { Button } from '@chakra-ui/react';


export default function UsFood(){
    return(
        <div>
            <Navbar/>
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
            <BirriaFoodGrid/>
            <Footer/>
        </div>
    )
}