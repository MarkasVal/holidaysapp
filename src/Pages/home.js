import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import Homepageimage from '../Components/homepageimage';
import CookiesBanner from '../Components/cookies';

function Home() {
  return (
    
    <div>
        <Navbar/>
        <Homepageimage/>
        <CookiesBanner/>
        <Footer/>
    </div>



  );
}

export default Home;