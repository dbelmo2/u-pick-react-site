import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';
import { Icon } from '@material-ui/core';

function Navbar() {


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  
  const handleMenuClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
    <div className="navbar">
      <div className="navbar-container container">
        <Link to='/u-pick-react-site/' className="navbar-logo" onClick={closeMobileMenu}>
          <img alt='' src="images/upick-logo.png" style={styles.bannerLogo}/>
          UPICK
        </Link>

        <div className="menu-icon" onClick={handleMenuClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/HowItWorks' className='nav-links' onClick={closeMobileMenu}>
              How it works
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-btn'>
            {button ? (
              <Link to='/Download' className='btn-link' >
                <Button buttonStyle='btn--outline'> DOWNLOAD 
                </Button>
              </Link>
            ) : (
              <Link to='/Download' className='btn-link' onClick={closeMobileMenu}>
                <Button buttonSize='btn-mobile' buttonStyle='btn--outline'> DOWNLOAD
                </Button>
              </Link>
            )}
          </li>



        </ul>


        

      </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

const styles = {
  bannerLogo:{
    width: 58,
    height: 50
  }

}


export default Navbar
