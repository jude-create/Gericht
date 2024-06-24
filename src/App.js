import React from 'react';
import './App.css';
import {Navbar, Header, Intro, Laurels, Gallery, FindUs, Footer}  from './components';
import AboutUs from './components/about us/AboutUs';
import Chef from './components/chef/Chef';
import SpecialMenu from './components/special menu/SpecialMenu';



function App() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />

    </div>
      
    </div>
  );
}

export default App;
