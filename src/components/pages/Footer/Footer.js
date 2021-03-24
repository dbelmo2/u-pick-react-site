import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FaInstagram, FaTwitter } from 'react-icons/fa'







function Footer() {



    const TWITTER_PATH = "https://twitter.com/UPickTweets";
    const INSTA_PATH = "https://www.instagram.com/upickig/";
    const LINKEDIN_PATH = "https://www.linkedin.com/in/belmontedanny/"
    const TOS_PATH = "https://docs.google.com/document/d/1prj6eKVwhc6JW3hu8AwGMi28ShaRFSGNxacRWzIJ3Uc/edit";
    const PRIVACY_POLICY_PATH = "https://docs.google.com/document/d/1Zh-eD9fstAjKVdRT5wVubkU4tq-jX5xSlOE_RbRECXk/edit";
    const [hover, setHover] = useState(false);



    const handleMouseHover = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const handleLinkedInClick = () => {
        console.log('linkedin Click');
    }


    return (
        <div className="footer__container">

            <div className="footer__links">
                    <div className="footer__link-items">
                        <h2>About Us</h2>
                            <Link to='/HowItWorks'> How it works</Link>
                            <a href={PRIVACY_POLICY_PATH}>Privacy Policy</a>
                            <a href={TOS_PATH}> Terms of Use</a>
                    </div>
                    <div className="footer__link-items">
                        <h2>Contact Us</h2>
                            <Link to='/Contact'> Email</Link>
                            <a href={LINKEDIN_PATH}> LinkedIn</a>
                    </div>
                    <div className="footer__link-items">
                        <h2>Social Media</h2>
                            <a href={INSTA_PATH}> Instagram</a>
                            <a href={TWITTER_PATH}> Twitter</a>

                    </div>

            </div>




            <div className="footer__bottom-bar">


                <div  className="footer__linkedin-container">

                    <a href={LINKEDIN_PATH}>
                        <img onClick={handleLinkedInClick} onMouseEnter={handleMouseHover}
                        onMouseLeave={handleMouseLeave} src='.images/owo.jpg' alt='logo' className="footer__linkedin-pic"/>
                    </a>
                    <div className={hover ? "footer__linkedin-text-wrapper-active" : "footer__linkedin-text-wrapper"}>
                        Hi! I built this website using React. Click here to visit my LinkedIn.
                    </div>
                </div>
                
                <a href={TWITTER_PATH}>
                    <div className="footer__social-icon">
                        <FaTwitter color='#fff' size={35}/>
                    </div>
                </a>
                <a href={INSTA_PATH}>
                    <div className="footer__social-icon">
                        <FaInstagram size={35} color="#fff"/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer
