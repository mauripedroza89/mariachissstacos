import React from 'react';
import { UsFoodGrid, Footer, Navbar } from '../../components';
import { Button } from '@chakra-ui/react';

export default function UsFood(){
    return(
        <div>
            <Navbar/>
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
            <UsFoodGrid/>
            <Footer/>
        </div>
    )
}