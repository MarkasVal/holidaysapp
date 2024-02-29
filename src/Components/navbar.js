import React from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import {useRef} from "react";
import "../Styles/main.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
        <h3>Markas Valunas</h3>
        <nav ref={navRef}>
            <button  onClick={() => {navigate('/Home')}} className='NavButton'>Home</button>
            <button onClick={() => {navigate('/Holidays')}} className='NavButton'>Holidays</button>
            <button onClick={() => {navigate('/Book')}} className='NavButton'>Book</button>
            <button onClick={() => {navigate('/Aboutus')}} className='NavButton'>About Us</button>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  );
}

export default Navbar;