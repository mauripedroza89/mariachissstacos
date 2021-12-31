import React from 'react';
import { Footer, Navbar } from '../../components';

import Picture from "./gallery";

export default function Food(){
    return(
        <div>
            <Navbar/>
            <Picture />
            <Footer/>
        </div>
    )
}