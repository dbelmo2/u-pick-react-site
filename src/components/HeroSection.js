import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { Contact } from './Contact';
const APPSTORE_PATH = "https://apps.apple.com/us/app/u-pick/id1549772448";
const GOOGLEPLAY_PATH = "https://play.google.com/store/apps/details?id=com.demboiz.upick";

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    hasDownloadButton,
    hasContactForm,
    hasButton

}) {
    return (
    <>
    <div className={lightBg ? 'home__hero-section': 'home__hero-section darkBg' }>
        <div className="container">
            <div className="row home_hero-row"
            style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
            >
                <div className="col">
                    <div className="home__hero-text-wrapper">
                        <div className="top-line">{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {description}</p>

                        
      
              

                        {hasDownloadButton ? (
                        <>
                        <div className="home__download-container">
                            <a href={APPSTORE_PATH}>
                                <img alt="AppStore" src="../images/appstore_badge.svg" className="home__download-img"/>
                            </a>
                        
                            <a href={GOOGLEPLAY_PATH}>
                                <img alt="Google Play" src="../images/google_play_badge.png" className="home__download-img"/>
                            </a>
                        </div>
                        </>
                        
                        ) : (
                            null
                        ) }

                        {hasContactForm ? <Contact> </Contact> : (
                            null
                        )}
                        
                        {hasButton ? (
                            <Link to='/Download'>
                                <Button buttonStyle="btn--outline">
                                    {buttonLabel}
                                </Button>
                            </Link>
                        ) : (
                            null
                        )}




                    </div>
                </div>
                <div className="col">
                    <div className="home__hero-img-wrapper">
                        <img src={img} alt={alt} className="home__hero-img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
    </>
    );
}

export default HeroSection
