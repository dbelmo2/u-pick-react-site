import React from 'react'
import HeroSection from '../../HeroSection'
import Footer from '../Footer/Footer';
import { homeObjFour } from './Data';



function Download() {
    return (
        <>
            <HeroSection {...homeObjFour} /> 
            <Footer ></Footer>

        </>
    )
}

export default Download
