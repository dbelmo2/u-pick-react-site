import React from 'react'
import HeroSection from '../../HeroSection'
import Footer from '../Footer/Footer';
import { homeObjThree } from './Data';

function Contact() {
    return (
        <>
            <HeroSection {...homeObjThree} />
            <Footer></Footer>
 
        </>
    )
}

export default Contact
