import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Pages/Hero.jsx';
import About from './Pages/About.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx';
import Services from './Pages/Services.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero id="hero"/>
      <div className='w-[90vw] h-[2px] bg-[#242A41] m-auto mb-2'></div>
      <About id="about" />
      <div className='w-[90vw] h-[2px] bg-[#242A41] m-auto mb-2'></div>
      <Portfolio id="portfolio" />
      <Services id="services"/>
      <Contact id="contact" />
      <Footer/>
    </div>
  )
}

export default App

