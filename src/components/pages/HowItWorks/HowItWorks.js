import React from 'react'
import HeroSection from '../../HeroSection'
import Footer from '../Footer/Footer';
import { homeObjTwo } from './Data';
function HowItWorks() {
    return (
        <>
            <HeroSection {...homeObjTwo} /> 
            <Footer></Footer>
        </>
    )
}

export default HowItWorks
