import React from 'react'
import HeroSection from '../../HeroSection'
import Footer from '../Footer/Footer';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} /> 
            <HeroSection {...homeObjTwo} /> 
            <HeroSection {...homeObjFour} /> 
            <HeroSection {...homeObjThree} /> 

            <Footer></Footer>

        </>
    )
}

export default Home
